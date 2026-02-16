import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { formType, ...formData } = body;

        let tableName = '';
        let records = [];

        // Map form types to Airtable Tables and Fields
        // NOTE: Ensure these Table Names exist in your Airtable Base!
        switch (formType) {
            case 'contact':
                tableName = 'Contact Us'; // Table Name
                records = [{
                    fields: {
                        Name: formData.name,
                        Email: formData.email,
                        Phone: formData.phone,
                        Message: formData.message,
                        Status: 'New'
                    }
                }];
                break;
            case 'inquire':
                tableName = 'Inquiries'; // Table Name
                records = [{
                    fields: {
                        Name: formData.name,
                        Phone: formData.phone,
                        Interest: formData.interest,
                        Message: formData.message,
                        Status: 'New'
                    }
                }];
                break;
            case 'quote':
                tableName = 'Quotes'; // Table Name
                records = [{
                    fields: {
                        Name: formData.name,
                        Company: formData.company,
                        Email: formData.email,
                        Phone: formData.phone,
                        ProjectType: formData.projectType,
                        Area: formData.area, // Ensure this is a number or text depending on Airtable setup
                        Budget: formData.budget,
                        Message: formData.message,
                        Status: 'Unreviewed'
                    }
                }];
                break;
            default:
                return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
        }

        try {
            await base(tableName).create(records);
            return NextResponse.json({ success: true, message: 'Form submitted successfully' });
        } catch (airtableError: any) {
            console.error('Airtable Error:', airtableError);
            // Check for common errors
            if (airtableError.error === 'NOT_FOUND') {
                return NextResponse.json({ error: `Table '${tableName}' not found in Airtable. Please create it.` }, { status: 500 });
            }
            return NextResponse.json({ error: 'Failed to submit to Airtable', details: airtableError.message }, { status: 500 });
        }

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
