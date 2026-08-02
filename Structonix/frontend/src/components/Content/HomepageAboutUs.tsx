'use client';

import { useRef } from 'react';
import { ChevronsRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HomepageAboutUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track scroll of the section to drive the video zoom reveal
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Animate the width, height, and border radius of the video container on scroll
    const videoWidth = useTransform(scrollYProgress, [0.2, 0.55], ["90%", "100%"]);
    const videoHeight = useTransform(scrollYProgress, [0.2, 0.55], ["65vh", "100vh"]);
    const videoBorderRadius = useTransform(scrollYProgress, [0.2, 0.55], ["16px", "0px"]);

    return (
        <section ref={sectionRef} className="bg-white overflow-visible relative">
            {/* Top Text Content Area */}
            <div className="py-20 md:py-32 container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Left Column: Headline (7 Columns / ~60%) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                            <ChevronsRight className="w-4 h-4" />
                            <span>About Us</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-secondary font-extrabold text-dark-slate leading-[1.1] tracking-tight pb-2">
                            We build tomorrow's <span className="text-primary block lg:inline">horizon.</span> <br />
                            Turnkey engineering excellence
                        </h2>
                    </motion.div>

                    {/* Right Column: Description (5 Columns / ~40%) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 space-y-6 lg:pt-8"
                    >
                        {/* High-end accent border left */}
                        <div className="border-l-4 border-primary pl-6 py-1">
                            <h3 className="text-xl md:text-2xl font-bold text-dark-slate leading-relaxed">
                                At Structonix, we are not just a Pre-Engineered Building manufacturer—we are end-to-end solution providers in industrial and commercial construction.
                            </h3>
                        </div>

                        <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-relaxed font-light">
                            <p>
                                With over <span className="text-primary font-semibold">7+ years of experience</span>, we bring together engineering expertise, manufacturing strength, and execution capability under one roof. We specialize in complete turnkey PEB solutions, covering design, detailing, manufacturing, and on-site erection.
                            </p>
                            <p>
                                Our integrated approach ensures seamless coordination across every stage of the project, minimizing delays, optimizing costs, and delivering consistent quality. From primary steel frames to cold-formed secondary members, every component is engineered to meet the highest global standards.
                            </p>
                            <p>
                                As your turnkey partner, we take full ownership—from concept to completion—ensuring that you receive a reliable, ready-to-use facility delivered on time, every time.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Section: Scroll Zoom Video Container */}
            {/* Outer track allows scrolling distance */}
            <div className="relative h-[140vh] w-full bg-white z-30">
                {/* Sticky screen container with high z-index to overlay header when full screen */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-[45]">
                    <motion.div
                        style={{
                            width: videoWidth,
                            height: videoHeight,
                            borderRadius: videoBorderRadius,
                        }}
                        className="relative overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center"
                    >
                        {/* Autoplaying Background Video */}
                        <video
                            src="https://res.cloudinary.com/dpctlwaam/video/upload/v1785704874/DJI_0452_1_1_xlbvzp.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />

                        {/* Dark Vignette Overlay for readability */}
                        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

                        {/* Experience Badge */}
                        <div className="absolute bottom-10 left-6 md:left-16 bg-white p-8 md:p-10 shadow-2xl z-20 max-w-[200px] md:max-w-[280px] rounded-lg border border-gray-100">
                            <div className="flex flex-col gap-2">
                                <span className="text-6xl md:text-7xl font-extrabold text-primary leading-none">7+</span>
                                <span className="text-primary font-bold uppercase tracking-wider text-sm md:text-base leading-snug">
                                    Years of Experience in Industry
                                </span>
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-tr-lg rounded-bl-lg"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
