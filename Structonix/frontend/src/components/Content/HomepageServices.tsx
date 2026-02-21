'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, ChevronsRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 'industrial',
        label: 'Industrial Construction',
        title: 'We solve worldwide industrial every problem',
        description: "The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        points: [
            'Manufacturing Solutions',
            'Research and Development',
            'Vehicle manufacturing'
        ],
        image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
        link: '/services/industrial'
    },
    {
        id: 'regulation',
        label: 'High regulation industry',
        title: 'Compliance & Safety First',
        description: "Ensuring your operations meet the strictest international standards for safety and environmental impact.",
        points: [
            'ISO Certification Support',
            'Environmental Audits',
            'Safety Training'
        ],
        image: 'https://images.pexels.com/photos/675987/machine-mill-industry-steam-675987.jpeg',
        link: '/services/regulation'
    },
    {
        id: 'bridge',
        label: 'Bridge Construction',
        title: 'Connecting Communities',
        description: "Advanced engineering solutions for long-span and complex bridge infrastructure projects.",
        points: [
            'Structural Analysis',
            'Maintenance & Repair',
            'Capital Projects'
        ],
        image: 'https://images.pexels.com/photos/11701519/pexels-photo-11701519.jpeg',
        link: '/services/bridge'
    },
    {
        id: 'oilgas',
        label: 'Oil & Gas Energy',
        title: 'Powering the Future',
        description: "Comprehensive services for the upstream, midstream, and downstream oil and gas sectors.",
        points: [
            'Pipeline Construction',
            'Refinery Maintenance',
            'Exploration Support'
        ],
        image: 'https://images.pexels.com/photos/10407684/pexels-photo-10407684.jpeg',
        link: '/services/oilgas'
    },
    {
        id: 'mechanical',
        label: 'Mechanical Engineering',
        title: 'Precision Engineering',
        description: "Custom mechanical design and fabrication for specialized industrial applications.",
        points: [
            'CAD Design',
            'Prototyping',
            'Mass Production'
        ],
        image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg',
        link: '/services/mechanical'
    },
    {
        id: 'automation',
        label: 'Automation Industry',
        title: 'Smart Factory Solutions',
        description: "Integrating robotics and AI to streamline production lines and increase efficiency.",
        points: [
            'Robotic Integration',
            'Process Automation',
            'IoT Implementation'
        ],
        image: 'https://images.pexels.com/photos/11951215/pexels-photo-11951215.jpeg',
        link: '/services/automation'
    }
];

const workProcess = [
    {
        id: '01',
        title: "Analysis of the client's objectives & needs",
        description: "Our approach to project management is grounded in practical experience and prioritizes open communication.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
        )
    },
    {
        id: '02',
        title: "Engineering project study & solution design",
        description: "Together, we identify the industrial data automation project's general scope and the components needed to produce.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        )
    },
    {
        id: '03',
        title: "Solution execution phase and installation done",
        description: "We collaborate closely on with you and examine the strategy and install and integrate the mechanical.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h3" />
                <path d="M7 12h3" />
                <path d="M7 17h3" />
                <path d="M17 7h-2" />
                <path d="M17 12h-2" />
                <path d="M17 17h-2" />
            </svg>
        )
    }
];

export function HomepageServices() {
    const [activeTab, setActiveTab] = useState(services[0].id);
    const activeService = services.find(s => s.id === activeTab) || services[0];

    return (
        <section className="py-20 md:py-32 bg-[#F8F9FA] overflow-hidden">
            <div className="container mx-auto px-4">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                            <ChevronsRight className="w-4 h-4" />
                            <span>Services</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-slate leading-tight">
                            Creative features from <br /> production industry
                        </h2>
                    </div>
                    <div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 text-dark-slate font-bold uppercase text-sm hover:bg-dark-slate hover:text-white transition-colors duration-300"
                        >
                            View All Solutions
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* --- TABS SECTION --- */}
                <div className="flex flex-col lg:flex-row gap-8 mb-32">

                    {/* Sidebar Tabs */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-2">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                onMouseEnter={() => setActiveTab(service.id)}
                                className={`flex items-center justify-between p-4 text-left font-bold text-lg transition-all duration-300 border-l-4 cursor-pointer ${activeTab === service.id
                                    ? 'bg-primary text-white border-primary shadow-lg' // Active State
                                    : 'bg-white text-gray-500 border-transparent hover:bg-gray-100 hover:text-dark-slate' // Inactive State
                                    }`}
                            >
                                {service.label}
                                {activeTab === service.id && <ArrowRight className="w-5 h-5" />}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-8 lg:gap-16">
                        {/* Image */}
                        <motion.div
                            key={`img-${activeTab}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full md:w-1/2 h-[300px] md:h-[450px] relative rounded-sm overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary transform translate-x-12 -translate-y-12 rotate-45 z-10 hidden md:block"></div>
                            <img
                                src={activeService.image}
                                alt={activeService.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            key={`text-${activeTab}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full md:w-1/2 flex flex-col justify-center space-y-6"
                        >
                            <h3 className="text-3xl font-bold text-dark-slate leading-tight">
                                {activeService.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {activeService.description}
                            </p>

                            <ul className="space-y-4 pt-2">
                                {activeService.points.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3 text-dark-slate font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={activeService.link}
                                className="inline-flex items-center gap-2 text-dark-slate font-bold underline decoration-2 decoration-primary underline-offset-4 hover:text-primary transition-colors mt-4"
                            >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* --- WORK PROCESS SECTION --- */}
                <div className="relative pt-0 pb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">How We Work</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-slate">Simple 3-Step Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[45px] left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-gray-200 -z-10"></div>

                        {workProcess.map((step, index) => (
                            <div key={step.id} className="relative group">
                                {/* Number Badge */}
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F8F9FA] rounded-full flex items-center justify-center text-2xl font-bold text-dark-slate shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-8 relative z-10">
                                    {step.id}
                                </div>

                                {/* Content Card */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col items-center">
                                    <div className="mb-6 p-4 rounded-full bg-orange-50 group-hover:scale-110 transition-transform duration-300 text-primary">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-dark-slate mb-4">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
