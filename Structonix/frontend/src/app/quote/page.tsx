import { QuoteForm } from "@/components/Forms/QuoteForm";

export default function QuotePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#F4991A] font-bold tracking-widest uppercase text-sm mb-4 block">Request an Estimation</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#121C22] mb-6">Start Your Project Today</h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Ready to build? Fill out the form below with your project details, and our engineering team will provide you with a preliminary quote and timeline.
                    </p>
                </div>

                <QuoteForm />
            </div>
        </div>
    );
}
