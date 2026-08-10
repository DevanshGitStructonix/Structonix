'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfServicePage() {
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
                            Terms of Service
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
                            Welcome to the Structonix website. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                        </p>

                        <hr className="my-10 border-gray-200" />

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-600 mb-8">
                            By visiting our site, interacting with our design portfolio, or submitting project inquiry forms, you accept these terms. If you do not agree to all terms and conditions, you should refrain from using our services or accessing our website.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            2. Professional Design & Service Estimations
                        </h2>
                        <p className="text-gray-600 mb-6">
                            All Pre-Engineered Building (PEB) design recommendations, structural drawing views, and estimates displayed on the website are for initial reference.
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
                            <li>Formal contracts, pricing, and structural plans are finalized solely through signed corporate agreements.</li>
                            <li>Tekla and STAAD designs remain the intellectual property of Structonix until full project execution and handover.</li>
                            <li>Standard timeline projections are dependent on timely site clearances, structural clearances, and raw steel market availability.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            3. Intellectual Property Rights
                        </h2>
                        <p className="text-gray-600 mb-8">
                            All site content—including images, text, logos, project specifications, and structural steel graphics—is owned by Structonix and protected under copyright laws. You may not copy, replicate, or commercially exploit any material without explicit written consent.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            4. Limitation of Liability
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Structonix is not liable for any direct or indirect damages arising out of website downtime, visual display inaccuracies, or project inquiries that fail to submit due to network issues. External site link outs are provided as reference and do not constitute an endorsement.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            5. Governing Law
                        </h2>
                        <p className="text-gray-600 mb-8">
                            These Terms of Service shall be governed by and interpreted in accordance with the laws of India, under the jurisdiction of the courts of Palghar/Mumbai, Maharashtra.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-dark-slate mb-4 mt-8">
                            6. Updates to Terms
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We reserves the right to modify these Terms of Service at any time. Changes take effect immediately upon being posted to this page.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
