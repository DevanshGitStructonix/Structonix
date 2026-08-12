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
    const [showFirstLoadTransition, setShowFirstLoadTransition] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check if this is the first page load in the user session
        const firstLoadDone = sessionStorage.getItem('structonix_first_load_done');
        if (firstLoadDone) {
            setShowFirstLoadTransition(false);
        } else {
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
            {/* Inline script to prevent preloader flashing on subsequent visits */}
            <script dangerouslySetInnerHTML={{ __html: `
                try {
                    if (sessionStorage.getItem('structonix_first_load_done')) {
                        document.documentElement.classList.add('first-load-done');
                    }
                } catch (e) {}
            `}} />
            <style dangerouslySetInnerHTML={{ __html: `
                html:not(.first-load-done) .first-load-overlay {
                    display: flex !important;
                }
                html.first-load-done .first-load-overlay {
                    display: none !important;
                }
            `}} />

            {/* First Page Load Transition Overlay */}
            <AnimatePresence>
                {showFirstLoadTransition && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="first-load-overlay fixed inset-0 z-[99999] bg-[#0b192c] flex flex-col items-center justify-center pointer-events-auto select-none"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ 
                                opacity: [0, 1, 1, 0],
                                scale: [0.9, 1.02, 1, 0.98]
                            }}
                            transition={{ duration: 3.2, ease: 'easeInOut' }}
                            className="flex flex-col items-center"
                        >
                            {/* Centered Brand Logo popping out */}
                            <div className="relative w-80 h-20 sm:w-[440px] sm:h-[110px] md:w-[560px] md:h-[140px] mb-4">
                                <Image
                                    src="/images/structonix-logo-white.png"
                                    alt="Structonix Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Subtle Horizontal Horizon Line (Yellow) */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                                className="h-[2px] bg-primary mt-2 mb-4 rounded-full w-48 sm:w-80 md:w-96 origin-center"
                            />
                            
                            {/* Brand Tagline */}
                            <p className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-center mt-2">
                                Engineering Tomorrow's <span className="text-primary font-bold">Horizon</span>
                            </p>
                        </motion.div>
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
