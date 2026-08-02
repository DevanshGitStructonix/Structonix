'use client';
 
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Settings, Shield, Award, ChevronRight } from 'lucide-react';
 
const machineList = [
    {
        id: 'cnc-plasma',
        name: 'CNC Plasma & Oxy-fuel Cutting Machine',
        subtitle: 'High Precision Plate Cutting',
        description: 'Equipped with multi-head cutting torches, our CNC plasma cutting machines provide clean, high-speed edges on steel plates up to 100mm thickness with sub-millimeter precision.',
        specs: [
            { label: 'Cutting Width', value: 'Up to 4000 mm' },
            { label: 'Cutting Thickness', value: 'Plasma: 25mm | Oxy-fuel: 100mm' },
            { label: 'Positioning Accuracy', value: '±0.1 mm' }
        ],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'beam-welder',
        name: 'Automatic H-Beam Welding Line',
        subtitle: 'Heavy Structural Member Production',
        description: 'Our automated H-beam production line performs flange-to-web assembly, submerged arc welding (SAW), and flange straightening in a continuous, high-efficiency sequence.',
        specs: [
            { label: 'Max Beam Height', value: '2000 mm' },
            { label: 'Max Flange Width', value: '800 mm' },
            { label: 'Welding Speed', value: 'Up to 1.2 m/min' }
        ],
        image: 'https://images.unsplash.com/photo-1581094794329-cd109c0f8a16?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'shot-blast',
        name: 'Automatic Shot Blasting Machine',
        subtitle: 'SA 2.5 Surface Preparation',
        description: 'Ensures absolute surface cleaning, scale removal, and rust stripping of structural parts prior to painting. Helps achieve maximum paint adhesion and structural longevity.',
        specs: [
            { label: 'Standard Rating', value: 'ISO 8501-1 SA 2.5' },
            { label: 'Pass-through Size', value: '1500 x 2200 mm' },
            { label: 'Turbine Configuration', value: '8 High-speed wheels' }
        ],
        image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'plate-roll',
        name: '4-Roll Hydraulic Plate Bending Machine',
        subtitle: 'Precision Curvature & Rolling',
        description: 'Allows pre-bending and rolling of medium-to-heavy steel plates into cylindrical and conical shapes, essential for pressure vessel fabrication, ducts, and custom structural shells.',
        specs: [
            { label: 'Rolling Capacity', value: 'Up to 45mm Thickness' },
            { label: 'Max Plate Width', value: '3000 mm' },
            { label: 'Drive System', value: 'Electro-hydraulic direct drive' }
        ],
        image: 'https://images.unsplash.com/photo-1565451634789-9a2503258ee0?auto=format&fit=crop&w=600&q=80',
    }
];
 
const capabilities = [
    { icon: Cpu, title: 'Smart Automation', desc: 'Fully programmed CNC control panels minimize human errors and maximize production speed.' },
    { icon: Settings, title: 'High Customization', desc: 'Capable of handling custom heavy-duty components and complex structural parameters.' },
    { icon: Shield, title: 'Quality Standards', desc: 'Meets rigorous international welding and surface preparation protocols (AWS, ISO, SA 2.5).' },
    { icon: Award, title: 'Unmatched Speed', desc: 'High-efficiency continuous automated assembly lines slash lead times for major PEB layouts.' }
];
 
export default function MachinesPage() {
    return (
        <main className="bg-[#eaecf0] min-h-screen pt-36 pb-20 font-secondary text-dark-slate">
            {/* Banner Header */}
            <div className="bg-dark-navy text-white py-20 px-8 relative overflow-hidden mb-16">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-15" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-xs font-bold uppercase tracking-widest block mb-3"
                    >
                        Manufacturing Excellence
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-4xl md:text-6xl font-black font-secondary mb-6 leading-tight"
                    >
                        Our Advanced <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Machinery Park</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed"
                    >
                        Equipped with industry-leading machinery, our plants guarantee structural reliability, millimeter precision, and accelerated production schedules.
                    </motion.p>
                </div>
            </div>
 
            {/* Main Content Grid */}
            <div className="container mx-auto px-4 md:px-16 max-w-7xl">
                {/* Intro Capabilities Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {capabilities.map((cap, i) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary hover:shadow-md transition-all"
                            >
                                <Icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{cap.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
 
                {/* Machinery List */}
                <div className="space-y-20">
                    {machineList.map((machine, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={machine.id}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                                    isEven ? '' : 'lg:flex-row-reverse'
                                }`}
                            >
                                {/* Machine Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full lg:w-1/2 aspect-[3/2] relative overflow-hidden rounded-xl shadow-lg bg-white"
                                >
                                    <Image
                                        src={machine.image}
                                        alt={machine.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </motion.div>
 
                                {/* Machine Details */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-primary font-extrabold text-xs uppercase tracking-widest"
                                    >
                                        {machine.subtitle}
                                    </motion.span>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="text-2xl md:text-3xl font-extrabold tracking-tight"
                                    >
                                        {machine.name}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="text-gray-600 text-sm leading-relaxed"
                                    >
                                        {machine.description}
                                    </motion.p>
 
                                    {/* Tech specs table */}
                                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-150 space-y-4">
                                        <h4 className="text-xs font-black uppercase tracking-wider text-dark-slate border-b pb-2">Technical Specifications</h4>
                                        <div className="space-y-3">
                                            {machine.specs.map((spec) => (
                                                <div key={spec.label} className="flex justify-between text-xs font-semibold">
                                                    <span className="text-gray-500">{spec.label}</span>
                                                    <span className="text-dark-slate font-extrabold">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
 
                {/* CTA Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-dark-navy text-white rounded-2xl p-10 md:p-16 text-center relative overflow-hidden mt-32"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,127,45,0.1),transparent)]" />
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Want to inspect our fabrication capacity?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm mb-8 relative z-10 leading-relaxed">
                        We welcome prospective clients, consultants, and architectural teams to visit our facility and witness live structural trials.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 transition-all"
                        >
                            Schedule Visit
                        </Link>
                        <a
                            href="/structonix-brochure.pdf"
                            download
                            className="border border-white/20 hover:border-white hover:bg-white/10 text-white font-bold uppercase text-xs tracking-widest px-8 py-4 transition-all"
                        >
                            Download Brochure
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
