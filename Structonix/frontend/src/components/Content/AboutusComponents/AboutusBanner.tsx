'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { useState } from 'react';

export function AboutUsBanner() {
    const [isHomeActive, setIsHomeActive] = useState(false);

    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/19544210/pexels-photo-19544210.jpeg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
                <div className="max-w-2xl text-white pt-10 pl-4 md:pl-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 mb-2"
                    >
                        <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-sm">
                            <span className="font-bold text-xs text-white">S</span>
                        </div>
                        <span className="font-bold text-lg tracking-wide">Structonix</span>
                    </motion.div>

                    <div className="flex items-baseline gap-2 mb-4">
                        <Link
                            href="/"
                            onMouseEnter={() => setIsHomeActive(true)}
                            onMouseLeave={() => setIsHomeActive(false)}
                        >
                            <motion.h1
                                animate={{
                                    fontSize: isHomeActive ? "3rem" : "1.5rem", // md:text-7xl equivalent approx 4.5rem, text-2xl is 1.5rem
                                    opacity: isHomeActive ? 1 : 0.6,
                                    color: isHomeActive ? "#ffffff" : "#e2e8f0",
                                    fontWeight: isHomeActive ? "bold" : "normal"
                                }}
                                className="font-secondary font-bold cursor-pointer hover:text-primary transition-colors duration-300"
                                style={{
                                    // Base styles to ensure consistency before hydration/animation
                                    fontSize: "1.5rem"
                                }}
                            >
                                HOME
                            </motion.h1>
                        </Link>

                        <span className="text-2xl text-primary font-bold">/</span>

                        <motion.h1
                            animate={{
                                fontSize: !isHomeActive ? "3rem" : "1.5rem",
                                opacity: !isHomeActive ? 1 : 0.6,
                                color: !isHomeActive ? "#ffffff" : "#e2e8f0",
                                fontWeight: !isHomeActive ? "bold" : "normal"
                            }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-secondary cursor-pointer font-bold"
                            style={{
                                fontSize: "3rem"
                            }}
                        >
                            ABOUT
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Bottom Right Animated Boxes */}
            <div className="absolute bottom-0 right-0 md:right-20 flex flex-col hidden lg:flex">
                <div className="relative">
                    {/* White Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="w-24 h-24  bg-white relative z-20"
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
    );
}
