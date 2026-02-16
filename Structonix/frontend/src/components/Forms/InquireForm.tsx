'use client';

import { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

export function InquireForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            formType: 'inquire',
            name: formData.get('name'),
            phone: formData.get('phone'),
            interest: formData.get('interest'),
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
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">Quick Inquiry</h3>

            <div>
                <input type="text" name="name" required className="w-full bg-white/10 border border-transparent rounded px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F4991A] focus:bg-[#1F2937] outline-none transition-all text-sm" placeholder="Your Name" />
            </div>

            <div>
                <input type="tel" name="phone" required className="w-full bg-white/10 border border-transparent rounded px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F4991A] focus:bg-[#1F2937] outline-none transition-all text-sm" placeholder="Phone Number" />
            </div>

            <div>
                <select name="interest" className="w-full bg-white/10 border border-transparent rounded px-4 py-2 text-white focus:ring-2 focus:ring-[#F4991A] focus:bg-[#1F2937] outline-none transition-all text-sm appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-gray-500">I'm interested in...</option>
                    <option value="Construction" className="text-black">Construction</option>
                    <option value="Renovation" className="text-black">Renovation</option>
                    <option value="Design" className="text-black">Design & Build</option>
                    <option value="Consulting" className="text-black">Consulting</option>
                </select>
            </div>

            <div>
                <textarea name="message" rows={3} className="w-full bg-white/10 border border-transparent rounded px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F4991A] focus:bg-[#1F2937] outline-none transition-all text-sm resize-none" placeholder="Short message..."></textarea>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#F4991A] text-white font-bold py-3 rounded hover:bg-[#d88410] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide disabled:opacity-50"
            >
                {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <>Submit Inquiry <ArrowRight className="w-4 h-4" /></>}
            </button>

            {status === 'success' && <p className="text-green-500 text-xs text-center mt-2">Inquiry sent!</p>}
            {status === 'error' && <p className="text-red-500 text-xs text-center mt-2">Error sending.</p>}
        </form>
    );
}
