'use client';

import { useState, useEffect } from 'react';
import { MainNavbar } from './MainNavbar';
import { Footer } from './Footer';
import { ScrollToTopButton } from './ScrollToTopButton';
import { Preloader } from './Preloader';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [showPreloader, setShowPreloader] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Server-safe sessionStorage check
        const shown = sessionStorage.getItem('structonix_preloader_shown');
        if (!shown) {
            setShowPreloader(true);
        }
    }, []);

    // Lock scroll when preloader is active
    useEffect(() => {
        if (showPreloader) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showPreloader]);

    const handlePreloaderComplete = () => {
        sessionStorage.setItem('structonix_preloader_shown', 'true');
        setShowPreloader(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Session-based Preloader for first-time visits */}
            {isMounted && showPreloader && (
                <Preloader onComplete={handlePreloaderComplete} />
            )}

            {/* Global Header Section */}
            <header className="flex-none z-50">
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
            <ScrollToTopButton />
        </div>
    );
}
