'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HomepagePartners } from '@/components/Content/HomepagePartners';
import { HomepageTestimonials } from '@/components/Content/HomepageTestimonials';
import { ClientWhyUs } from '@/components/Content/ClientsComponents/ClientWhyUs';

export default function OurClientsPage() {
    const [isHomeActive, setIsHomeActive] = useState(false);

    return (
        <main className="flex flex-col min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative h-[45vh] min-h-[350px] w-full overflow-hidden flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
                    <div className="max-w-3xl text-white pt-10 pl-4 md:pl-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-2 mb-2"
                        >
                            <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-sm">
                                <span className="font-bold text-xs text-white">S</span>
                            </div>
                            <span className="font-bold text-lg tracking-wide uppercase">Structonix</span>
                        </motion.div>

                        <div className="flex flex-wrap items-baseline gap-2 mb-4">
                            <Link
                                href="/"
                                onMouseEnter={() => setIsHomeActive(true)}
                                onMouseLeave={() => setIsHomeActive(false)}
                            >
                                <motion.h2
                                    animate={{
                                        fontSize: isHomeActive ? "1.75rem" : "1.1rem",
                                        opacity: isHomeActive ? 1 : 0.6,
                                        color: isHomeActive ? "#ffffff" : "#e2e8f0",
                                        fontWeight: isHomeActive ? "bold" : "normal"
                                    }}
                                    className="font-secondary font-bold cursor-pointer hover:text-primary transition-colors duration-300 uppercase"
                                >
                                    HOME
                                </motion.h2>
                            </Link>

                            <span className="text-xl md:text-2xl text-primary font-bold">/</span>

                            <motion.h1
                                animate={{
                                    fontSize: !isHomeActive ? "1.75rem" : "1.1rem",
                                    opacity: !isHomeActive ? 1 : 0.6,
                                    color: !isHomeActive ? "#ffffff" : "#e2e8f0",
                                    fontWeight: !isHomeActive ? "bold" : "normal"
                                }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="font-secondary cursor-pointer font-bold md:pt-0 pt-2 uppercase"
                            >
                                OUR CLIENTS
                            </motion.h1>
                        </div>
                    </div>
                </div>

                {/* Bottom Right Animated Boxes */}
                <div className="absolute bottom-0 right-0 md:right-20 flex-col hidden lg:flex">
                    <div className="relative">
                        {/* White Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            className="w-24 h-24 bg-white relative z-20"
                        />

                        {/* Dark Box - Dropping Effect */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                            className="w-24 h-24 md:w-32 md:h-32 bg-dark-navy absolute top-full right-0 z-10"
                        />
                    </div>
                </div>
            </section>

            {/* Clients Partners Grid Section */}
            <HomepagePartners />

            {/* Value Proposition & Key Trust Metrics Component */}
            <ClientWhyUs />

            {/* Client Testimonials and Reviews Component */}
            <HomepageTestimonials />
        </main>
    );
}
