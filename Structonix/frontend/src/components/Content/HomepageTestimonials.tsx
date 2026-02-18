"use client";

import React, { useRef } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, ChevronsRight } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Joshua Sendu",
        role: "Engineer",
        company: "Adira Finance",
        content: "More-or-less normal distribution of letters, as opposed to using content making it look like readable english.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 2,
        name: "Bm Ashik Toren",
        role: "Ceo",
        company: "Adira Finance",
        content: "At the heart of the global landscape, the industry stands as a multidimensional force of progress driving.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 3,
        name: "Sarrita Sane",
        role: "Ceo",
        company: "Adira Finance",
        content: "At the heart of the global landscape, the industry stands as a multidimensional force of progress driving.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 4,
        name: "Michael Chen",
        role: "Operations Manager",
        company: "TechBuild Systems",
        content: "The structural integrity analysis provided was absolutely top-notch. It gave us the confidence to proceed with our expansion.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
        id: 5,
        name: "Sarah Jenkins",
        role: "Project Director",
        company: "ConstructCo",
        content: "Professional, reliable, and incredibly detailed. The team at Industrie really knows their stuff when it comes to industrial compliance.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    },
];

export const HomepageTestimonials = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -500 : 500;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full py-20 lg:py-32 bg-[#F8F9FA] overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                            <ChevronsRight className="w-4 h-4" />
                            <span>Testimonials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-slate leading-tight">
                            What people say about <br /> Industrie company
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full border border-gray-200 bg-white text-dark-slate hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full border border-gray-200 bg-white text-dark-slate hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-10  shadow-sm hover:shadow-xl transition-all duration-300 w-[400px] md:w-[500px] flex-shrink-0 border border-gray-100 group snap-start"
                        >
                            {/* Header: User & Logo */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex gap-5">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-slate text-xl">{testimonial.name}</h4>
                                        <p className="text-base text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="font-bold text-gray-300 uppercase tracking-widest text-sm">Adira</span>
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed min-h-[90px]">
                                "{testimonial.content}"
                            </p>

                            {/* Footer: Rating & Quote */}
                            <div className="flex justify-between items-end border-t border-gray-100 pt-8">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'fill-primary text-primary' : (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) ? 'fill-primary text-primary opacity-50' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <Quote className="w-12 h-12 text-gray-100 group-hover:text-primary/10 transition-colors fill-current transform scale-x-[-1]" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
