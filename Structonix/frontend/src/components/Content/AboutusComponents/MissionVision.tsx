'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
    return (
        <section id="mission-vision" className="scroll-mt-[200px] bg-dark-gray py-20 text-white">
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-dark-slate p-8 md:p-12 rounded-lg border-l-4 border-primary relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Background Icon Watermark */}
                        <Eye className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5 group-hover:text-white/10 transition-colors duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/20 rounded-full">
                                    <Eye className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white font-primary">
                                    Vision
                                </h3>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed font-secondary">
                                To become the most trusted global engineering and manufacturing partner in the industrial infrastructure sector, recognized for our commitment to safety, architectural innovation, technical precision, and client success. We envision a future where our advanced prefabricated steel structures and structural reinforcement solutions empower industries to scale safely and efficiently, setting new global benchmarks for durability, modern design aesthetics, and environmental sustainability.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-dark-slate p-8 md:p-12 rounded-lg border-l-4 border-primary relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Background Icon Watermark */}
                        <Target className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5 group-hover:text-white/10 transition-colors duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/20 rounded-full">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white font-primary">
                                    Mission
                                </h3>
                            </div>

                             <p className="text-gray-300 text-sm leading-relaxed font-secondary">
                                Our mission is to redefine structural resilience through engineering excellence and technical innovation. We are dedicated to extending the lifespan of the built environment by providing specialized retrofitting, strengthening, and waterproofing solutions that prioritize safety and durability. By combining advanced materials with precision craftsmanship, we aim to be the most trusted partner in protecting architectural assets, ensuring every structure we touch remains a safe and sustainable foundation for the future.
                             </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
