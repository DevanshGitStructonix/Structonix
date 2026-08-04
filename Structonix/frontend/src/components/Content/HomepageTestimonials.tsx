"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Quote, ArrowLeft, ArrowRight, ChevronsRight, Building2, User, Landmark } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
    id: number;
    type: 'person' | 'company';
    author: string;
    companyName?: string;
    logo?: string;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        type: 'company',
        author: "Liladhar Pasoo Group",
        content: "We entrusted them with the development of our large-scale manufacturing facility, and the results have exceeded our expectations in every aspect. Their technical expertise, combined with a disciplined project management approach, ensured that the entire process was seamless and well-coordinated. From structural design optimization to execution, they demonstrated a deep understanding of both engineering and practical site challenges. The attention given to detailing, finishing, and overall structural integrity is clearly visible in the completed building. What impressed us most was their commitment to delivering not just a structure, but a long-term asset. The facility stands as a perfect blend of durability, efficiency, and clean industrial aesthetics. Their professionalism and reliability make them a trusted partner for any organization looking to invest in high-quality PEB infrastructure."
    },
    {
        id: 2,
        type: 'company',
        author: "Global Realty Group",
        content: "We have had the opportunity to work with this PEB manufacturer on multiple projects over the years, and their consistency in delivering high-quality results is truly commendable. Each project reflects their strong technical foundation, attention to detail, and commitment to excellence. Their team is highly professional, responsive, and well-organized, ensuring that every stage of the project is executed smoothly. They have always demonstrated a proactive approach in addressing challenges and providing effective solutions without delays. The structures delivered are not only robust and efficient but also carry a clean, modern industrial appeal. This level of reliability and quality has made them our preferred partner for PEB projects. We confidently recommend them to anyone seeking a dependable and experienced team."
    },
    {
        id: 3,
        type: 'person',
        author: "Mr. Bhavesh Shah",
        companyName: "Private Developer",
        content: "Our experience with this PEB manufacturer has been exceptional from start to finish. From the initial design consultation to the final execution, every stage of the project was handled with remarkable professionalism and attention to detail. What truly stood out was their ability to understand our operational requirements and translate them into a highly efficient and aesthetically refined structure. The quality of materials, precision in fabrication, and on-site coordination were all executed to the highest standards. The project was delivered within the committed timeline, without any compromise on quality or safety. Their team maintained clear communication throughout, ensuring transparency and confidence at every step. The finished facility not only meets our functional needs but also reflects a modern, premium industrial presence. We are extremely satisfied with the outcome and would confidently recommend their services to organizations seeking reliable and high-quality PEB solutions."
    },
    {
        id: 4,
        type: 'company',
        author: "Aditya Birla Group",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Aditya_Birla_Group_Logo.svg/500px-Aditya_Birla_Group_Logo.svg.png",
        content: "Partnering with this team for our commercial PEB project has been a highly rewarding experience. Their approach reflects a rare combination of technical precision and refined execution, which is not commonly found in the industry. They took the time to understand our vision and delivered a structure that aligns perfectly with our brand image and operational needs. The entire process—from planning and approvals to fabrication and installation—was managed with exceptional clarity and efficiency. The final outcome speaks for itself: a structurally sound, visually impressive building delivered on time and within scope. Their commitment to quality and client satisfaction is evident in every aspect of their work. We truly value their expertise and look forward to collaborating with them on future projects."
    }
];

export const HomepageTestimonials = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [expandedIds, setExpandedIds] = useState<number[]>([]);

    const toggleExpand = (id: number) => {
        setExpandedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstCard = container.firstElementChild as HTMLElement;
            const gap = container.clientWidth >= 768 ? 32 : 24; // gap-8 on desktop, gap-6 on mobile
            const cardWidth = firstCard ? firstCard.offsetWidth + gap : container.clientWidth;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full py-20 lg:py-32 bg-dark-navy overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(254,127,45,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.02),transparent_40%)] pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 px-6 md:px-12 lg:px-24">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                            <ChevronsRight className="w-4.5 h-4.5" />
                            <span>Testimonials</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-secondary tracking-tight">
                            What Clients Say <br /> About <span className="text-primary">Structonix</span>
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 md:gap-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory items-start px-6 md:px-12 lg:px-24"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial) => {
                        const isExpanded = expandedIds.includes(testimonial.id);
                        const displayContent = isExpanded 
                            ? testimonial.content 
                            : `${testimonial.content.slice(0, 180)}...`;

                        return (
                            <motion.div
                                layout
                                key={testimonial.id}
                                className="bg-dark-slate p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 w-[85vw] sm:w-[420px] md:w-[480px] lg:w-[540px] flex-shrink-0 border border-white/5 hover:border-primary/30 group snap-start relative flex flex-col justify-between"
                            >
                                {/* Accent Glow Top Border on Hover */}
                                <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full" />

                                <div className="relative">
                                    {/* Large Elegant Quote Icon */}
                                    <div className="absolute -top-4 -left-4 text-white/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                                        <Quote className="w-16 h-16 fill-current transform scale-x-[-1]" />
                                    </div>

                                    {/* Content Area with smooth height transition */}
                                    <motion.div layout className="relative z-10 pl-6 pt-4">
                                        <p className="text-white/80 text-sm sm:text-base leading-relaxed font-medium italic">
                                            &quot;{displayContent}&quot;
                                        </p>
                                        <button
                                            onClick={() => toggleExpand(testimonial.id)}
                                            className="text-primary hover:text-primary/80 font-bold text-xs md:text-sm tracking-wider uppercase mt-4 block cursor-pointer transition-colors duration-200"
                                        >
                                            {isExpanded ? "Show Less" : "Read Full Review"}
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Footer: Client Logo or Avatar */}
                                <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-8">
                                    <div className="flex items-center gap-4">
                                        {/* Dynamic Icon / Logo representation */}
                                        <div className="w-12 h-12 rounded-lg bg-dark-navy flex items-center justify-center border border-white/10 shrink-0 relative overflow-hidden">
                                            {testimonial.logo ? (
                                                <Image 
                                                    src={testimonial.logo} 
                                                    alt={testimonial.author} 
                                                    fill 
                                                    className="object-contain p-2 filter brightness-0 invert opacity-80"
                                                    unoptimized
                                                />
                                            ) : testimonial.type === 'person' ? (
                                                <User className="w-6 h-6 text-primary" />
                                            ) : testimonial.author.includes("Pasoo") ? (
                                                <Landmark className="w-6 h-6 text-primary" />
                                            ) : (
                                                <Building2 className="w-6 h-6 text-primary" />
                                            )}
                                        </div>

                                        <div>
                                            <span className="font-extrabold text-primary/80 uppercase tracking-widest text-[10px] md:text-xs font-secondary block mb-0.5">
                                                {testimonial.type === 'person' ? "Client Representative" : "Client Partner"}
                                            </span>
                                            <h4 className="font-bold text-white text-sm md:text-base font-secondary">
                                                {testimonial.type === 'person' 
                                                    ? `${testimonial.author} (${testimonial.companyName})` 
                                                    : testimonial.author
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                    <Quote className="w-8 h-8 text-white/5 group-hover:text-primary/10 transition-colors fill-current transform scale-x-[-1]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
