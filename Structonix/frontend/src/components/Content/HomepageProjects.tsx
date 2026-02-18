"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        number: '01',
        title: 'Chemical refinement complex',
        location: 'Houston, USA',
        description: 'Advanced facility designed for optimal efficiency and safety standards.',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        number: '02',
        title: 'Machine tools for light industry',
        location: 'Kyiv, Ukraine',
        description: 'High-precision manufacturing plant with automated assembly lines.',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        number: '03',
        title: 'Sustainable energy plant',
        location: 'Berlin, Germany',
        description: 'Eco-friendly power generation facility with zero-emission technology.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 4,
        number: '04',
        title: 'Logistic center expansion',
        location: 'Warsaw, Poland',
        description: 'State-of-the-art logistics hub connecting major European trade routes.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 5,
        number: '05',
        title: 'Offshore Wind Farm',
        location: 'North Sea, UK',
        description: 'Large-scale renewable energy project powering thousands of homes.',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop'
    }
];

export function HomepageProjects() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10); // buffer
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        window.addEventListener('resize', checkScrollButtons);
        return () => window.removeEventListener('resize', checkScrollButtons);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -600 : 600;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            // Timeout to allow scroll animation to complete before checking buttons again
            setTimeout(checkScrollButtons, 500);
        }
    };

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    {/* Header Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Projects</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-slate leading-[1.1] mb-8">
                            Successfully completed <br /> projects for our clients
                        </h2>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-dark-slate transition-colors group"
                        >
                            View All Projects
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-4 rounded-full border transition-all duration-300 ${!canScrollLeft ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 bg-white text-dark-slate hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-lg'}`}
                            aria-label="Previous project"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-4 rounded-full border transition-all duration-300 ${!canScrollRight ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 bg-white text-dark-slate hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-lg'}`}
                            aria-label="Next project"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                onScroll={checkScrollButtons}
                className="flex gap-4 md:gap-8 overflow-x-auto pb-12 px-4 md:px-8 hide-scrollbar snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Spacer for left padding visual balance on start */}
                <div className="w-0 md:w-4 flex-shrink-0"></div>

                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative w-[85vw] md:w-[600px] lg:w-[700px] h-[450px] md:h-[550px] flex-shrink-0 snap-center group overflow-hidden rounded-sm cursor-pointer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                        {/* Content Overlay - Restored Dark Box */}
                        <div className="absolute bottom-0 left-0 w-[90%] md:w-[80%] bg-dark-navy p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                            {/* Decorative Top Border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>

                            <div className="relative z-10">
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">
                                    {project.location}
                                </span>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                    {project.title}
                                </h3>

                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-primary/30 pl-4">
                                        {project.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors">
                                        View Case Study
                                        <ArrowUpRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Large Background Number (Restored & Visible) */}
                        <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20 pointer-events-none">
                            <span className="text-6xl md:text-8xl font-bold text-transparent transition-opacity duration-300 opacity-30 group-hover:opacity-60" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                                {project.number}
                            </span>
                        </div>
                    </motion.div>
                ))}

                {/* Spacer for right padding visual balance on end */}
                <div className="w-4 md:w-32 flex-shrink-0"></div>
            </div>

        </section>
    );
}
