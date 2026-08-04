'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export function WhoWeAre() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to x-axis movement
    // Adjust values to control speed and direction. 
    // Moving from roughly center/left to right as we scroll down.
    const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={containerRef} id="who-we-are" className="scroll-mt-[200px] bg-gray-100 py-20 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">

                    {/* Left Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block font-secondary"
                        >
                            About Structonix
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-slate mb-8 font-secondary"
                        >
                            We engineer for you. Industrial structures built to last.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6 text-gray-500 font-secondary text-lg"
                        >
                            <p>
                                At Structonix, we specialize in the design, fabrication, and erection of high-quality Pre-Engineered Buildings (PEB) and heavy structural steel systems. Our engineers utilize advanced CAD/BIM technologies to draft customized structural designs that optimize space, safety, and load parameters.
                            </p>
                            <p>
                                By managing the entire supply chain from raw steel sourcing to precision factory fabrication and on-site assembly, we deliver durable, cost-effective infrastructure solutions for manufacturing plants, logistics hubs, cold storages, and commercial facilities.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-10"
                        >
                            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase hover:opacity-80 transition-opacity font-secondary group">
                                EXPLORE OUR SERVICES
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="w-full h-[300px] md:h-[700px] relative">
                                <Image
                                    src="https://images.pexels.com/photos/34287570/pexels-photo-34287570.jpeg"
                                    alt="Industrial Worker Welding"
                                    fill
                                    className="object-cover shadow-2xl"
                                />
                            </div>

                            {/* Decorative White Square (Top Right) */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-dark-gray z-20 hidden md:block" />

                            {/* Decorative Red Arrow Box (Bottom Right) */}
                            <div className="absolute bottom-0 right-0 w-64 h-32 bg-white flex items-center justify-center z-20 hidden md:block">
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Large Background Text "STRUCTONIX" */}
            <div className="absolute bottom-20 left-0 w-full z-20 overflow-hidden pointer-events-none select-none hidden md:block">
                <motion.div
                    style={{ x }}
                    className="whitespace-nowrap flex justify-center w-full"
                >
                    <span
                        className="text-[5rem] md:text-[8rem] font-extrabold text-transparent leading-none"
                        style={{ WebkitTextStroke: '3px #FE7F2D' }}
                    >
                        STRUCTONIX
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
