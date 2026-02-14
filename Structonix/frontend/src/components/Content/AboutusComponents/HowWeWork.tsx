'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const steps = [
    {
        id: '01',
        title: 'Preparation of project documents',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish',
        active: true,
    },
    {
        id: '02',
        title: 'Creation of a project with a team on time',
        description: 'Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish',
        active: false,
    },
    {
        id: '03',
        title: 'Completion of the project and payment',
        description: 'Sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish. Spanish mackerel',
        active: false,
    },
    {
        id: '04',
        title: 'Preparation of project documents',
        description: 'Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish',
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

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // On mobile, we use normal flow (not sticky/scrollytelling) to avoid clipping.
    // We just show a horizontal scroll container.

    if (isMobile) {
        return (
            <section className="py-16 bg-[#EBECEE] overflow-hidden">
                <div className="container mx-auto px-4">
                    {/* Top Section: Heading */}
                    <div className="w-full text-center mb-10">
                        <div className="max-w-4xl mx-auto">
                            <span className="text-[#F4991A] text-sm font-semibold tracking-widest uppercase mb-2 block">
                                How we work
                            </span>
                            <h2 className="text-xl font-bold font-secondary text-[#121C22] leading-[1.1] mb-6">
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
                                    className="snap-center relative flex-shrink-0 w-[280px] p-6 bg-white border border-dark-gray shadow-lg"
                                >
                                    <div className="mb-4 flex justify-between items-start">
                                        <span className={`text-5xl font-bold font-secondary leading-none ${step.active ? 'text-[#F4991A]' : 'text-[#F4991A] [-webkit-text-stroke:1px_#F4991A]'}`}>
                                            {step.id}
                                        </span>
                                        <span className="text-[10px] text-primary uppercase tracking-widest mt-2">
                                            {step.id} step
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold font-secondary text-[#121C22] mb-3 leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed">
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
        <section ref={targetRef} className="relative h-[400vh] bg-[#EBECEE]">
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
                            <span className="text-[#F4991A] text-sm font-semibold tracking-widest uppercase mb-2 block">
                                How we work
                            </span>
                            <h2 className="text-2xl md:text-xl font-bold font-secondary text-[#121C22] leading-[1.1] mb-6">
                                Description of our steps in cooperation and achievement of your goals in business
                            </h2>

                            {/* Progress Bar */}
                            <div className="mx-auto w-full max-w-[200px] h-[2px] bg-gray-300 rounded-full overflow-hidden mt-2">
                                <motion.div
                                    style={{ width: progressWidth }}
                                    className="h-full bg-[#F4991A]"
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
                                    className="relative flex-shrink-0 w-[280px] md:w-[320px] p-6 bg-white border border-dark-gray shadow-lg"
                                >
                                    <div className="mb-4 flex justify-between items-start">
                                        <span className={`text-6xl font-bold font-secondary leading-none ${step.active ? 'text-[#F4991A]' : 'text-[#F4991A] [-webkit-text-stroke:1px_#F4991A]'}`}>
                                            {step.id}
                                        </span>
                                        <span className="text-[10px] text-primary uppercase tracking-widest mt-2">
                                            {step.id} step
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold font-secondary text-[#121C22] mb-3 leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed">
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
