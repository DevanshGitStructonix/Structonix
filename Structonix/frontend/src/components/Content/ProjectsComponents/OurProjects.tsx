"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react';

const projects = [
    {
        id: 1,
        number: '01',
        title: 'United Packaging Solutions Ind Pvt Ltd',
        location: 'Vemgal, Kolar',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg', // Welding/Metallurgy
        slug: '/projects/united-packaging'
    },
    {
        id: 2,
        number: '02',
        title: 'Shangrila Industris',
        location: 'Vasanthanarasapura Industrial Area, Tumkur',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
        slug: '/projects/shangrila-industries'
    },
    {
        id: 3,
        number: '03',
        title: 'Sri Ranganath Enterprises',
        location: 'Dabaspet',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://serbianbuildfund.com/wp-content/uploads/2023/07/Advantages-of-Industrial-Buildings-1.jpg',
        slug: '/projects/sri-ranganath'
    },
    {
        id: 4,
        number: '04',
        title: 'Manufacturing Solutions',
        location: 'Peenya Industrial Estate, Bangalore',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg',
        slug: '/projects/manufacturing-solutions'
    },
    {
        id: 5,
        number: '05',
        title: 'State of the art for high control in',
        location: 'Bommasandra Industrial Area',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
        slug: '/projects/high-control'
    },
    {
        id: 6,
        number: '06',
        title: 'Oil construction and gas production',
        location: 'Hosur Tech Park',
        description: 'Consectetur ipiscing elit tellus ullam corper mattis',
        image: 'https://images.pexels.com/photos/33421999/pexels-photo-33421999.jpeg',
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
                        <Link href={project.slug} key={project.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex flex-col h-[420px] bg-[#0e1027] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Top Image Half */}
                                <div className="h-[240px] relative overflow-hidden shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle Image Overlay */}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300"></div>
                                </div>

                                {/* Bottom Content Half */}
                                <div className="p-6 md:p-8 flex flex-col flex-1 relative justify-between">
                                    <div className="flex flex-col items-start gap-4">
                                        {/* Location Tag */}
                                        <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 max-w-full">
                                            <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                                            <span className="text-white text-xs md:text-sm font-medium truncate">{project.location}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-white text-lg md:text-[22px] font-semibold leading-snug group-hover:text-primary transition-colors duration-300 pr-10">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Hover Arrow Icon */}
                                    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white flex items-center justify-center transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 shadow-md">
                                        <ChevronRight className="w-5 h-5 text-[#0e1027] ml-0.5" />
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
