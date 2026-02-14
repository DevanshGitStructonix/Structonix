'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
    return (
        <section className="bg-dark-gray py-20 text-white">
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
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
                                Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish. Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
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
                                Threadsail wrymouth goosefish goldeye harelip sucker panga pearlfish lampfish moonfish remora dottyback sábalo convict cichlid. Northern pike Kafue pike Rainbowfish, sábalo mola spaghetti eel swordtail Quillfish. Ratfish whiting nurse shark regal whiptail catfish.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
