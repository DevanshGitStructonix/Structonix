"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Settings, Factory, ShieldCheck, Zap, Cog, Activity } from 'lucide-react';

const services = [
    {
        id: 1,
        number: '01',
        title: 'Industrial Construction',
        description: 'Comprehensive general contracting services tailored for industrial facilities, manufacturing plants, and warehouses.',
        image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
        slug: '/services/industrial',
        icon: Factory
    },
    {
        id: 2,
        number: '02',
        title: 'High Regulation Compliance',
        description: 'Specialized structural planning and construction ensuring operations meet the strictest international standards.',
        image: 'https://images.pexels.com/photos/675987/machine-mill-industry-steam-675987.jpeg',
        slug: '/services/regulation',
        icon: ShieldCheck
    },
    {
        id: 3,
        number: '03',
        title: 'Bridge Engineering',
        description: 'Advanced engineering design and construction solutions for long-span and complex bridge infrastructure.',
        image: 'https://images.pexels.com/photos/11701519/pexels-photo-11701519.jpeg',
        slug: '/services/bridge',
        icon: Settings
    },
    {
        id: 4,
        number: '04',
        title: 'Oil & Gas Infrastructure',
        description: 'Comprehensive building services for upstream, midstream, and downstream oil and gas sectors.',
        image: 'https://images.pexels.com/photos/10407684/pexels-photo-10407684.jpeg',
        slug: '/services/oilgas',
        icon: Zap
    },
    {
        id: 5,
        number: '05',
        title: 'Mechanical Design',
        description: 'Custom mechanical layout, design, and fabrication for specialized heavy industrial plant applications.',
        image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg',
        slug: '/services/mechanical',
        icon: Cog
    },
    {
        id: 6,
        number: '06',
        title: 'Automation & Robotics',
        description: 'Designing spaces optimized for robotic integration to streamline modern production lines.',
        image: 'https://images.pexels.com/photos/11951215/pexels-photo-11951215.jpeg',
        slug: '/services/automation',
        icon: Activity
    }
];

export function OurServices() {
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Services</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-dark-slate leading-tight font-secondary tracking-tight">
                        Products & Services
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl text-lg">
                        Leading solutions tailored to elevate your business in an evolving industrial landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link href={service.slug} key={service.id} className="block h-full">
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
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-dark-navy/30 group-hover:bg-primary/20 transition-colors duration-500"></div>

                                        {/* Icon Floating */}
                                        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10">
                                            <IconComponent className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col relative z-10">
                                        <h3 className="text-xl md:text-2xl font-bold text-dark-slate group-hover:text-primary mb-3 transition-colors duration-300 leading-tight font-secondary">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-500 group-hover:text-gray-300 mb-8 transition-colors duration-300 text-sm leading-relaxed flex-1">
                                            {service.description}
                                        </p>

                                        {/* Footer: Number and Button */}
                                        <div className="flex justify-between items-center border-t border-gray-200 group-hover:border-gray-700 pt-6 transition-colors duration-300 relative mt-auto">

                                            {/* Large Number */}
                                            <span
                                                className="text-5xl md:text-6xl font-bold text-gray-200 group-hover:text-transparent transition-colors duration-300 absolute -top-8 left-0 select-none pointer-events-none opacity-100 group-hover:opacity-0"
                                            >
                                                {service.number}
                                            </span>
                                            {/* Outline number for hover state */}
                                            <span
                                                className="text-5xl md:text-6xl font-bold text-transparent group-hover:text-transparent transition-opacity duration-300 absolute -top-8 left-0 select-none pointer-events-none opacity-0 group-hover:opacity-100"
                                                style={{
                                                    WebkitTextStroke: '1px rgba(255,255,255,0.15)',
                                                }}
                                            >
                                                {service.number}
                                            </span>

                                            <span className="text-sm font-bold tracking-wider uppercase text-dark-slate group-hover:text-white transition-colors duration-300 relative z-10 pl-2">
                                                Discover
                                            </span>

                                            <div className="w-10 h-10 bg-gray-200 group-hover:bg-primary rounded-sm flex items-center justify-center transition-colors duration-300 transform group-hover:translate-x-1">
                                                <ArrowRight className="w-4 h-4 text-dark-slate group-hover:text-white transition-colors duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
