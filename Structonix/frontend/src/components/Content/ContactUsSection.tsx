import { ContactForm } from "@/components/Forms/ContactForm";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const ContactUsSection = () => {
    return (
        <section className="bg-white min-h-[90vh] text-dark-navy py-12 lg:py-16 relative overflow-hidden flex items-center">

            {/* World Map Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/worldmap.jpg')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative z-10 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* LEFT COLUMN: Info & Text */}
                    <div className="space-y-8 relative">

                        <div>
                            <span className="text-[var(--color-primary)] font-semibold tracking-wider uppercase text-xs mb-2 block">. Contacts</span>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                                We are always ready <br />
                                to help you and answer <br />
                                your questions
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
                            {/* Mumbai */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Mumbai</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Fut 445/446/447, At post Dinkarpada,<br />
                                    Pratibha Colony, Wada, Palghar, 421312
                                </p>
                            </div>

                            {/* Phone */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Phone</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Anand Vora: +91 99130 56994<br />
                                    Zeel Shah: +91 94280 09562<br />
                                    Uday Shah: +91 98252 07001
                                </p>
                            </div>

                            {/* Follow Use */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Follow us</h3>
                                <div className="flex space-x-3">
                                    <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"><Twitter className="w-3 h-3" /></a>
                                    <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"><Facebook className="w-3 h-3" /></a>
                                    <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"><Linkedin className="w-3 h-3" /></a>
                                    <a href="#" className="w-8 h-8 border border-gray-200 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"><Instagram className="w-3 h-3" /></a>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Email</h3>
                                <p className="text-gray-600 text-sm mb-1">Interested in working with us?</p>
                                <a href="mailto:anand.structonix@gmail.com" className="text-[var(--color-primary)] text-sm hover:underline">anand.structonix@gmail.com</a>
                            </div>
                        </div>

                        {/* Large "since 2016" text */}
                        <div className="pt-8">
                            <span className="text-5xl md:text-7xl font-bold text-transparent opacity-30 select-none"
                                style={{
                                    WebkitTextStroke: '1px var(--color-primary)'
                                }}
                            >
                                since 2016
                            </span>
                        </div>

                    </div>


                    {/* RIGHT COLUMN: Form Card */}
                    <div className="w-full">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
};
