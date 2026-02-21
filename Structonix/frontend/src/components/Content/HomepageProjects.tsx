"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Chemical refinement complex',
        area: '150000 Sq. Ft.',
        location: 'Houston, USA',
        service: 'Industrial Construction',
        industry: 'Oil & Gas',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Machine tools for light industry',
        area: '85000 Sq. Ft.',
        location: 'Kyiv, Ukraine',
        service: 'PEB Solutions',
        industry: 'Manufacturing',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Sustainable energy plant',
        area: '220000 Sq. Ft.',
        location: 'Berlin, Germany',
        service: 'Construction Civil & PEB',
        industry: 'Energy',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Logistic center expansion',
        area: '120000 Sq. Ft.',
        location: 'Warsaw, Poland',
        service: 'Turnkey Contracting',
        industry: 'Logistics',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Offshore Wind Farm',
        area: '300000 Sq. Ft.',
        location: 'North Sea, UK',
        service: 'Heavy Structural Fabrication',
        industry: 'Renewable Energy',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop'
    }
];

export function HomepageProjects() {
    return (
        <section className="py-20 md:py-32 bg-[#f4f4f4] relative">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
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

                {/* Project Stack - Sticky Container */}
                <div className="flex flex-col relative pb-[10vh]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="bg-[#fcfcfc] flex flex-col-reverse md:flex-row shadow-[0_-5px_25px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden sticky origin-top h-[80vh] md:h-[600px] max-h-[800px]"
                            style={{
                                top: `calc(10vh + ${index * 15}px)`,
                                zIndex: index + 1,
                                marginBottom: index === projects.length - 1 ? '0' : '40px'
                            }}
                        >
                            {/* Left Side: Details */}
                            <div className="w-full h-[70%] md:w-[35%] md:h-full p-6 md:p-10 lg:p-12 flex flex-col justify-between relative bg-white overflow-y-auto">
                                {/* Subtle side border effect */}
                                <div className="hidden md:block absolute top-10 bottom-10 right-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                                <div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-dark-slate mb-8 leading-tight font-secondary">
                                        {project.title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:flex md:flex-col md:space-y-4 md:grid-cols-1">
                                        {/* Area */}
                                        <div className="border-b border-gray-100 pb-2">
                                            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">
                                                AREA
                                            </span>
                                            <span className="text-sm md:text-lg text-dark-slate font-medium">
                                                {project.area}
                                            </span>
                                        </div>

                                        {/* Location */}
                                        <div className="border-b border-gray-100 pb-2">
                                            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">
                                                LOCATION
                                            </span>
                                            <span className="text-sm md:text-lg text-dark-slate font-medium">
                                                {project.location}
                                            </span>
                                        </div>

                                        {/* Service */}
                                        <div className="border-b border-gray-100 pb-2">
                                            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">
                                                SERVICE
                                            </span>
                                            <span className="text-sm md:text-lg text-dark-slate font-medium ">
                                                {project.service}
                                            </span>
                                        </div>

                                        {/* Industry */}
                                        <div className="border-b border-gray-100 pb-2">
                                            <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">
                                                INDUSTRY
                                            </span>
                                            <span className="text-sm md:text-lg text-dark-slate font-medium ">
                                                {project.industry}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button className="bg-primary hover:bg-dark-slate text-white px-8 py-3.5 font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer">
                                        Explore More
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Image */}
                            <div className="w-full h-[30%] md:w-[65%] md:h-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-dark-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
