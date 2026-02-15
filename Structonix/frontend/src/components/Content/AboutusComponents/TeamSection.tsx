'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

const teamMembers = [
    {
        name: 'John Maxwell',
        role: 'CEO Industrium',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder: Industrial worker 1
    },
    {
        name: 'Helen Barton',
        role: 'Head of production',
        image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800', // Placeholder: Industrial worker 2
    },
    // Add more if needed, design shows 2 cards + stats block
];

export function TeamSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block"
                    >
                        Our Team
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black font-secondary text-dark-gray max-w-3xl mx-auto leading-tight"
                    >
                        We have assembled the best team to work with you
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="relative w-full aspect-[7/5] mb-6 overflow-hidden bg-gray-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                                    />
                                    {/* Share Button Overlay */}
                                    <div className="absolute bottom-0 right-0">
                                        <button className="bg-primary text-white w-12 h-12 flex items-center justify-center hover:bg-dark-gray transition-colors duration-300">
                                            <Share2 size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full text-left pl-2">
                                    <p className="text-primary text-xs uppercase font-bold tracking-wider mb-2">{member.role}</p>
                                    <h3 className="text-2xl font-bold font-secondary text-dark-gray">{member.name}</h3>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                    {/* Stats Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col justify-center lg:pl-12 h-full"
                    >
                        <div className="mb-4">
                            <h3 className="text-[8rem] leading-[0.8] font-black font-secondary text-white"
                                style={{ WebkitTextStroke: '1px #F4991A' }}>
                                500+
                            </h3>
                        </div>
                        <h4 className="text-2xl font-bold font-secondary text-dark-gray mb-8 leading-tight max-w-[250px]">
                            Awesome team member in Industrium Co
                        </h4>

                        <Link
                            href="/team"
                            className="inline-flex items-center text-primary text-xs font-bold uppercase tracking-wider hover:text-dark-gray transition-colors group w-fit"
                        >
                            <span className="border-b-2 border-primary pb-1 group-hover:border-dark-gray transition-colors">More about team</span>
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform rotate-45">↓</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
