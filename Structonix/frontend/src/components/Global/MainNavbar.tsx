'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, LayoutPanelLeftIcon, Phone, MapPin, Mail, ChevronDown, ArrowRight } from 'lucide-react';

export function MainNavbar() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

    const toggleMobileMenu = (name: string) => {
        setOpenMobileMenu(openMobileMenu === name ? null : name);
    };

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        {
            name: 'Products & Services',
            href: '/products-and-services',
            subItems: [
                { name: 'Pre Engineered Building Systems', href: '/services/peb-systems' },
                { name: 'Prefabricated Steel Structures', href: '/services/prefab-steel' },
                { name: 'Heavy Structural Fabrication', href: '/services/heavy-structural' },
                { name: 'Turnkey Contractors for PEB', href: '/services/turnkey' },
                { name: 'Multi Storey Steel Buildings', href: '/services/multi-storey' },
                { name: 'Industrial Buildings', href: '/services/industrial-buildings' },
                { name: 'Standing Seam Roofing Systems', href: '/services/roofing' },
                { name: 'PUF & Rockwool Panels', href: '/services/panels' },
                { name: 'PEB Building Accessories', href: '/services/accessories' }
            ]
        },
        { name: 'Contact Us', href: '/contact' },
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80", // Construction
        "https://images.unsplash.com/photo-1581094794329-cd109c0f8a16?auto=format&fit=crop&w=400&q=80", // Worker
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&q=80", // Architecture
        "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=400&q=80", // Industrial
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80", // Building
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80"  // Engineering
    ];

    return (
        <>
            {/* Start Placeholder to prevent layout shift */}
            <div className="h-20 relative">
                <nav className={`bg-white z-40 transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 w-full shadow-md animate-slide-down' : 'absolute top-0 left-0 w-full shadow-sm'}`}>
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-20">
                            {/* Left: Menu Icon (Desktop) & Logo */}
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={() => setIsSideMenuOpen(true)}
                                    className="hidden lg:flex items-center justify-center w-10 h-10 text-dark-slate hover:text-primary transition-colors"
                                    aria-label="Open side menu"
                                >
                                    <LayoutPanelLeftIcon className="w-6 h-6" />
                                </button>

                                <Link href="/" className="flex items-center gap-2 group">
                                    <div className="relative w-8 h-8 flex items-center justify-center bg-primary overflow-hidden transition-transform group-hover:scale-105">
                                        <span className="text-white font-bold text-lg relative z-10">S</span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    </div>
                                    <span className="text-xl font-bold text-dark-slate tracking-tight group-hover:text-primary transition-colors">Structonix</span>
                                </Link>
                            </div>

                            {/* Center: Navigation Links */}
                            <div className="hidden lg:flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="group">
                                        <Link
                                            href={link.href}
                                            className="relative text-dark-slate font-medium text-[12px] hover:text-primary transition-colors py-[30px] uppercase tracking-wide flex items-center gap-1 group/link"
                                        >
                                            {link.name}
                                            {link.subItems && (
                                                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                                            )}
                                            <span className="absolute bottom-[28px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                                        </Link>

                                        {/* Dropdown Menu (Mega Menu) */}
                                        {link.subItems && (
                                            <div className="absolute top-[80px] left-0 w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                                <div className="container mx-auto px-4 flex">
                                                    {/* Left: Title & Desc (30%) */}
                                                    <div className="w-[30%] py-12 pr-12 border-r border-gray-100">
                                                        <h3 className="text-xl font-bold text-[#1a1b3c] mb-4">{link.name}</h3>
                                                        <p className="text-sm text-dark-slate/80 leading-relaxed font-medium">
                                                            Discover our wide range of innovative and durable PEB products, from prefabricated structures to turnkey solutions
                                                        </p>
                                                    </div>

                                                    {/* Middle: Links Grid (45%) */}
                                                    <div className="w-[45%] py-12 px-12">
                                                        <div className="grid grid-cols-2 gap-y-8 gap-x-8">
                                                            {link.subItems.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="flex items-center gap-3 group/sublink"
                                                                >
                                                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover/sublink:text-primary shrink-0 transition-colors" />
                                                                    <span className="text-sm font-medium text-[#1a1b3c] group-hover/sublink:text-primary transition-colors leading-tight">
                                                                        {subItem.name}
                                                                    </span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Right: Featured Image (25%) */}
                                                    <div className="w-[25%] py-8 pl-8 flex items-center justify-center">
                                                        <div className="w-full h-full min-h-[220px] rounded overflow-hidden relative shadow-sm">
                                                            <img
                                                                src="https://images.pexels.com/photos/33421999/pexels-photo-33421999.jpeg"
                                                                alt="Featured Service"
                                                                className="w-full h-full absolute inset-0 object-cover hover:scale-105 transition-transform duration-700"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right: Search & CTA */}
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="hidden lg:flex items-center justify-center bg-primary hover:bg-[#d68515] text-white px-6 h-full py-0 font-bold uppercase text-xs tracking-widest transition-all duration-300"
                                    style={{ height: '80px', marginTop: '-10px', marginBottom: '-10px' }} // Adjusted for smaller height
                                >
                                    Get In Touch
                                </Link>
                                {/* Mobile Menu Toggle */}
                                <button
                                    onClick={() => setIsSideMenuOpen(true)}
                                    className="lg:hidden p-2 text-dark-slate hover:text-primary transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="w-7 h-7" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Side Menu Overlay */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isSideMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsSideMenuOpen(false)}
            />

            {/* Side Panel */}
            <div className={`fixed top-0 left-0 h-full w-full md:w-[450px] bg-[#121C22] z-[60] text-white p-10 transform transition-transform duration-500 ease-out overflow-y-auto ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Close Button */}
                <button
                    onClick={() => setIsSideMenuOpen(false)}
                    className="absolute top-6 right-6 text-white/70 hover:text-primary transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                {/* Content */}
                <div className="mt-8 flex flex-col gap-10">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">S</span>
                        </div>
                        <span className="text-3xl font-bold text-white">Structonix</span>
                    </div>
                    {/* Mobile Only: Navigation Links in Side Panel */}
                    <div className="lg:hidden pt-8 border-t border-white/10 pb-10">
                        <div className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.href}
                                            className="text-xl font-medium text-white hover:text-primary transition-colors py-1 flex-1"
                                            onClick={() => setIsSideMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subItems && (
                                            <button
                                                onClick={() => toggleMobileMenu(link.name)}
                                                className="p-2 text-gray-400 hover:text-white transition-colors"
                                                aria-label={`Toggle ${link.name} menu`}
                                            >
                                                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openMobileMenu === link.name ? 'rotate-180 text-primary' : ''}`} />
                                            </button>
                                        )}
                                    </div>

                                    {link.subItems && (
                                        <div className={`overflow-hidden transition-all duration-300 ${openMobileMenu === link.name ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-4 flex flex-col gap-3 border-l-2 border-white/10 ml-2">
                                                {link.subItems.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="text-base text-gray-400 hover:text-primary transition-colors py-1 flex items-center gap-2"
                                                        onClick={() => setIsSideMenuOpen(false)}
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="space-y-4">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye pollock, "sokeye salmon."
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-3 gap-2">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="aspect-square relative overflow-hidden group">
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Contacts</h3>

                        <div className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-primary font-bold tracking-wider text-sm">LOCATION</p>
                                <p className="text-gray-300">523 Sylvan Ave, 5th Floor<br />Mountain View, CA 94041USA</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-primary font-bold tracking-wider text-sm">PHONE</p>
                                <p className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">+1 (234) 56789</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-primary font-bold tracking-wider text-sm">EMAIL</p>
                                <p className="text-gray-300 hover:text-primary transition-colors cursor-pointer">info@structonix.com</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
