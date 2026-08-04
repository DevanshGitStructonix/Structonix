'use client';

import { motion } from 'framer-motion';
import { 
    Award, 
    Compass, 
    Hammer, 
    Zap, 
    Factory, 
    Clock, 
    HardHat,
    ChevronsRight
} from 'lucide-react';

const strengths = [
    {
        id: '01',
        title: 'PROVEN EXPERIENCE',
        description: 'With years of experience in manufacturing and erection, we possess a deep and practical understanding of the structural steel industry.',
        icon: Award
    },
    {
        id: '02',
        title: 'STRONG DESIGN TEAM',
        description: 'Our in-house design team consists of experienced engineers and architects who work closely to create customized, compliant designs.',
        icon: Compass
    },
    {
        id: '03',
        title: 'QUALITY MATERIALS & FABRICATION',
        description: 'We source high-grade materials and implement advanced fabrication methods to guarantee durable, sustainable, and high-performance buildings.',
        icon: Hammer
    },
    {
        id: '04',
        title: 'ADVANCED MACHINES & LATEST TECH',
        description: 'Powered by advanced Chinese-imported CNC H-beam lines and automated laser-cutting technology, ensuring rapid, cost-optimized, and flawless execution.',
        icon: Zap
    },
    {
        id: '05',
        title: 'PRODUCTION CAPACITY',
        description: 'With our state-of-the-art machinery and rapid operation cycles, our monthly production capacity reaches approximately 750–800 MT.',
        icon: Factory
    },
    {
        id: '06',
        title: 'TIMELY DELIVERY',
        description: 'We prioritize prompt delivery, ensuring our client projects are completed on schedule with minimal disruption to ongoing business operations.',
        icon: Clock
    },
    {
        id: '07',
        title: 'EXPERT INSTALLATION',
        description: 'Our certified installation teams ensure buildings are erected correctly, efficiently, and safely, maintaining the highest standards of workmanship.',
        icon: HardHat
    }
];

export function KeyStrengths() {
    return (
        <section id="key-strengths" className="scroll-mt-[200px] relative w-full py-20 lg:py-32 bg-dark-navy overflow-hidden text-white">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(254,127,45,0.05),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_120%,rgba(254,127,45,0.05),transparent_45%)] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* Header Card (Spans 2 columns on large screens) */}
                    <div className="flex flex-col justify-center p-8 md:p-12 bg-dark-slate/40 border border-white/5 rounded-2xl lg:col-span-2 backdrop-blur-sm min-h-[250px]">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                            <ChevronsRight className="w-4.5 h-4.5" />
                            <span>Why Partner With Us</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-secondary text-white leading-tight mb-6">
                            OUR KEY <span className="text-primary">STRENGTHS</span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-secondary">
                            We deliver structural solutions engineered to exceed expectations. Through our advanced technology, seasoned team, and strict quality control, we build spaces that stand the test of time.
                        </p>
                    </div>

                    {/* Render Strengths */}
                    {strengths.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -6, borderColor: 'rgba(254,127,45,0.3)' }}
                                className="group relative flex flex-col justify-between p-8 bg-dark-slate/60 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-2xl"
                            >
                                {/* Top Header of Card */}
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                                            <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                        <span className="text-5xl font-bold font-secondary text-white/5 group-hover:text-white/10 transition-colors duration-300">
                                            {item.id}
                                        </span>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold font-secondary text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed font-secondary">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
