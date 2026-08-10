"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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
    return (
        <section className="py-20 md:py-32 bg-[#f4f4f4] relative">
            <div className="px-4 lg:px-8">
                <div className="flex items-start gap-2 mb-6">
                    <span className="text-primary font-bold text-lg leading-none mt-[2px]">»</span>
                    <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase">OUR PROJECTS</span>
                </div>

                {/* Header Sequence */}
                <div className="flex flex-col md:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 border-b-2 border-primary/20 pb-4">
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

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 md:mt-0"
                    >
                        <a href="/projects" className="group flex items-center gap-2 text-primary font-bold text-base md:text-sm hover:text-dark-slate transition-colors uppercase tracking-widest pb-2 whitespace-nowrap">
                            View all projects
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </a>
                    </motion.div>
                </div>

                {/* Project Stack - Horizontal Scroll on Mobile, Sticky Stack on Desktop */}
                <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-0 pb-8 md:pb-[10vh] px-4 -mx-4 md:px-0 md:mx-0 hide-scrollbar relative">
                    {projects.map((project, index) => {
                        const isSummary = project.isSummaryCard;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="bg-[#fcfcfc] flex shadow-[0_-5px_25px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative md:sticky origin-top h-[660px] md:h-[650px] max-h-[850px] w-[80vw] sm:w-[360px] md:w-full md:max-w-none flex-shrink-0 snap-start md:snap-none md:top-[var(--sticky-top)] mb-0 md:mb-10 last:md:mb-0"
                                style={{
                                    '--sticky-top': `calc(140px + ${index * 15}px)`,
                                    zIndex: index + 1
                                } as React.CSSProperties}
                            >
                                {isSummary ? (
                                    /* FULL BLEED BACKGROUND IMAGE CARD */
                                    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between p-5 md:p-12 lg:p-16 select-none">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 hover:scale-105"
                                            sizes="100vw"
                                            priority
                                            unoptimized
                                        />
                                        {/* Solid Rich Dark Industrial Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/80 to-dark-navy/30 z-10"></div>

                                        <div className="relative z-20 flex flex-col h-full justify-between items-start text-white">
                                            {/* Tag */}
                                            <div className="flex items-center gap-2 border border-primary/50 bg-primary/10 px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary">
                                                ★ STRUCTONIX PORTFOLIO
                                            </div>

                                            {/* Main Content Info */}
                                            <div className="max-w-4xl my-4 md:my-6">
                                                <h3 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 font-secondary tracking-tight leading-none">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs md:text-base lg:text-lg text-white/80 leading-relaxed max-w-3xl font-medium">
                                                    From massive logistics parks and pharmaceutical complexes to advanced multi-storey industrial structures, Structonix has successfully engineered and delivered over 1.5 Million Sq. Ft. of high-strength PEB installations across India.
                                                </p>

                                                {/* Stats Grid */}
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-6 md:mt-10 border-t border-white/10 pt-6 md:pt-8 w-full">
                                                    <div>
                                                        <span className="text-[9px] md:text-xs text-white/40 font-bold uppercase tracking-widest block mb-0.5">
                                                            TOTAL FOOTPRINT
                                                        </span>
                                                        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-primary">
                                                            {project.area}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[9px] md:text-xs text-white/40 font-bold uppercase tracking-widest block mb-0.5">
                                                            STEEL PROCESSED
                                                        </span>
                                                        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-primary">
                                                            {project.tonnage}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[9px] md:text-xs text-white/40 font-bold uppercase tracking-widest block mb-0.5">
                                                            COVERAGE
                                                        </span>
                                                        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-primary">
                                                            {project.location}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[9px] md:text-xs text-white/40 font-bold uppercase tracking-widest block mb-0.5">
                                                            ACTIVE SITES
                                                        </span>
                                                        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-primary">
                                                            12+ In-Progress
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Button */}
                                            <div>
                                                <a
                                                    href="/projects"
                                                    className="bg-primary hover:bg-white hover:text-dark-navy text-white px-6 py-3.5 md:px-8 md:py-4 font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                                                >
                                                    View All Completed Projects
                                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* STANDARD TWO-COLUMN CARD */
                                    <div className="flex flex-col-reverse md:flex-row w-full h-full">
                                        {/* Left Side: Details */}
                                        <div className="w-full h-[68%] md:w-[38%] lg:w-[35%] md:h-full p-5 md:p-10 lg:p-12 flex flex-col justify-between relative bg-white overflow-y-auto hide-scrollbar flex-shrink-0">
                                            {/* Subtle side border effect */}
                                            <div className="hidden md:block absolute top-10 bottom-10 right-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                                            <div>
                                                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-slate mb-4 md:mb-6 leading-tight font-secondary">
                                                    {project.title}
                                                </h3>

                                                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-4 border-t border-gray-100">
                                                    {/* Area */}
                                                    <div className="border-b border-gray-100 pb-1.5">
                                                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                            AREA
                                                        </span>
                                                        <span className="text-sm md:text-base lg:text-lg text-dark-slate font-bold">
                                                            {project.area}
                                                        </span>
                                                    </div>

                                                    {/* Location */}
                                                    <div className="border-b border-gray-100 pb-1.5">
                                                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                            LOCATION
                                                        </span>
                                                        <span className="text-sm md:text-base lg:text-lg text-dark-slate font-bold">
                                                            {project.location}
                                                        </span>
                                                    </div>

                                                    {/* Tonnage */}
                                                    <div className="border-b border-gray-100 pb-1.5">
                                                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                            TONNAGE
                                                        </span>
                                                        <span className="text-sm md:text-base lg:text-lg text-dark-slate font-bold">
                                                            {project.tonnage}
                                                        </span>
                                                    </div>

                                                    {/* Height */}
                                                    <div className="border-b border-gray-100 pb-1.5">
                                                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                            HEIGHT
                                                        </span>
                                                        <span className="text-sm md:text-base lg:text-lg text-dark-slate font-bold">
                                                            {project.height}
                                                        </span>
                                                    </div>

                                                    {/* Service */}
                                                    <div className="border-b border-gray-100 pb-1.5 col-span-2">
                                                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                            SERVICE
                                                        </span>
                                                        <span className="text-xs md:text-sm lg:text-base text-dark-slate font-bold">
                                                            {project.service}
                                                        </span>
                                                    </div>

                                                    {/* Industry */}
                                                    <div className="border-b border-gray-100 pb-1.5 col-span-2">
                                                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">
                                                            INDUSTRY
                                                        </span>
                                                        <span className="text-xs md:text-sm lg:text-base text-dark-slate font-bold">
                                                            {project.industry}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 md:mt-6">
                                                <a
                                                    href={`/projects#project-${project.id}`}
                                                    className="bg-primary hover:bg-dark-slate text-white px-6 py-3 font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer w-full justify-center md:w-auto"
                                                >
                                                    Explore More
                                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Right Side: Image */}
                                        <div className="w-full h-[32%] md:w-[62%] lg:w-[65%] md:h-full overflow-hidden relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-dark-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 65vw"
                                                priority={index < 2}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
