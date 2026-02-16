'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#121C22] text-white overflow-hidden relative font-secondary">
            {/* Top Orange Accent */}
            <div className="absolute top-0 left-0 md:left-24 w-16 h-16 bg-[#F4991A] z-10" />

            {/* Increased padding to move content "inside" */}
            <div className="container mx-auto px-8 md:px-24 pt-20 pb-12 relative z-0">

                {/* --- Top Section: Contact CTA --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="max-w-xl">
                        {/* Smaller font size for the main heading */}
                        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2 font-secondary">
                            We are always ready to help you and <br />
                            answer your questions
                        </h2>
                    </div>

                    <Link href="/contact" className="group flex items-center gap-3 text-[#F4991A] hover:text-[#d88410] transition-colors duration-300 mt-6 md:mt-0 relative pb-1">
                        <span className="text-sm font-bold uppercase tracking-widest relative">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F4991A] group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" />
                    </Link>
                </div>

                {/* --- Divider --- */}
                <div className="w-full h-[1px] bg-white/10 mb-12" />

                {/* --- Bottom Grid --- */}
                {/* Tighter gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* Col 1: Brand */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#F4991A] flex items-center justify-center rounded-sm">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight">Structonix</span>
                        </div>

                        {/* "since 1980" - Smaller Outline Text Style */}
                        <h3
                            className="text-3xl font-bold text-transparent"
                            style={{ WebkitTextStroke: '1px #F4991A' }}
                        >
                            since 1980
                        </h3>

                        <p className="text-gray-500 text-xs mt-6">
                            © 2026 Structonix. All Rights Reserved.
                        </p>
                    </div>

                    {/* Col 2: Location & Socials */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-base mb-3">New York</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                523 Sylvan Ave, 5th Floor<br />
                                Mountain View, CA 94041 USA
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-base mb-3">Follow us</h4>
                            <div className="flex gap-2">
                                <SocialIcon icon={<Twitter size={14} />} href="#" />
                                <SocialIcon icon={<Facebook size={14} />} href="#" />
                                <SocialIcon icon={<Linkedin size={14} />} href="#" />
                                <SocialIcon icon={<Instagram size={14} />} href="#" />
                            </div>
                        </div>
                    </div>

                    {/* Col 3: Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-base mb-3">Phone</h4>
                            <div className="text-gray-400 text-xs space-y-1">
                                <p className="text-[#F4991A]">+1 234 719 8948</p>
                                <p>+1 987 654 3210</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-base mb-3">Email</h4>
                            <p className="text-gray-400 text-xs mb-1">Interested in working with us?</p>
                            <a href="mailto:info@structonix.com" className="text-[#F4991A] text-xs hover:underline">
                                info@structonix.com
                            </a>
                        </div>
                    </div>

                    {/* Col 4: Main Menu */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Main Menu</h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            <ul className="space-y-2">
                                <li><FooterLink href="/">Home</FooterLink></li>
                                <li><FooterLink href="/about">About Us</FooterLink></li>
                                <li><FooterLink href="/services">Services</FooterLink></li>
                                <li><FooterLink href="/projects">Our Projects</FooterLink></li>
                                <li><FooterLink href="/products">Products</FooterLink></li>
                            </ul>
                            <ul className="space-y-2">
                                <li><FooterLink href="/careers">Careers</FooterLink></li>
                                <li><FooterLink href="/team">Team</FooterLink></li>
                                <li><FooterLink href="/blog">Blog</FooterLink></li>
                                <li><FooterLink href="/contact">Contacts</FooterLink></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            className="w-8 h-8 border border-white/10 flex items-center justify-center text-white hover:bg-[#F4991A] hover:border-[#F4991A] transition-all duration-300"
        >
            {icon}
        </a>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-gray-400 text-xs hover:text-[#F4991A] transition-colors duration-200 block">
            {children}
        </Link>
    )
}
