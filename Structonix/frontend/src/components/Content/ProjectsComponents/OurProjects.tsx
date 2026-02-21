"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        number: '01',
        title: 'Best innovations in metallurgy',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.unsplash.com/photo-1581093588401-209af31f0036?q=80&w=2070&auto=format&fit=crop', // Welding/Metallurgy
        slug: '/projects/metallurgy-innovations'
    },
    {
        id: 2,
        number: '02',
        title: 'Fuel & Gas management',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Refinery pipes
        slug: '/projects/fuel-gas-management'
    },
    {
        id: 3,
        number: '03',
        title: 'Manufacturer of tin lead and lead',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2070&auto=format&fit=crop', // Industrial pipes
        slug: '/projects/tin-lead-manufacturing'
    },
    {
        id: 4,
        number: '04',
        title: 'Manufacturing Solutions',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.unsplash.com/photo-1565439398835-7b567dc8524a?q=80&w=2070&auto=format&fit=crop', // Factory floor
        slug: '/projects/manufacturing-solutions'
    },
    {
        id: 5,
        number: '05',
        title: 'State of the art for high control in',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.unsplash.com/photo-1574359411659-15573a21bc2c?q=80&w=2070&auto=format&fit=crop', // Machinery/Control
        slug: '/projects/high-control'
    },
    {
        id: 6,
        number: '06',
        title: 'Oil construction and gas production',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.unsplash.com/photo-1444530495635-029990f77d8b?q=80&w=2070&auto=format&fit=crop', // Automation/Rig
        slug: '/projects/oil-gas-construction'
    }
];

export function OurProjects() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-left"
                >
                    <div className="flex items-center gap-2 mb-2 justify-left">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Projects</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-dark-slate leading-tight font-secondary tracking-tight">
                        Our Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link href={project.slug} key={project.id} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-[#FAFAFA] hover:bg-dark-navy transition-colors duration-300 overflow-hidden cursor-pointer h-full flex flex-col shadow-sm hover:shadow-xl rounded-sm"
                            >
                                {/* Image Container */}
                                <div className="h-64 overflow-hidden flex-shrink-0 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-dark-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col relative z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-dark-slate group-hover:text-primary mb-4 transition-colors duration-300 leading-tight font-secondary">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-500 group-hover:text-gray-300 mb-8 transition-colors duration-300 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Footer: Number and Button */}
                                    <div className="flex justify-between items-center border-t border-gray-200 group-hover:border-gray-700 pt-6 transition-colors duration-300 relative mt-auto">

                                        {/* Large Number - Improved Visibility */}
                                        <span
                                            className="text-5xl md:text-6xl font-bold text-gray-200 group-hover:text-white/10 transition-colors duration-300 absolute -top-8 left-0 select-none pointer-events-none"
                                            style={{
                                                WebkitTextStroke: '1px transparent',
                                            }}
                                        >
                                            {project.number}
                                        </span>
                                        {/* Outline number for hover state to make it pop slightly more elegantly */}
                                        <span
                                            className="text-5xl md:text-6xl font-bold text-transparent group-hover:text-transparent transition-opacity duration-300 absolute -top-8 left-0 select-none pointer-events-none opacity-0 group-hover:opacity-100"
                                            style={{
                                                WebkitTextStroke: '1px rgba(255,255,255,0.15)',
                                            }}
                                        >
                                            {project.number}
                                        </span>

                                        <span className="text-sm font-bold tracking-wider uppercase text-dark-slate group-hover:text-white transition-colors duration-300 relative z-10 pl-2">
                                            View Details
                                        </span>

                                        <div className="w-10 h-10 bg-gray-200 group-hover:bg-primary rounded-sm flex items-center justify-center transition-colors duration-300 transform group-hover:translate-x-1">
                                            <ArrowRight className="w-4 h-4 text-dark-slate group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
