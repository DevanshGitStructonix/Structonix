'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const partners = [
    { id: 1, name: 'Client 1', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396762/Screenshot_2026-08-11_at_2.48.42_AM_xsgx0y.png' },
    { id: 2, name: 'Client 2', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396761/Screenshot_2026-08-11_at_2.48.35_AM_ngrksf.png' },
    { id: 3, name: 'Client 3', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396761/Screenshot_2026-08-11_at_2.48.26_AM_aw8twu.png' },
    { id: 4, name: 'Client 4', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396760/Screenshot_2026-08-11_at_2.48.17_AM_zohg0q.png' },
    { id: 5, name: 'Client 5', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396759/Screenshot_2026-08-11_at_2.48.07_AM_t5hwxs.png' },
    { id: 6, name: 'Client 6', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396758/Screenshot_2026-08-11_at_2.47.57_AM_sinycc.png' },
    { id: 7, name: 'Client 7', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396758/Screenshot_2026-08-11_at_2.47.48_AM_fzhah4.png' },
    { id: 8, name: 'Client 8', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396758/Screenshot_2026-08-11_at_2.47.41_AM_ggimrs.png' },
    { id: 9, name: 'Client 9', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786397038/Screenshot_2026-08-11_at_2.53.26_AM_jignvh.png' },
    { id: 10, name: 'Client 10', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396756/Screenshot_2026-08-11_at_2.47.00_AM_rp83pw.png' },
    { id: 11, name: 'Client 11', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396756/Screenshot_2026-08-11_at_2.47.09_AM_s3ke7q.png' },
    { id: 12, name: 'Client 12', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396756/Screenshot_2026-08-11_at_2.47.23_AM_ltvnqw.png' },
    { id: 13, name: 'Client 13', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396754/Screenshot_2026-08-11_at_2.46.49_AM_rskayx.png' },
    { id: 14, name: 'Client 14', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396754/Screenshot_2026-08-11_at_2.46.41_AM_znpsce.png' },
    { id: 15, name: 'Client 15', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396753/Screenshot_2026-08-11_at_2.46.30_AM_vktemt.png' },
    { id: 16, name: 'Client 16', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396753/Screenshot_2026-08-11_at_2.45.51_AM_wopggw.png' },
    { id: 17, name: 'Client 17', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786396753/Screenshot_2026-08-11_at_2.46.17_AM_fb0c56.png' },
    { id: 18, name: 'Torrent Pharma', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785873910/Torrent-Pharma-logo_x9rul9.png' },
    { id: 19, name: 'Client 19', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785873907/logo_hdoaoi.png' },
    { id: 20, name: 'Keystone', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785873905/key-white_ib3slc.png' },
    { id: 21, name: 'Birla Estates', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785873901/birla-estates_oyrkr3.svg' },
    { id: 22, name: 'Client 22', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785873901/images_1_sarzap.jpg' },
    { id: 23, name: 'Orbittal Electromech', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786532251/orbittal_electromech_engg_projects_pvt_ltd_logo_uqu19w.jpg' },
    { id: 24, name: 'Reliance Industries', logo: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786532251/Reliance_Industries_jlkdcr.svg' }
];

// Split partners into two rows for dynamic opposite scroll animations
const halfLength = Math.ceil(partners.length / 2);
const row1 = partners.slice(0, halfLength);
const row2 = partners.slice(halfLength);

const duplicatedRow1 = [...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2];

interface HomepagePartnersProps {
    isClientsPage?: boolean;
}

export function HomepagePartners({ isClientsPage = false }: HomepagePartnersProps) {
    if (isClientsPage) {
        return (
            <section className="py-20 md:py-28 bg-[#f8f9fa] relative overflow-hidden border-t border-gray-100">
                {/* Background watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex justify-center z-0">
                    <span className="text-[28vw] md:text-[18vw] font-black whitespace-nowrap text-dark-slate leading-none">TRUSTED</span>
                </div>

                <div className="container mx-auto px-4 lg:px-8 max-w-[1500px] relative z-10">
                    {/* Header Sequence */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-20"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
                            {/* Left Column: Title & Highlight Box */}
                            <div className="flex flex-col gap-8 lg:w-1/3">
                                <div className="flex items-start gap-2">
                                    <span className="text-primary font-bold text-lg leading-none mt-[2px]">»</span>
                                    <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase">OUR PARTNERS</span>
                                </div>

                                <div className="bg-white p-6 md:p-8 border-l-4 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                                    <span className="absolute -top-2 right-6 text-6xl text-gray-100 font-serif leading-none opacity-50">&quot;</span>
                                    <p className="text-dark-slate font-semibold text-lg md:text-xl mb-3 relative z-10">Building lasting relationships.</p>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed relative z-10">
                                        Our network of partners ensures we have the best resources, materials, and expertise to meet even the most demanding project requirements.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Main Text & Stats */}
                            <div className="flex flex-col justify-between items-start gap-10 lg:w-2/3 lg:pt-2">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-dark-slate leading-snug">
                                    We are proud to work with leading brands that trust <span className="font-semibold text-primary">Structonix</span> for precision, quality, and timely delivery. Their confidence reflects the value we bring to every project.
                                </h2>

                                <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:flex-row md:items-center md:gap-16 pt-6 border-t border-gray-200 w-full">
                                    <div className="col-span-1">
                                        <span className="block text-4xl md:text-5xl font-bold text-dark-slate mb-1">25<span className="text-primary">+</span></span>
                                        <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Global Brands</span>
                                    </div>
                                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                                    <div className="col-span-1">
                                        <span className="block text-4xl md:text-5xl font-bold text-dark-slate mb-1">100<span className="text-primary">%</span></span>
                                        <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Commitment</span>
                                    </div>
                                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                                    <div className="col-span-2 md:col-span-1 md:block">
                                        <span className="block text-4xl md:text-5xl font-bold text-dark-slate mb-1">10<span className="text-primary">+</span></span>
                                        <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Years Trust</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Original Partners Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-gray-200"
                    >
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="bg-white border-r border-b border-gray-200 aspect-[16/10] flex items-center justify-center p-8 md:p-10 group cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] relative z-0 hover:z-10 overflow-hidden animate-none"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-110 p-6 md:p-8"
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 md:py-32 bg-[#f8f9fa] relative overflow-hidden border-t border-gray-100">
            {/* Inject self-contained marquee CSS */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    display: flex;
                    width: max-content;
                    animation: marqueeLeft 35s linear infinite;
                }
                .animate-marquee-right {
                    display: flex;
                    width: max-content;
                    animation: marqueeRight 35s linear infinite;
                }
                .animate-marquee-left:hover, .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}} />

            {/* Background watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none flex justify-center z-0">
                <span className="text-[28vw] md:text-[18vw] font-black whitespace-nowrap text-dark-slate leading-none">TRUSTED</span>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1500px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                    
                    {/* Left Column (42% Width): Text Content & View All Clients Button */}
                    <div className="w-full lg:w-[42%] flex flex-col items-start gap-8">
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-bold text-lg leading-none mt-[2px]">»</span>
                            <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase">OUR CLIENTS</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-dark-slate leading-tight font-secondary tracking-tight">
                            Trusted by Industry Leaders & Global Brands
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                            We are proud to collaborate with premium brands that trust <span className="font-semibold text-primary">Structonix</span> for precision, quality, and timely delivery. Our commitment to excellence reflects the value we bring to every project.
                        </p>

                        <div className="flex flex-wrap gap-8 items-center pt-6 border-t border-gray-200 w-full">
                            <div>
                                <span className="block text-3xl font-bold text-dark-slate">25+</span>
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Brands</span>
                            </div>
                            <div className="w-px h-8 bg-gray-200"></div>
                            <div>
                                <span className="block text-3xl font-bold text-dark-slate">100%</span>
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Commitment</span>
                            </div>
                            <div className="w-px h-8 bg-gray-200"></div>
                            <div>
                                <span className="block text-3xl font-bold text-dark-slate">10+</span>
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Years of Trust</span>
                            </div>
                        </div>

                        <a
                            href="/clients"
                            className="bg-primary hover:bg-dark-slate text-white px-8 py-4 font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer shadow-md hover:shadow-lg mt-4"
                        >
                            View All Clients
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </a>
                    </div>

                    {/* Right Column (58% Width): Double-Row Marquee Carousel */}
                    <div className="w-full lg:w-[58%] relative overflow-hidden py-6 flex flex-col gap-8 bg-[#fafafa]/50 border border-gray-100 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                        {/* Elegant edge fading overlays */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

                        {/* Row 1: Scrolls Left (Full Color & Big Logos) */}
                        <div className="overflow-hidden w-full">
                            <div className="animate-marquee-left gap-6 items-center">
                                {duplicatedRow1.map((partner, index) => (
                                    <div
                                        key={`row1-${partner.id}-${index}`}
                                        className="flex-shrink-0 w-52 sm:w-56 md:w-60 h-28 sm:h-32 md:h-36 bg-white border border-gray-150 rounded-2xl flex items-center justify-center p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-primary/20 relative"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain p-1"
                                                sizes="(max-width: 768px) 200px, 240px"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Scrolls Right (Full Color & Big Logos) */}
                        <div className="overflow-hidden w-full">
                            <div className="animate-marquee-right gap-6 items-center">
                                {duplicatedRow2.map((partner, index) => (
                                    <div
                                        key={`row2-${partner.id}-${index}`}
                                        className="flex-shrink-0 w-52 sm:w-56 md:w-60 h-28 sm:h-32 md:h-36 bg-white border border-gray-150 rounded-2xl flex items-center justify-center p-5 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-primary/20 relative"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain p-1"
                                                sizes="(max-width: 768px) 200px, 240px"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
