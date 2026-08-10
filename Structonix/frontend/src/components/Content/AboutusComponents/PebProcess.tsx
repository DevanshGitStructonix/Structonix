'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PencilRuler, Factory, Construction, ShieldCheck } from 'lucide-react';

export function PebProcess() {
    const steps = [
        {
            icon: PencilRuler,
            title: "1. Design & Engineering",
            desc: "Custom structural planning, 3D modeling in Tekla, and load calculations in STAAD.Pro to optimize steel weight and ensure load resistance."
        },
        {
            icon: Factory,
            title: "2. Precision Manufacturing",
            desc: "Primary frames (columns, rafters) are built up via submerged arc welding, and secondary profiles are cold-formed in our state-of-the-art facility."
        },
        {
            icon: Construction,
            title: "3. On-Site Assembly & Erection",
            desc: "Components are delivered pre-cut and pre-punched to the site, allowing fast and secure bolting and assembly by specialized teams."
        }
    ];

    return (
        <section id="peb-process" className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Process Description */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block font-secondary"
                        >
                            WHAT WE DO
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-dark-slate mb-6 font-secondary leading-tight"
                        >
                            The Pre-Engineered Building (PEB) Process
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-gray-500 text-lg mb-10 font-secondary leading-relaxed"
                        >
                            Pre-Engineered Buildings offer superior speed, flexibility, and strength compared to conventional structures. By engineering every section before fabrication, we eliminate raw material waste and guarantee structural resilience.
                        </motion.p>

                        <div className="space-y-8">
                            {steps.map((step, index) => {
                                const IconComp = step.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="p-3 bg-primary/10 rounded-sm text-primary flex-shrink-0">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-dark-slate mb-1 font-secondary">
                                                {step.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed font-secondary">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Process Diagram Image */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="w-full h-[350px] md:h-[600px] relative rounded-lg overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="https://res.cloudinary.com/dpctlwaam/image/upload/v1785873908/peb_hjlxoe.jpg"
                                    alt="Structonix Pre-Engineered Building (PEB) Process Diagram"
                                    fill
                                    className="object-contain bg-gray-50"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Decorative badge */}
                            <div className="absolute -bottom-6 -left-6 bg-dark-navy text-white p-6 rounded-sm shadow-xl hidden md:flex items-center gap-3 border border-white/10 z-20">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                                <div>
                                    <span className="block font-bold text-lg font-secondary">100% Precision</span>
                                    <span className="block text-xs text-gray-400 font-secondary">IS & AISC Standards Compliance</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
