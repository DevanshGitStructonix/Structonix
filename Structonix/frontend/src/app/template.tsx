'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Template({ children }: { children: React.ReactNode }) {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        // Read from sessionStorage to check if the preloader has already finished
        const shown = sessionStorage.getItem('structonix_preloader_shown');
        if (shown === 'true') {
            setShouldAnimate(true);
        }
    }, []);

    return (
        <>
            {/* Brand Logo Page Transition Overlay (disabled during first-load preloader) */}
            {shouldAnimate && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.4 }}
                    className="fixed inset-0 z-[9999] bg-[#0B192C] flex flex-col items-center justify-center pointer-events-none select-none"
                >
                    <div className="flex flex-col items-center">
                        {/* Centered Brand Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ 
                                opacity: [0, 1, 1, 0],
                                scale: [0.92, 1, 1, 0.96]
                            }}
                            transition={{ duration: 1.8, ease: 'easeInOut' }}
                            className="relative w-44 h-16 md:w-52 md:h-32 mb-2"
                        >
                            <Image
                                src="/images/structonix-logo-white.png"
                                alt="Structonix Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                        
                        {/* Subtle Horizontal Horizon Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "300px" }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            className="h-[2px] bg-primary mt-2 mb-4 rounded-full"
                        />

                        {/* Brand Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ 
                                opacity: [0, 1, 1, 0],
                                y: [10, 0, 0, -5]
                            }}
                            transition={{ 
                                duration: 1.8, 
                                ease: 'easeInOut',
                                delay: 0.15
                            }}
                            className="text-white/80 text-[11px] md:text-xs font-bold tracking-[0.4em] uppercase text-center select-none"
                        >
                            Engineering Tomorrow's <span className="text-primary font-bold">Horizon</span>
                        </motion.p>
                    </div>
                </motion.div>
            )}

            {/* Page Content Fade-In */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: shouldAnimate ? 0.8 : 0, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </>
    );
}
