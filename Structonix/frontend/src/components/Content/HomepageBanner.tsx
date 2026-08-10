'use client';

import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import css files for slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785699707/DJI_0516_ckoi6s.webp',
        subtitle: 'Production & Logistics',
        title: 'Special Industrial',
        highlight: 'Production',
        titleEnd: ' Processes',
        description: 'Delivering unparalleled efficiency and precision across complex industrial manufacturing pipelines. We build the systems that drive global economies forward.',
        cta: 'Explore more',
        link: '/services'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785699778/DJI_0534_lejaf3.webp',
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
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785699777/DJI_0542_psoyfg.webp',
        subtitle: 'Modern Industry',
        title: 'Sustainable',
        highlight: 'Manufacturing',
        titleEnd: ' Systems',
        description: 'State-of-the-art facilities and sustainable practices building the next generation of industrial infrastructure for a greener tomorrow.',
        cta: 'Contact Us',
        link: '/contact'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dpctlwaam/video/upload/v1785701188/NAIK7897_1_tqkjnv.mp4',
        subtitle: 'Comprehensive Services',
        title: 'Engineering & Manufacturing',
        highlight: 'Synergy',
        titleEnd: ' in Every Project',
        description: 'Integrated design, fabrication, and execution services for complex industrial needs. From concept to completion, we deliver excellence.',
        cta: 'Explore Services',
        link: '/services'
    }
];

export function HomepageBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const sliderRef = useRef<Slider | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
        initialSlide: 0,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        cssEase: "cubic-bezier(0.87, 0, 0.13, 1)"
    };

    if (!isMounted) {
        // Render the first slide statically as a fallback to avoid layout shifts and hydration errors
        const firstSlide = slides[0];
        return (
            <section className="relative w-full h-screen min-h-[550px] sm:min-h-[650px] overflow-hidden bg-[#0A0A0A]">
                <div className="relative w-full h-screen min-h-[550px] sm:min-h-[650px] outline-none">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center w-full h-full"
                            style={{
                                backgroundImage: `url(${firstSlide.image})`
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10"></div>
                    </div>
                    <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex items-center">
                        <div className="flex flex-col lg:flex-row w-full gap-12 items-center">
                            <div className="w-full lg:w-10/12 flex flex-col justify-center text-white pt-10">
                                <div>
                                    <div className="overflow-hidden py-1 mb-6">
                                        <div className="flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-primary"></span>
                                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                                                {firstSlide.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-visible py-2 mb-6">
                                        <h1 className="text-3xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.25] font-sans tracking-tight pb-4">
                                            {firstSlide.title} <br />
                                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 pb-3 pr-2">
                                                {firstSlide.highlight}
                                            </span>
                                            {firstSlide.titleEnd}
                                        </h1>
                                    </div>
                                    <div className="overflow-hidden py-1 mb-12">
                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-secondary font-light">
                                            {firstSlide.description}
                                        </p>
                                    </div>
                                    <div className="overflow-hidden py-1">
                                        <Link
                                            href={firstSlide.link}
                                            className="inline-flex items-center gap-6 group"
                                        >
                                            <span className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/30 group-hover:border-primary transition-colors duration-500">
                                                <ArrowRight className="w-5 h-5 text-white group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-500" strokeWidth={1.5} />
                                            </span>
                                            <span className="text-sm font-bold uppercase tracking-[0.15em] relative overflow-hidden group-hover:text-primary transition-colors duration-500">
                                                {firstSlide.cta}
                                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section 
            className="relative w-full h-screen min-h-[550px] sm:min-h-[650px] overflow-hidden bg-[#0A0A0A] group/banner"
        >
            <Slider ref={sliderRef} {...settings} className="h-full banner-slider">
                {slides.map((slide, index) => (
                    <div key={slide.id} className="relative w-full h-screen min-h-[550px] sm:min-h-[650px] outline-none">
                        {/* Background Container with Scale Zoom Effect */}
                        <motion.div
                            animate={{
                                scale: index === currentSlide ? 1.08 : 1
                            }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                            className="absolute inset-0 overflow-hidden"
                        >
                            {slide.image.endsWith('.mp4') || slide.image.includes('/video/') ? (
                                <video
                                    src={slide.image}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 bg-cover bg-center w-full h-full"
                                    style={{
                                        backgroundImage: `url(${slide.image})`
                                    }}
                                />
                            )}
                            {/* Refined elegant subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10"></div>
                        </motion.div>

                        {/* Content Container */}
                        <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex items-center">
                            <div className="flex flex-col lg:flex-row w-full gap-12 items-center">
                                {/* Main Text Content */}
                                <div className="w-full lg:w-10/12 flex flex-col justify-center text-white pt-10">
                                    <AnimatePresence mode="wait">
                                        {index === currentSlide ? (
                                            <motion.div
                                                key={`content-${index}`}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    visible: {
                                                        opacity: 1,
                                                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                                    },
                                                    exit: { opacity: 0, transition: { duration: 0.4 } }
                                                }}
                                            >
                                                {/* Subtitle Mask */}
                                                <div className="overflow-hidden py-1 mb-6">
                                                    <motion.div
                                                        variants={{
                                                            hidden: { opacity: 0, y: 30 },
                                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                                        }}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <span className="w-8 h-[1px] bg-primary"></span>
                                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                                                            {slide.subtitle}
                                                        </span>
                                                    </motion.div>
                                                </div>

                                                {/* Title Mask - overflow-visible to prevent clipping descenders/ascenders */}
                                                <div className="overflow-visible py-2 mb-6">
                                                    <motion.h1
                                                        variants={{
                                                            hidden: { opacity: 0, y: 50 },
                                                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                                                        }}
                                                        className="text-3xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.25] font-sans tracking-tight pb-4"
                                                    >
                                                        {slide.title} <br />
                                                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 pb-3 pr-2">
                                                            {slide.highlight}
                                                        </span>
                                                        {slide.titleEnd}
                                                    </motion.h1>
                                                </div>

                                                {/* Description Mask */}
                                                <div className="overflow-hidden py-1 mb-12">
                                                    <motion.p
                                                        variants={{
                                                            hidden: { opacity: 0, y: 40 },
                                                            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
                                                        }}
                                                        className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-secondary font-light"
                                                    >
                                                        {slide.description}
                                                    </motion.p>
                                                </div>

                                                {/* CTA Mask */}
                                                <div className="overflow-hidden py-1">
                                                    <motion.div
                                                        variants={{
                                                            hidden: { opacity: 0, y: 30 },
                                                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
                                                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                                                            </span>
                                                        </Link>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Slider Navigation Controls (Bottom Right) */}
            <div className="absolute bottom-4 right-4 md:bottom-0 md:right-0 z-30 flex items-stretch bg-white shadow-lg md:shadow-none">
                {/* Current Slide Display */}
                <div className="hidden md:flex items-center justify-center px-10 border-l border-gray-100/50">
                    <span className="text-dark-navy font-bold text-lg font-secondary leading-none">0{currentSlide + 1}</span>
                    <div className="w-10 h-[1px] bg-gray-300 mx-5"></div>
                    <span className="text-gray-400 font-medium text-sm leading-none">0{slides.length}</span>
                </div>

                {/* Previous Arrow */}
                <button
                    className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group border-l border-gray-100 cursor-pointer active:scale-95"
                    onClick={() => sliderRef.current?.slickPrev()}
                    aria-label="Previous Slide"
                >
                    <ArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-dark-slate group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </button>

                {/* Next Arrow */}
                <button
                    className="w-12 h-12 md:w-20 md:h-20 bg-primary flex items-center justify-center hover:bg-[#e06a1c] transition-all duration-300 group cursor-pointer active:scale-95"
                    onClick={() => sliderRef.current?.slickNext()}
                    aria-label="Next Slide"
                >
                    <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </button>
            </div>
        </section>
    );
}
