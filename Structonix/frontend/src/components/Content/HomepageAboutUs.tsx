'use client';

import Link from 'next/link';
import { ArrowUpRight, ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomepageAboutUs() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-12">

                    {/* Top Section: Split Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                        {/* Left Column: Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                                <ChevronsRight className="w-4 h-4" />
                                <span>About Us</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-secondary font-extrabold text-dark-slate leading-[1.1]">
                                We work for you <span className="text-primary">since 1989.</span> <br />
                                Industrial around the world
                            </h2>
                        </motion.div>

                        {/* Right Column: Description & Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8 lg:pt-12"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-dark-slate">
                                Welcome to Industrie, a leading industry innovator with a rich history of excellence.
                            </h3>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                At the heart of the global landscape, the industry stands as a multidimensional force of progress, driving economies and shaping the built environment.
                            </p>

                            {/* Trust Indicators & Signature */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4 border-t border-gray-100">
                                <div className="space-y-2">
                                    <div className="font-handwriting text-3xl text-primary transform -rotate-2">
                                        James Anderson
                                    </div>
                                    <p className="text-xs font-bold text-dark-slate uppercase tracking-wider">CEO & Founder</p>
                                </div>

                                <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-dark-slate transition-all duration-300 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
                                >
                                    Discover More
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                        </motion.div>
                    </div>

                    {/* Bottom Section: Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-sm group"
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-sm">
                            <img
                                src="https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg"
                                alt="Industrial worker welding"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute bottom-0 left-0 bg-white p-8 md:p-10 shadow-2xl z-20 max-w-[280px]">
                            <div className="flex flex-col gap-2">
                                <span className="text-6xl md:text-7xl font-extrabold text-primary leading-none">35+</span>
                                <span className="text-dark-slate font-bold uppercase tracking-wider text-sm md:text-base leading-snug">
                                    Years of Experience in Industry
                                </span>
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8 bg-primary"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
