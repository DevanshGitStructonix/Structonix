"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'B5 Paramount Torrent Pharma',
        area: '332,759 Sq. Ft.',
        location: 'Sawad Naka, Bhiwandi',
        service: 'Design, Detailing, Fabrication & Erection',
        industry: 'Pharmaceutical Plant',
        tonnage: '1,420 MT',
        height: '14.37 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/B5-Paramount-Torrent-pharma.jpg'
    },
    {
        id: 2,
        title: 'Shree Krishna DHL B500',
        area: '443,304 Sq. Ft.',
        location: 'Dhamangaon, Bhiwandi',
        service: 'PEB Fabrication & Sheeting',
        industry: 'Logistics & Warehousing',
        tonnage: '1,317 MT',
        height: '12.0 M',
        image: 'https://khushipebinfrastructure.com/wp-content/uploads/2026/07/DJI_0519-scaled.webp'
    },
    {
        id: 3,
        title: 'Global D Warehouse',
        area: '299,881 Sq. Ft.',
        location: 'Global Park 1, Bhiwandi',
        service: 'Turnkey PEB Engineering & Supply',
        industry: 'Logistics & Warehousing',
        tonnage: '900.53 MT',
        height: '12.0 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/Global-D-Warehouse.jpeg'
    },
    {
        id: 4,
        title: 'Sumit Mhatre Logistics',
        area: '260,000 Sq. Ft.',
        location: 'Bhinar, Bhiwandi',
        service: 'Turnkey Manufacturing & Execution',
        industry: 'Logistics & Warehousing',
        tonnage: '787.75 MT',
        height: '12.0 M',
        image: 'https://khushipebinfrastructure.com/wp-content/uploads/2026/07/3-3-scaled.jpg'
    },
    {
        id: 5,
        title: 'RK Logi G DHL Warehouse',
        area: '193,825 Sq. Ft.',
        location: 'Yewai Naka, Bhiwandi',
        service: 'Design, Detailing & Heavy Fabrication',
        industry: 'Logistics & Warehousing',
        tonnage: '518.0 MT',
        height: '11.37 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/RK-Logi-G-DHL-Warehouse.jpeg'
    },
    {
        id: 6,
        title: 'B3 Moksh Warehouse',
        area: '163,720 Sq. Ft.',
        location: 'Sawad Naka, Bhiwandi',
        service: 'Design, Fabrication & Handover',
        industry: 'Logistics & Warehousing',
        tonnage: '450.33 MT',
        height: '12.0 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/1-Moksha-sawad-Naka-bhiwandi.jpg'
    },
    {
        id: 7,
        title: 'B2 Moksh Warehouse',
        area: '136,120 Sq. Ft.',
        location: 'Sawad Naka, Bhiwandi',
        service: 'Design & Steel Fabrication',
        industry: 'Logistics & Warehousing',
        tonnage: '379.10 MT',
        height: '11.25 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/B2-Moksh-Warehouse.jpeg'
    },
    {
        id: 8,
        title: 'RK Global H Gati Warehouse',
        area: '115,883 Sq. Ft.',
        location: 'Yewai Naka, Bhiwandi',
        service: 'Heavy Structural Fabrication',
        industry: 'Logistics & Distribution',
        tonnage: '358.42 MT',
        height: '9.0 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/RK-Global-H-Gati-Warehouse.jpeg'
    },
    {
        id: 9,
        title: 'Global 2 Siemens Warehouse',
        area: '94,139 Sq. Ft.',
        location: 'Janwal, Bhiwandi',
        service: 'Steel Structure Erection & Detailing',
        industry: 'Logistics & Warehousing',
        tonnage: '263.39 MT',
        height: '9.0 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/Global-2-Siemens-warehouse.jpeg'
    },
    {
        id: 10,
        title: 'RK Global G Spoton Warehouse',
        area: '74,615 Sq. Ft.',
        location: 'Global Park 1, Bhiwandi',
        service: 'PEB Supply & Fabrication',
        industry: 'Logistics & Warehousing',
        tonnage: '250.0 MT',
        height: '12.0 M',
        image: 'https://www.steelwonders.in/wp-content/uploads/2025/12/RK-Global-G-Spoton-Warehouse.jpeg'
    },
    {
        id: 11,
        title: 'And 45+ More Projects Delivered',
        area: '1.5M+ Sq. Ft. Total',
        location: 'Pan-India Execution',
        service: 'End-to-End Turnkey Execution',
        industry: 'Logistics, Industrial & Infrastructure',
        tonnage: '15,000+ MT Steel',
        height: 'Varying Specs',
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785699705/DJI_0519_c2attk.webp',
        isSummaryCard: true
    }
];

export function HomepageProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;
        const progress = (scrollLeft / maxScroll) * 100;
        setScrollProgress(progress);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const container = containerRef.current;
            const firstCard = container.firstElementChild as HTMLElement;
            const gap = container.clientWidth >= 768 ? 32 : 24; // gap-8 on desktop, gap-6 on mobile
            const cardWidth = firstCard ? firstCard.offsetWidth + gap : container.clientWidth;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    return (
        <section className="py-20 md:py-32 bg-[#f4f4f4] relative overflow-hidden">
            <div className="px-6 md:px-12 lg:px-24">
                <div className="flex items-start gap-2 mb-6">
                    <span className="text-primary font-bold text-lg leading-none mt-[2px]">»</span>
                    <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase">OUR PROJECTS</span>
                </div>

                {/* Header Sequence */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-primary/20 pb-6 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-slate font-secondary tracking-tight">
                            Featured Projects
                        </h2>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                        <a href="/projects" className="group flex items-center gap-2 text-primary font-bold text-base md:text-sm hover:text-dark-slate transition-colors uppercase tracking-widest pb-1 whitespace-nowrap">
                            View all projects
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </a>

                        {/* Slider Navigation Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3.5 rounded-full border border-gray-200 bg-white text-dark-slate hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                                aria-label="Previous project"
                            >
                                <ArrowLeft className="w-4.5 h-4.5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3.5 rounded-full border border-gray-200 bg-white text-dark-slate hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                                aria-label="Next project"
                            >
                                <ArrowRight className="w-4.5 h-4.5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project Movable Slider */}
                <div 
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar items-stretch"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project) => {
                        const isSummary = project.isSummaryCard;

                        return (
                            <motion.div
                                key={project.id}
                                layout
                                onClick={() => {
                                    if (isSummary) {
                                        window.location.href = "/projects";
                                    } else {
                                        setSelectedProject(project);
                                    }
                                }}
                                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[420px] flex-shrink-0 border border-gray-100 group snap-start relative flex flex-col cursor-pointer overflow-hidden"
                            >
                                {/* Top Glow Accent Border on Hover */}
                                <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full z-20" />

                                {/* Card Image */}
                                <div className="relative w-full h-[240px] sm:h-[260px] md:h-[300px] overflow-hidden flex-shrink-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 768px) 80vw, 420px"
                                        unoptimized
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-dark-navy/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                </div>

                                {/* Card Text Content */}
                                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                                    <div className="space-y-2">
                                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest block">
                                            {project.industry}
                                        </span>
                                        <h3 className="font-extrabold text-dark-slate text-lg md:text-xl font-secondary line-clamp-1 group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs md:text-sm font-medium">
                                            📍 {project.location}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-primary font-bold text-xs md:text-sm uppercase tracking-wider">
                                        <span>{isSummary ? "Explore All Projects" : "View Technical Specifications"}</span>
                                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Scroll Indicator & Swipe Highlight Hint */}
                <div className="flex md:hidden flex-col items-center gap-3 mt-4 px-4 w-full">
                    <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden relative">
                        <div 
                            className="absolute top-0 left-0 h-full bg-primary transition-all duration-150 rounded-full"
                            style={{ width: `${Math.max(8, scrollProgress)}%` }}
                        />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2 animate-pulse">
                        Swipe left to view more projects ➔
                    </span>
                </div>
            </div>

            {/* Project Details Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 250 }}
                            className="bg-white w-full max-w-4xl rounded-none shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row border border-gray-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-dark-navy text-white hover:bg-primary transition-colors rounded-none shadow-md cursor-pointer"
                                aria-label="Close details"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Left Side: Image */}
                            <div className="w-full md:w-1/2 h-[260px] md:h-auto relative min-h-[260px] md:min-h-[480px]">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 text-white pr-6">
                                    <span className="bg-primary px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-2 inline-block">
                                        {selectedProject.industry}
                                    </span>
                                    <h4 className="text-xl md:text-2xl font-bold font-secondary">
                                        📍 {selectedProject.location}
                                    </h4>
                                </div>
                            </div>

                            {/* Right Side: Specifications */}
                            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none">
                                <div>
                                    <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
                                        TECHNICAL SPECIFICATIONS
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-dark-slate mb-6 font-secondary leading-tight">
                                        {selectedProject.title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 md:gap-6 border-t border-gray-100 pt-6">
                                        <div>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                TOTAL AREA
                                            </span>
                                            <span className="text-sm md:text-base text-dark-slate font-bold">
                                                {selectedProject.area}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                STEEL TONNAGE
                                            </span>
                                            <span className="text-sm md:text-base text-dark-slate font-bold">
                                                {selectedProject.tonnage}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                CLEAR HEIGHT
                                            </span>
                                            <span className="text-sm md:text-base text-dark-slate font-bold">
                                                {selectedProject.height}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                LOCATION
                                            </span>
                                            <span className="text-sm md:text-base text-dark-slate font-bold">
                                                {selectedProject.location}
                                            </span>
                                        </div>
                                        <div className="col-span-2">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                SCOPE OF WORK
                                            </span>
                                            <span className="text-xs md:text-sm text-dark-slate font-bold leading-relaxed">
                                                {selectedProject.service}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="bg-dark-slate hover:bg-primary text-white px-6 py-3 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
