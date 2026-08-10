'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, PhoneCall, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MainNavbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
        {
            name: 'About',
            href: '/about',
            subItems: [
                { name: 'Who We Are', href: '/about#who-we-are' },
                { name: 'Vision & Mission', href: '/about#mission-vision' },
                { name: 'Key Strengths', href: '/about#key-strengths' },
                { name: 'Infrastructure & Machines', href: '/machines' }
            ]
        },
        { name: 'Projects', href: '/projects' },
        {
            name: 'Services',
            href: '/services',
            subItems: [
                { name: 'Design & Engineering', href: '/services/design-engineering' },
                { name: 'Warehousing', href: '/services/warehousing' },
                { name: 'Primary Steel Structure Manufacturing', href: '/services/primary-steel-structure-manufacturing' },
                { name: 'Secondary Steel Structure Manufacturing', href: '/services/secondary-steel-structure-manufacturing' },
                { name: 'Roofing and Cladding Systems', href: '/services/roofing-and-cladding-systems' },
                { name: 'C/Z Purlin and Downspout Pipe', href: '/services/cz-purlin-and-downspout-pipe' },
                { name: 'Turnkey Industrial Projects', href: '/services/turnkey-industrial-projects' }
            ]
        },
        { name: 'Our Clients', href: '/clients' }
    ];

    const galleryServices = [
        {
            name: "Design & Engineering",
            href: "/services/design-engineering",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Primary Steel Manufacturing",
            href: "/services/primary-steel-structure-manufacturing",
            image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704882/Primary-Steel-Structure_xa68xr.gif"
        },
        {
            name: "Secondary Steel Manufacturing",
            href: "/services/secondary-steel-structure-manufacturing",
            image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704409/Steel_frame_structure_k0v326.webp"
        },
        {
            name: "Warehousing",
            href: "/services/warehousing",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Roofing & Cladding Systems",
            href: "/services/roofing-and-cladding-systems",
            image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1785704406/images_utytsf.webp"
        },
        {
            name: "Turnkey Industrial Projects",
            href: "/services/turnkey-industrial-projects",
            image: "https://res.cloudinary.com/dpctlwaam/image/upload/v1786395394/DJI_0513_fg1lw1.jpg"
        }
    ];

    return (
        <>
            {/* Start Placeholder to prevent layout shift (removed on homepage for full-screen hero) */}
            <div className={`${isHome ? 'h-0' : 'h-20 lg:h-32'} relative transition-all duration-300`}>
                <nav
                    className={`z-40 text-white transition-all duration-300 ${
                        isScrolled
                            ? 'fixed top-0 left-0 w-full bg-dark-navy/95 shadow-[0_12px_40px_rgba(0,0,0,0.35)] border-b border-white/10 backdrop-blur-md h-20 lg:h-32 px-4 md:px-8 rounded-none'
                            : 'absolute top-0 left-0 w-full bg-dark-navy/80 border-b border-white/10 backdrop-blur-md h-20 lg:h-32 px-4 md:px-6 rounded-none'
                    }`}
                >
                    <div className="container mx-auto h-full relative">
                        <div className="flex items-center justify-between h-full">
                            {/* Left: Logo */}
                            <div className="flex items-center gap-2">
                                <Link href="/" className="flex items-center gap-2 group relative w-28 h-10 sm:w-40 sm:h-12 md:w-56 md:h-14 lg:w-72 lg:h-16">
                                    <Image src="/images/structonix-logo-white.png" alt="Structonix Logo" fill className="object-contain object-left" />
                                </Link>
                            </div>

                            {/* Center: Navigation Links */}
                            <div className="hidden lg:flex items-center gap-6 h-full">
                                {navLinks.map((link) => (
                                    <div
                                        key={link.name}
                                        className="group h-full flex items-center relative"
                                        onMouseEnter={() => setActiveDropdown(link.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <Link
                                            href={link.href}
                                            className="relative text-white/90 font-medium text-[15px] hover:text-primary transition-colors py-2 uppercase tracking-wide flex items-center gap-1 group/link"
                                            onMouseEnter={() => setHoveredLink(link.name)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                        >
                                            {link.name}
                                            {link.subItems ? (
                                                <ChevronDown className="w-3.5 h-3.5 transition-all duration-300 group-hover:rotate-180 text-white/50 group-hover/link:text-primary" />
                                            ) : null}
                                            
                                            <AnimatePresence>
                                                {hoveredLink === link.name && (
                                                    <motion.span
                                                        layoutId="nav-underline"
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </Link>

                                        {/* Dropdown Menus */}
                                        {/* Mega Menu for Services */}
                                        {link.subItems && link.name === 'Services' && (
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                                        className="absolute left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-dark-navy backdrop-blur-md shadow-2xl border border-white/10 rounded-2xl z-50 overflow-hidden top-full mt-1"
                                                    >
                                                        <div className="flex">
                                                            {/* Left: Title & Desc (22%) */}
                                                            <div className="w-[22%] py-10 px-6 bg-white/[0.02] border-r border-white/10 flex flex-col justify-center">
                                                                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">{link.name}</h3>
                                                                <p className="text-xs text-white/60 leading-relaxed font-medium">
                                                                    Discover our wide range of innovative and durable PEB products, from prefabricated structures to turnkey solutions.
                                                                </p>
                                                            </div>

                                                            {/* Middle: Links Grid (58%) */}
                                                            <div className="w-[58%] py-10 px-8">
                                                                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                                                                    {link.subItems.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            className="flex items-center gap-2 group/sublink"
                                                                        >
                                                                            <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover/sublink:text-primary shrink-0 transition-colors" />
                                                                            <span className="text-xs font-bold text-white/80 group-hover/sublink:text-primary transition-colors leading-normal uppercase tracking-wider">
                                                                                {subItem.name}
                                                                            </span>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Right: Featured Image (20%) */}
                                                            <div className="w-[20%] p-6 flex items-center justify-center">
                                                                <div className="w-full h-full min-h-[160px] rounded-xl overflow-hidden relative shadow-sm">
                                                                    <Image
                                                                        src="https://res.cloudinary.com/dpctlwaam/image/upload/v1785704882/Primary-Steel-Structure_xa68xr.gif"
                                                                        alt="Featured Service"
                                                                        fill
                                                                        className="absolute inset-0 object-cover hover:scale-105 transition-transform duration-700"
                                                                        sizes="(max-width: 768px) 100vw, 25vw"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}

                                        {/* Standard Dropdown for About */}
                                        {link.subItems && link.name === 'About' && (
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                        className="absolute left-1/2 -translate-x-1/2 w-[20vw] bg-dark-navy backdrop-blur-md shadow-2xl border border-white/10 rounded-xl z-50 overflow-hidden py-3 top-full mt-1"
                                                    >
                                                        <div className="flex flex-col">
                                                            {link.subItems.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="px-5 py-2.5 text-xs font-bold text-white/80 hover:text-primary hover:bg-white/[0.03] transition-all uppercase tracking-wider flex items-center gap-2 group/item"
                                                                >
                                                                    <ArrowRight className="w-3 h-3 text-white/30 group-hover/item:text-primary transition-colors" />
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="/structonix-brochure.pdf"
                                    download
                                    className="hidden lg:flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 font-bold uppercase text-xs tracking-widest transition-all duration-300 gap-2 cursor-pointer h-12"
                                >
                                    <Download className="w-4 h-4" /> Brochure
                                </a>
                                <Link
                                    href="/contact"
                                    className="hidden lg:flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-5 py-2 font-bold uppercase text-xs tracking-widest transition-all duration-300 gap-2 cursor-pointer h-12"
                                >
                                    <PhoneCall className="w-4 h-4" /> Get In Touch
                                </Link>
                                {/* Desktop Hamburger Menu Toggle on Right */}
                                <button
                                    onClick={() => setIsSideMenuOpen(true)}
                                    className="hidden lg:flex items-center justify-center w-10 h-10 text-white/80 hover:text-primary transition-colors"
                                    aria-label="Open side menu"
                                >
                                    <Menu className="w-6 h-6" />
                                </button>
                                {/* Mobile Menu Toggle */}
                                <button
                                    onClick={() => setIsSideMenuOpen(true)}
                                    className="lg:hidden p-2 text-white hover:text-primary transition-colors"
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
            <AnimatePresence>
                {isSideMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 pointer-events-auto"
                            onClick={() => setIsSideMenuOpen(false)}
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-dark-navy z-[60] text-white p-10 overflow-y-auto pointer-events-auto shadow-2xl"
                        >
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
                                
                                {/* Mobile Navigation Links */}
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
                                                    {link.subItems ? (
                                                        <button
                                                            onClick={() => toggleMobileMenu(link.name)}
                                                            className="p-2 text-gray-400 hover:text-white transition-colors"
                                                            aria-label={`Toggle ${link.name} menu`}
                                                        >
                                                            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openMobileMenu === link.name ? 'rotate-180 text-primary' : ''}`} />
                                                        </button>
                                                    ) : null}
                                                </div>

                                                {link.subItems ? (
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
                                                ) : null}
                                            </div>
                                        ))}
                                        {/* Mobile Only: Download Brochure Button in side menu */}
                                        <a
                                            href="/structonix-brochure.pdf"
                                            download
                                            className="flex lg:hidden items-center justify-center bg-primary hover:bg-primary/90 text-white w-full py-3.5 font-bold uppercase text-sm tracking-wider transition-all duration-300 mt-4 gap-2"
                                            onClick={() => setIsSideMenuOpen(false)}
                                        >
                                            <Download className="w-4 h-4" /> Download Brochure
                                        </a>
                                        {/* Mobile Only: Get In Touch Button in side menu */}
                                        <Link
                                            href="/contact"
                                            className="flex lg:hidden items-center justify-center border border-primary text-primary hover:bg-primary/90 hover:text-white w-full py-3.5 font-bold uppercase text-sm tracking-wider transition-all duration-300 mt-3 gap-2"
                                            onClick={() => setIsSideMenuOpen(false)}
                                        >
                                            <PhoneCall className="w-4 h-4" /> Get In Touch
                                        </Link>
                                    </div>
                                </div>

                                {/* About Text */}
                                <div className="space-y-4">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        At Structonix, we specialize in high-quality structural steel fabrication, Pre-Engineered Buildings (PEB), and turnkey industrial construction. Our expert engineers utilize advanced BIM/CAD technologies to deliver safe, resilient, and fast-track industrial infrastructure.
                                    </p>
                                </div>

                                {/* Gallery Grid */}
                                <div className="grid grid-cols-3 gap-2">
                                    {galleryServices.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            onClick={() => setIsSideMenuOpen(false)}
                                            className="aspect-square relative overflow-hidden group block"
                                            title={service.name}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 33vw, 20vw"
                                            />
                                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-1 text-center">
                                                <span className="text-[10px] font-bold text-white uppercase tracking-wider leading-tight">
                                                    {service.name}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-white">Contacts</h3>

                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <p className="text-primary font-bold tracking-wider text-sm">LOCATION</p>
                                            <p className="text-gray-300 text-sm">Fut 445/446/447, At post Dinkarpada,<br />Pratibha Colony, Wada, Palghar, 421312</p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-primary font-bold tracking-wider text-sm">PHONE</p>
                                            <p className="text-gray-300 text-sm hover:text-primary transition-colors cursor-pointer">+91 99130 56994<br />+91 97267 67331</p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-primary font-bold tracking-wider text-sm">EMAIL</p>
                                            <p className="text-gray-300 text-sm hover:text-primary transition-colors cursor-pointer">info@structonix.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
