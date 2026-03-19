'use client';

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowRight, Play, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import css files for slick-carousel (must be imported here or in global css)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1773749195/big-storehouse-with-construction-materials-inside-wholesale_1_itctad.webp',
        subtitle: 'Production & Logistics',
        title: 'Special Industrial',
        highlight: 'Production',
        titleEnd: ' Processes',
        description: 'Delivering unparalleled efficiency and precision across complex industrial manufacturing pipelines. We build the systems that drive global economies forward.',
        cta: 'Explore more',
        link: '/products-and-services'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1662218934109-eba4e22a6f3f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        subtitle: 'Engineering Excellence',
        title: 'Innovative Engineering',
        highlight: 'Solutions',
        titleEnd: ' For The Future',
        description: 'Providing top-tier construction and engineering solutions for large-scale industrial projects with uncompromising precision and excellence.',
        cta: 'View Projects',
        link: '/projects'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1722842895153-ba7bf9d53dfb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        subtitle: 'Modern Industry',
        title: 'Sustainable',
        highlight: 'Manufacturing',
        titleEnd: ' Systems',
        description: 'State-of-the-art facilities and sustainable practices building the next generation of industrial infrastructure for a greener tomorrow.',
        cta: 'Contact Us',
        link: '/contact'
    }
];

export function HomepageBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        cssEase: "cubic-bezier(0.87, 0, 0.13, 1)" // Elegant easing
    };

    return (
        <section className="relative w-full h-[calc(100vh-8rem)] min-h-[650px] overflow-hidden bg-[#0A0A0A] group/banner">
            <Slider ref={sliderRef} {...settings} className="h-full banner-slider">
                {slides.map((slide, index) => (
                    <div key={slide.id} className="relative w-full h-[calc(100vh-8rem)] min-h-[650px] outline-none">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: index === currentSlide ? 'scale(1.08)' : 'scale(1)'
                            }}
                        >
                            {/* Refined elegant subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex items-center">
                            <div className="flex flex-col lg:flex-row w-full gap-12 items-center">
                                {/* Main Text Content */}
                                <div className="w-full lg:w-8/12 flex flex-col justify-center text-white pt-10">
                                    <AnimatePresence mode="wait">
                                        {index === currentSlide && (
                                            <motion.div
                                                key={`content-${index}`}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    visible: {
                                                        opacity: 1,
                                                        transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                                                    },
                                                    exit: { opacity: 0, transition: { duration: 0.4 } }
                                                }}
                                            >
                                                {/* Sophisticated Subtitle */}
                                                <motion.div
                                                    variants={{
                                                        hidden: { opacity: 0, y: 15 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                                    }}
                                                    className="flex items-center gap-4 mb-6"
                                                >
                                                    <span className="w-8 h-[1px] bg-primary"></span>
                                                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                                                        {slide.subtitle}
                                                    </span>
                                                </motion.div>

                                                <motion.h1
                                                    variants={{
                                                        hidden: { opacity: 0, y: 20 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                                                    }}
                                                    className="text-5xl md:text-8xl lg:text-[76px] font-extrabold leading-[1.05] mb-8 font-sans tracking-tight"
                                                >
                                                    {slide.title} <br />
                                                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                                        {slide.highlight}
                                                    </span>
                                                    {slide.titleEnd}
                                                </motion.h1>

                                                <motion.p
                                                    variants={{
                                                        hidden: { opacity: 0, y: 20 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                                                    }}
                                                    className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-secondary font-light"
                                                >
                                                    {slide.description}
                                                </motion.p>

                                                <motion.div
                                                    variants={{
                                                        hidden: { opacity: 0, y: 20 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                                                    }}
                                                >
                                                    <Link
                                                        href={slide.link}
                                                        className="inline-flex items-center gap-6 group"
                                                    >
                                                        <span className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/30 group-hover:border-primary transition-colors duration-500">
                                                            <ArrowRight className="w-5 h-5 text-white group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-500" strokeWidth={1.5} />
                                                        </span>
                                                        <span className="text-sm font-bold uppercase tracking-[0.15em] relative overflow-hidden group-hover:text-primary transition-colors duration-500">
                                                            {slide.cta}
                                                            {/* Line reveal on hover */}
                                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                                                        </span>
                                                    </Link>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Play Button Area - Thinner, more elegant */}
                                <div className="w-full lg:w-4/12 flex items-center justify-start lg:justify-end">
                                    <AnimatePresence mode="wait">
                                        {index === currentSlide && (
                                            <motion.button
                                                key={`play-${index}`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 1, ease: "easeOut" } }}
                                                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                                                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[0.5px] border-white/20 flex items-center justify-center group relative cursor-pointer"
                                                aria-label="Play Video"
                                            >
                                                {/* Subtle glowing ring behind */}
                                                <div className="absolute inset-0 rounded-full border border-white/10 scale-110 group-hover:scale-125 transition-transform duration-700 opacity-50 group-hover:opacity-0"></div>
                                                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500"></div>
                                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-transparent stroke-[1] ml-1 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                            </motion.button>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Elegant Slider Navigation Controls (Bottom Right) */}
            <div className="absolute bottom-0 right-0 z-30 flex items-stretch bg-white">
                {/* Current Slide Display */}
                <div className="hidden md:flex items-center justify-center px-10 border-l border-gray-100/50">
                    <span className="text-dark-navy font-bold text-lg font-secondary leading-none">0{currentSlide + 1}</span>
                    <div className="w-10 h-[1px] bg-gray-300 mx-5"></div>
                    <span className="text-gray-400 font-medium text-sm leading-none">0{slides.length}</span>
                </div>

                {/* Previous Arrow */}
                <button
                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:bg-gray-50 transition-colors group border-l border-gray-100 cursor-pointer"
                    onClick={() => sliderRef.current?.slickPrev()}
                    aria-label="Previous Slide"
                >
                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-dark-slate group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </button>

                {/* Next Arrow */}
                <button
                    className="w-16 h-16 md:w-20 md:h-20 bg-primary flex items-center justify-center hover:bg-[#d68515] transition-colors group cursor-pointer"
                    onClick={() => sliderRef.current?.slickNext()}
                    aria-label="Next Slide"
                >
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </button>
            </div>

        </section>
    );
}
