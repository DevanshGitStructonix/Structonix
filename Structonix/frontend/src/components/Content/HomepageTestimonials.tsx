"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Samuel Smith",
        role: "CEO",
        company: "Atlant",
        content:
            "Structonix delivered exceptional structural integrity assessment for our high-rise project. Their attention to detail and industrial expertise ensured we met all safety standards without delay.",
    },
    {
        id: 2,
        name: "Arlene McCoy",
        role: "Chief Engineer",
        company: "Industrial Systems Inc.",
        content:
            "The precision and reliability Structonix brings to the table are unmatched. Their innovative approach to structural challenges saved us significant time and resources on our latest factory expansion.",
    },
    {
        id: 3,
        name: "Cameron Williamson",
        role: "Director of Operations",
        company: "LogiTech Warehousing",
        content:
            "We needed a partner who understood the heavy-duty nature of our operations. Structonix provided robust solutions that have stood the test of time. Highly recommended for industrial projects.",
    },
];

export const HomepageTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000); // Auto-advance every 8 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-stretch min-h-[400px]">

                    {/* Left Side: Image & Stats (approx 33% - col-span-4) */}
                    <div className="lg:col-span-4 relative min-h-[250px] lg:min-h-full w-full group">
                        <div
                            className="absolute inset-0 bg-cover bg-center w-full h-full z-0 transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: "url('https://images.pexels.com/photos/12951627/pexels-photo-12951627.jpeg')",
                            }}
                        >
                            <div className="absolute inset-0 bg-[var(--color-dark-navy)]/80"></div>
                        </div>

                        {/* Content Over Image - To fill the "empty" feeling */}
                        <div className="relative z-10 h-full flex flex-col justify-center p-6 lg:p-8 text-white space-y-4 lg:space-y-8">
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">250+</h3>
                                <p className="text-xs lg:text-sm uppercase tracking-wider text-gray-300 mt-1">Projects Completed</p>
                            </div>
                            <div className="w-12 h-[1px] bg-white/20"></div>
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">100%</h3>
                                <p className="text-xs lg:text-sm uppercase tracking-wider text-gray-300 mt-1">Client Satisfaction</p>
                            </div>
                            <div className="w-12 h-[1px] bg-white/20"></div>
                            <div>
                                <div className="flex space-x-1 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                                    ))}
                                </div>
                                <p className="text-xs lg:text-sm uppercase tracking-wider text-gray-300">Rated 5 Stars</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Testimonials Content (approx 67% - col-span-8) */}
                    <div className="lg:col-span-8 relative z-20 bg-[#F5F7FA]">
                        <div className="p-8 md:p-12 lg:px-16 lg:py-12 h-full flex flex-col justify-between relative">

                            <div>
                                <Quote className="w-12 h-12 text-[var(--color-primary)] mb-6 opacity-100 fill-[var(--color-primary)]" />

                                <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-dark-navy)] mb-6 leading-tight">
                                    What people say about <span className="text-[var(--color-primary)]">Structonix</span>
                                </h2>

                                <div className="relative overflow-hidden min-h-[100px] mb-6">
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-gray-600 text-base md:text-lg leading-relaxed italic"
                                        >
                                            "{testimonials[currentIndex].content}"
                                        </motion.p>
                                    </AnimatePresence>
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <p className="text-[var(--color-dark-navy)] font-bold text-base">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                                            <span className="text-[var(--color-primary)] font-bold">{testimonials[currentIndex].company}</span> / {testimonials[currentIndex].role}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Orange Pagination Box - Bottom Left of the Content area */}
                            <div className="absolute bottom-0 right-0 w-24 h-16 bg-[var(--color-primary)] flex items-center justify-center space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? "w-2 h-2 bg-white"
                                            : "w-2 h-2 bg-white/40 hover:bg-white/80"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
