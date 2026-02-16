'use client';

import { useState, useEffect } from 'react';
import { Loader2, Send, ArrowUpRight } from 'lucide-react';

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only numbers
        if (/^\d*$/.test(value)) {
            // Limit to 10 digits
            if (value.length <= 10) {
                setPhone(value);
            }
        }
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;

        const newErrors: { name?: string; email?: string } = {};

        // Custom Required Validation
        if (!name.trim()) {
            newErrors.name = 'This field is required';
        }
        if (!email.trim()) {
            newErrors.email = 'This field is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
            return;
        }

        // Strict Indian Phone Validation (if phone is provided)
        if (phone) {
            const phoneRegex = /^[6789]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.");
                setIsLoading(false);
                return;
            }
        }

        const data = {
            formType: 'contact',
            name: name,
            email: email,
            phone: phone ? '+91' + phone : '', // Append +91 prefix
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
            setPhone(''); // Reset phone state, form reset clears name/email/message
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="relative bg-[#0F172A] p-6 md:p-16 text-white shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between">
            {/* Main Content */}
            <div className="space-y-6 relative z-10">
                <div>
                    <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream.
                    </p>
                </div>

                <div className="space-y-5">
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`w-full bg-transparent border-b pb-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-700 focus:border-[#F4991A]'}`}
                            placeholder="Full name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`w-full bg-transparent border-b pb-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-[#F4991A]'}`}
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Input with +91 Prefix */}
                    <div className="flex items-center border-b border-gray-700 pb-3 focus-within:border-[#F4991A] transition-colors">
                        <span className="text-gray-400 mr-2 select-none">+91</span>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={10}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                            placeholder="Phone (10 digits)"
                        />
                    </div>

                    <div>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-500 focus:border-[#F4991A] focus:outline-none transition-colors resize-none"
                            placeholder="Message"
                        ></textarea>
                    </div>
                </div>

                {/* Status Messages */}
                <div className="h-6">
                    {status === 'success' && (
                        <p className="text-green-500 font-medium text-sm animate-pulse">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 font-medium text-sm">Something went wrong.</p>
                    )}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-0 md:mt-0 relative z-10">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="group flex items-center gap-2 text-[#F4991A] font-bold text-sm tracking-widest uppercase hover:text-dark-gray transition-colors disabled:opacity-50 bg-white p-4 rounded-sm"
                >
                    {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Send a Message'}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
            </div>

            {/* Decorative Checkered Box (Bottom Right) */}
            <div className="absolute bottom-0 right-0 flex">
                <div className="w-16 h-16 bg-white hidden md:block"></div>
                <div className="w-16 h-16 bg-gray-200 backdrop-blur-sm hidden md:block"></div>
            </div>
        </form>
    );
}
