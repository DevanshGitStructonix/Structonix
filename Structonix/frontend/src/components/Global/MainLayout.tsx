'use client';

import { TopNavbar } from './TopNavbar';
import { MainNavbar } from './MainNavbar';
import { Footer } from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Global Header Section */}
            <header className="flex-none z-50">
                <TopNavbar />
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
        </div>
    );
}
