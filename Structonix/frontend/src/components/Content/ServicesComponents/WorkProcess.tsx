"use client";

import { motion } from 'framer-motion';
import { InquireForm } from '@/components/Forms/InquireForm';

const steps = [
    {
        num: "01",
        title: "Design and Planning",
        desc: "Industry standard dummy text took since the when an unknown printer galley type scrambled."
    },
    {
        num: "02",
        title: "Component Sourcing",
        desc: "Industry standard dummy text took since the when an unknown printer galley type scrambled."
    },
    {
        num: "03",
        title: "Testing and Quality",
        desc: "Industry standard dummy text took since the when an unknown printer galley type scrambled."
    },
    {
        num: "04",
        title: "Final Assembly",
        desc: "Industry standard dummy text took since the when an unknown printer galley type scrambled."
    }
];

export function WorkProcess() {
    return (
        <section className="relative py-24 bg-[#fbfbfb] overflow-hidden">
            {/* Background vertical text */}
            <div className="absolute top-0 left-0 h-full hidden xl:flex items-center -ml-16 select-none pointer-events-none">
                <span className="text-[12rem] font-black text-gray-100/60 uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    WORK PROCESS
                </span>
            </div>

            <div className="container mx-auto px-4 lg:pl-32 relative z-10">
                {/* Header section */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-primary font-black tracking-widest text-sm">»</span>
                        <span className="text-primary font-bold text-sm tracking-wider uppercase">WORK PROCESS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark-slate font-secondary tracking-tight">
                        Project implementation process
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left: Steps Grid */}
                    <div className="lg:w-[55%]">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {steps.map((step, index) => {
                                // Determine borders to create the "cross" effect
                                let borderClasses = "";
                                if (index === 0) borderClasses = "md:border-r md:border-b border-gray-200 pb-10 md:pr-10";
                                if (index === 1) borderClasses = "md:border-b border-gray-200 pb-10 md:pl-10 pt-10 md:pt-0";
                                if (index === 2) borderClasses = "md:border-r border-gray-200 pt-10 md:pr-10";
                                if (index === 3) borderClasses = "pt-10 md:pl-10";

                                return (
                                    <motion.div
                                        key={step.num}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className={`flex flex-col items-start ${borderClasses}`}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
                                                {step.num}
                                            </div>
                                            <span className="text-gray-300 font-bold uppercase tracking-widest text-sm">STEP</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-dark-slate mb-4">{step.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed pr-6">
                                            {step.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:w-[45%]">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-primary relative z-20"
                        >
                            <h3 className="text-3xl font-extrabold text-dark-slate mb-4 font-secondary min-h-[40px]">
                                Have any Question?
                            </h3>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                                The point of using Lorem Ipsum is that it has more-or-less packages normal point of using.
                            </p>

                            <InquireForm variant="light" hideTitle />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle bottom-right rig graphic placeholder if needed (optional) */}
            <div className="absolute right-10 bottom-0 opacity-10 pointer-events-none w-64 h-96 bg-[url('https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800&auto=format&fit=crop')] bg-contain bg-bottom bg-no-repeat grayscale mix-blend-multiply z-0 hidden lg:block"></div>
        </section>
    );
}
