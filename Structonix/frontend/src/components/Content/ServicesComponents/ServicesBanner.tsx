'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ServicesBanner() {
    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg')`, // Construction/Engineering theme
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
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
                        <span className="font-bold text-lg tracking-wide">Structonix</span>
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-2 mb-4 font-secondary font-bold text-lg md:text-xl">
                        <Link href="/" className="text-white/60 hover:text-primary transition-colors duration-300">
                            HOME
                        </Link>
                        <span className="text-primary font-bold">/</span>
                        <span className="text-white">SERVICES</span>
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
    );
}
