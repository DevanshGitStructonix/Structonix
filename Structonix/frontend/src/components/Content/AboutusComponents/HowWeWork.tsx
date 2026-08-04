'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const steps = [
    {
        id: '01',
        title: 'Design & Consultation',
        description: 'We collaborate with you to outline project goals, drafting custom structural designs utilizing advanced CAD/BIM simulations.',
        active: true,
    },
    {
        id: '02',
        title: 'Precision Fabrication',
        description: 'Using top-grade steel, components are precision-fabricated in a controlled factory environment to ensure maximum quality and fit.',
        active: false,
    },
    {
        id: '03',
        title: 'Supply Chain & Logistics',
        description: 'All fabricated members are systematically coded, packed, and transported to the site in sequence, preventing delays.',
        active: false,
    },
    {
        id: '04',
        title: 'Erection & Site Delivery',
        description: 'Our expert engineering team supervises the on-site assembly and installation, ensuring compliance with strict safety codes.',
        active: false,
    },
];

export function HowWeWork() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // On mobile, we use normal flow (not sticky/scrollytelling) to avoid clipping.
    // We just show a horizontal scroll container.

    if (isMobile) {
        return (
            <section id="how-we-work" className="scroll-mt-[200px] py-16 bg-light-gray overflow-hidden">
                <div className="container mx-auto px-4">
                    {/* Top Section: Heading */}
                    <div className="w-full text-center mb-10">
                        <div className="max-w-4xl mx-auto">
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
                                How we work
                            </span>
                            <h2 className="text-xl font-bold font-secondary text-dark-navy leading-[1.1] mb-6">
                                Description of our steps in cooperation and achievement of your goals in business
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Section: Steps - Native Horizontal Scroll */}
                    <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
                        <div className="flex gap-4">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="snap-center relative flex-shrink-0 w-[320px] p-8 bg-white border border-dark-gray shadow-lg"
                                >
                                    <div className="mb-4 flex justify-between items-start">
                                        <span className={`text-5xl font-bold font-secondary leading-none ${step.active ? 'text-primary' : 'text-primary [-webkit-text-stroke:1px_#FE7F2D]'}`}>
                                            {step.id}
                                        </span>
                                        <span className="text-[10px] text-primary uppercase tracking-widest mt-2">
                                            {step.id} step
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold font-secondary text-dark-navy mb-3 leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Desktop Implementation (Scrollytelling)
    return (
        <section ref={targetRef} id="how-we-work" className="scroll-mt-[200px] relative h-[220vh] bg-light-gray">
            {/* Sticky container */}
            <div className="sticky top-0 flex items-center h-screen overflow-hidden">
                <div className="container mx-auto px-4 md:px-16 flex flex-col justify-center h-full relative">

                    {/* Top Section: Heading */}
                    <div className="w-full text-center flex-shrink-0 mb-8 md:mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
                                How we work
                            </span>
                            <h2 className="text-2xl md:text-xl font-bold font-secondary text-dark-navy leading-[1.1] mb-6">
                                Description of our steps in cooperation and achievement of your goals in business
                            </h2>

                            {/* Progress Bar */}
                            <div className="mx-auto w-full max-w-[200px] h-[2px] bg-gray-300 rounded-full overflow-hidden mt-2">
                                <motion.div
                                    style={{ width: progressWidth }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section: Steps */}
                    <div className="w-full flex items-center flex-grow-0">
                        <motion.div style={{ x }} className="flex gap-8 pl-4 lg:pl-[20vw] pr-8">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="relative flex-shrink-0 w-[380px] md:w-[460px] p-8 md:p-12 bg-white border border-dark-gray shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <div className="mb-6 flex justify-between items-start">
                                        <span className={`text-6xl font-bold font-secondary leading-none ${step.active ? 'text-primary' : 'text-primary [-webkit-text-stroke:1px_#FE7F2D]'}`}>
                                            {step.id}
                                        </span>
                                        <span className="text-[10px] text-primary uppercase tracking-widest mt-2">
                                            {step.id} step
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold font-secondary text-dark-navy mb-4 leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
