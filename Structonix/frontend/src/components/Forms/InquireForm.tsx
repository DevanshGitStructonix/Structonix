'use client';

import { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

interface InquireFormProps {
    variant?: 'dark' | 'light';
    hideTitle?: boolean;
}

export function InquireForm({ variant = 'dark', hideTitle = false }: InquireFormProps) {
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

    const isLight = variant === 'light';
    const containerClass = isLight
        ? "flex flex-col gap-4"
        : "space-y-4 bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm";

    const inputClass = isLight
        ? "w-full bg-[#f8f9fa] border-none px-5 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-shadow text-gray-700 placeholder:text-gray-400"
        : "w-full bg-white/10 border border-transparent rounded px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F4991A] focus:bg-[#1F2937] outline-none transition-all text-sm";

    const selectClass = inputClass + " appearance-none cursor-pointer";
    const buttonClass = isLight
        ? "mt-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 inline-flex items-center justify-center gap-2 self-start transition-colors w-auto disabled:opacity-50"
        : "w-full bg-[#F4991A] text-white font-bold py-3 rounded hover:bg-[#d88410] transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide disabled:opacity-50";

    return (
        <form onSubmit={handleSubmit} className={containerClass}>
            {!hideTitle && (
                <h3 className={`text-xl font-bold mb-4 ${isLight ? 'text-dark-slate' : 'text-white'}`}>
                    Quick Inquiry
                </h3>
            )}

            <div>
                <input type="text" name="name" required className={inputClass} placeholder="Full Name" />
            </div>

            <div>
                <input type="tel" name="phone" required className={inputClass} placeholder="Phone Number" />
            </div>

            <div>
                <select name="interest" defaultValue="" className={selectClass}>
                    <option value="" disabled className="text-gray-500">I'm interested in...</option>
                    <option value="Construction" className="text-black">Construction</option>
                    <option value="Renovation" className="text-black">Renovation</option>
                    <option value="Design" className="text-black">Design</option>
                    <option value="Consulting" className="text-black">Consulting</option>
                </select>
            </div>

            <div>
                <textarea name="message" rows={isLight ? 4 : 3} className={`${inputClass} resize-none ${isLight ? 'min-h-[120px]' : ''}`} placeholder={isLight ? "Write Here..." : "Short message..."}></textarea>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={buttonClass}
            >
                {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <>{isLight ? "Send Message" : "Submit Inquiry"} <ArrowRight className="w-4 h-4" /></>}
            </button>

            {status === 'success' && <p className={`text-green-500 text-xs mt-2 ${!isLight && 'text-center'}`}>Inquiry sent successfully!</p>}
            {status === 'error' && <p className={`text-red-500 text-xs mt-2 ${!isLight && 'text-center'}`}>Error sending. Please try again.</p>}
        </form>
    );
}
