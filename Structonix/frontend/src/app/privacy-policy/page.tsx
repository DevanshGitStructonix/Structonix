'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            {/* Minimal Header Banner */}
            <section className="relative bg-dark-navy text-white py-24 md:py-32 flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-sm">
                                <span className="font-bold text-xs text-white">S</span>
                            </div>
                            <span className="font-bold text-sm tracking-widest uppercase text-primary">LEGAL</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-secondary tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-medium">
                            Last Updated: August 11, 2026
                        </p>
                    </div>
                </div>
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto prose prose-neutral lg:prose-lg font-secondary">
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            At Structonix, we are committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy details how we collect, use, and safeguard your personal information when you interact with our website and services.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We collect information necessary to provide you with customized Pre-Engineered Building (PEB) design, fabrication, and erection services. This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
                            <li><strong>Contact Details:</strong> Name, business email, phone number, and mailing address.</li>
                            <li><strong>Project Requirements:</strong> Information you submit regarding structural layouts, building dimensions, location, and load requirements.</li>
                            <li><strong>Usage Data:</strong> Information about how you navigate our website, including your IP address, browser type, and page interactions.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Your information is used strictly to fulfill project inquiries and improve our structural engineering services:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
                            <li>To generate structural design plans and engineering estimates.</li>
                            <li>To contact you regarding inquiry replies, project timelines, and site verification.</li>
                            <li>To comply with industry-specific safety audits and legal regulations.</li>
                            <li>To analyze website metrics to optimize online user experience.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            3. Data Sharing & Protection
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Structonix does not sell, rent, or trade your personal information. We only share details with trusted logistics coordinators or subcontractors directly involved in the fabrication and erection of your building under strict confidentiality agreements.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We employ robust electronic and managerial security protocols to secure information collected online and at our Wada manufacturing plant.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            4. Cookies and Analytics
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We use cookies to keep track of site analytics and page load performance. You can choose to accept or decline cookies through your browser settings, though this may impact full website functionalities.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            5. Your Rights & Contacts
                        </h2>
                        <p className="text-gray-600 mb-8">
                            You have the right to request access to, edit, or delete any personal information we hold. If you have questions regarding this policy, please contact us at:
                        </p>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 mb-8">
                            <h4 className="font-bold text-dark-slate mb-2">Structonix Office</h4>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Gut 445/446, At post Dinkarpada,<br />
                                Pratibha Colony, Wada, Palghar,<br />
                                Maharashtra, 421312
                            </p>
                            <p className="text-primary font-bold mt-4 text-sm md:text-base">
                                Email: anand.structonix@gmail.com | Tel: +91 99130 56994
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
