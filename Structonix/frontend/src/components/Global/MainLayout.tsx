'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MainNavbar } from './MainNavbar';
import { Footer } from './Footer';
import { ScrollToTopButton } from './ScrollToTopButton';
import { WhatsAppButton } from './WhatsAppButton';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [showFirstLoadTransition, setShowFirstLoadTransition] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check if this is the first page load in the user session
        const firstLoadDone = sessionStorage.getItem('structonix_first_load_done');
        if (!firstLoadDone) {
            setShowFirstLoadTransition(true);
            const timer = setTimeout(() => {
                setShowFirstLoadTransition(false);
                sessionStorage.setItem('structonix_first_load_done', 'true');
            }, 3600); // Increased duration to 3.6 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    // Lock scroll when first-load transition is playing
    useEffect(() => {
        if (showFirstLoadTransition) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showFirstLoadTransition]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* First Page Load Transition Overlay */}
            <AnimatePresence>
                {isMounted && showFirstLoadTransition && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="fixed inset-0 z-[99999] bg-[#0b192c] flex flex-col items-center justify-center pointer-events-auto select-none"
                    >
                        <div className="flex flex-col items-center">
                            {/* Centered Brand Logo popping out */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ 
                                    opacity: [0, 1, 1, 0],
                                    scale: [0.85, 1.05, 1, 0.95]
                                }}
                                transition={{ duration: 3.2, ease: 'easeInOut' }}
                                className="relative w-48 h-18 sm:w-56 sm:h-22 md:w-64 md:h-24 mb-2"
                            >
                                <Image
                                    src="/images/structonix-logo-white.png"
                                    alt="Structonix Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>

                            {/* Subtle Horizontal Horizon Line (Yellow) */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "300px" }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                                className="h-[2px] bg-primary mt-2 mb-4 rounded-full"
                            />
                            
                            {/* Brand Tagline */}
                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ 
                                    opacity: [0, 1, 1, 0],
                                    y: [8, 0, 0, -4]
                                }}
                                transition={{ delay: 0.4, duration: 2.8, ease: 'easeInOut' }}
                                className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-center mt-2"
                            >
                                Engineering Tomorrow's <span className="text-primary font-bold">Horizon</span>
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Header Section */}
            <header className="flex-none z-45">
                <MainNavbar />
            </header>

            {/* Content Section */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Global Footer Section */}
            <div className="flex-none">
                <Footer />
            </div>

            {/* Global Floating Actions */}
            <ScrollToTopButton />
            <WhatsAppButton />
        </div>
    );
}
