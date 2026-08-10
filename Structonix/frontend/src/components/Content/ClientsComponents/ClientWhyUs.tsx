'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, CalendarRange, Landmark, BarChart3, CheckCircle2 } from 'lucide-react';

const stats = [
    { 
        id: 1, 
        icon: CalendarRange, 
        value: '98.7%', 
        label: 'On-Time Handover', 
        desc: 'Driven by automated production lines and disciplined site logistics.' 
    },
    { 
        id: 2, 
        icon: BarChart3, 
        value: '1.5M+ Sq. Ft.', 
        label: 'Engineered Footprint', 
        desc: 'Delivered for logistics hubs, factories, and commercial complexes.' 
    },
    { 
        id: 3, 
        icon: Landmark, 
        value: '15,000+ MT', 
        label: 'Steel Fabricated', 
        desc: 'Precision built-up and secondary members manufactured to date.' 
    },
    { 
        id: 4, 
        icon: ShieldCheck, 
        value: '100%', 
        label: 'Compliance Rating', 
        desc: 'Strictly aligning with ISO 9001:2015 and ISO 45001:2018 standards.' 
    }
];

const pillars = [
    {
        title: 'Concurrent Engineering Model',
        description: 'Our 25+ in-house estimation, design, and detail engineers work in tandem with manufacturing teams to reduce overall project lead times by up to 30% without sacrificing design margins.'
    },
    {
        title: 'Rigorous Quality Gates',
        description: 'Every structural component undergoes multi-point testing, including automated ultrasonic welding audits, steel grade verification, and SA 2.5 shot-blast surface profiling prior to coating.'
    },
    {
        title: 'Single-Point Project Ownership',
        description: 'We manage the entire lifecycle of your project. Sourcing raw steel directly, carrying out full-scale fabrication, logistics planning, and on-site erection under strict safety protocols.'
    }
];

export function ClientWhyUs() {
    return (
        <section className="py-20 lg:py-32 bg-[#eaecf0] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
            
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 max-w-7xl">
                
                {/* Header */}
                <div className="max-w-3xl mb-16 md:mb-24">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Value Proposition</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black font-secondary text-dark-slate leading-tight tracking-tight">
                        WHY LEADING BRANDS <br />TRUST STRUCTONIX
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                        Beyond fabrication, we deliver structural reliability and process transparency that satisfy the stringent demands of top-tier industrial corporations.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-28">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white p-8 border border-gray-200/80 shadow-sm relative group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-[4px] h-0 bg-primary group-hover:h-full transition-all duration-300" />
                                <div className="p-3 bg-gray-50 border border-gray-150 w-fit mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="block text-3xl md:text-4xl font-extrabold text-dark-slate mb-2 font-secondary leading-none tracking-tight">
                                    {stat.value}
                                </span>
                                <h3 className="text-xs font-black uppercase tracking-wider text-dark-slate mb-3">
                                    {stat.label}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                    {stat.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Operational Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 border-t border-gray-200">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-bold text-dark-slate uppercase tracking-wide">
                                    {pillar.title}
                                </h4>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium pl-11">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
