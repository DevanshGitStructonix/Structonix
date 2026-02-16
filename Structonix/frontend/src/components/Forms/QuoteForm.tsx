'use client';

import { useState } from 'react';
import { Loader2, Calculator } from 'lucide-react';

export function QuoteForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [areaValue, setAreaValue] = useState(5000); // Default area

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            formType: 'quote',
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            projectType: formData.get('projectType'),
            area: formData.get('area'),
            budget: formData.get('budget'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Submission failed');
            setStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-100">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Request a Detailed Quote</h3>
                <p className="text-gray-500">Provide your project details and get a customized estimation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Details */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-[#F4991A] uppercase tracking-wider border-b pb-2">01. Contact Info</h4>
                    <div className="space-y-4">
                        <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all" placeholder="Your Name" />
                        <input type="text" name="company" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all" placeholder="Company Name (Optional)" />
                        <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all" placeholder="Email Address" />
                        <input type="tel" name="phone" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all" placeholder="Phone Number" />
                    </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-[#F4991A] uppercase tracking-wider border-b pb-2">02. Project Specs</h4>
                    <div className="space-y-4">
                        <select name="projectType" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all appearance-none cursor-pointer">
                            <option value="" disabled selected>Select Project Type</option>
                            <option value="Factory">Industrial Factory</option>
                            <option value="Warehouse">Warehouse / Logistics</option>
                            <option value="Commercial">Commercial Building</option>
                            <option value="Renovation">Renovation / Retrofit</option>
                        </select>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Estimated Area: <span className="text-[#F4991A] font-bold">{areaValue.toLocaleString()} sq. ft.</span></label>
                            <input
                                type="range"
                                name="area"
                                min="1000"
                                max="100000"
                                step="1000"
                                value={areaValue}
                                onChange={(e) => setAreaValue(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F4991A]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                <span>1k sq.ft.</span>
                                <span>100k+ sq.ft.</span>
                            </div>
                        </div>

                        <select name="budget" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all appearance-none cursor-pointer">
                            <option value="" disabled selected>Estimated Budget Range</option>
                            <option value="<50L">Less than ₹50 Lakhs</option>
                            <option value="50L-1Cr">₹50 Lakh - ₹1 Cr</option>
                            <option value="1Cr-5Cr">₹1 Cr - ₹5 Cr</option>
                            <option value="5Cr+">More than ₹5 Cr</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Additional Details</label>
                <textarea name="message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4991A] outline-none transition-all resize-none" placeholder="Is there anything specific we should know?"></textarea>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#121C22] text-white font-bold py-5 rounded-xl hover:bg-black transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? <Loader2 className="animate-spin w-6 h-6" /> : <><Calculator className="w-6 h-6" /> Get My Estimation</>}
            </button>

            {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                    Quote request received! We will analyze your requirements and get back to you shortly.
                </div>
            )}
            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
                    Submission failed. Please check your connection and try again.
                </div>
            )}
        </form>
    );
}
