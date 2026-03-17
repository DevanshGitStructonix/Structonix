'use client';

import { motion } from 'framer-motion';

// Expanded mock data for the grid
const partners = [
    { id: 1, name: 'Tata Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/330px-Tata_logo.svg.png' },
    { id: 2, name: 'Aditya Birla Group', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Aditya_Birla_Group_Logo.svg/500px-Aditya_Birla_Group_Logo.svg.png' },
    { id: 3, name: 'Adani Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adani_logo_2012.svg/500px-Adani_logo_2012.svg.png' },
    { id: 4, name: 'Reliance Industries', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Reliance_Industries.svg/500px-Reliance_Industries.svg.png' },
    { id: 5, name: 'Mahindra Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mahindra_logo.svg/500px-Mahindra_logo.svg.png' },
    { id: 6, name: 'Larsen & Toubro', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/330px-Larsen%26Toubro_logo.svg.png' },
    { id: 7, name: 'JSW Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/JSW_Group_logo.svg/500px-JSW_Group_logo.svg.png' },
    { id: 8, name: 'Godrej Group', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Godrej_Enterprises_Group.svg/500px-Godrej_Enterprises_Group.svg.png' },
    { id: 9, name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/500px-Siemens-logo.svg.png' },
    { id: 10, name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/500px-Bosch-logo.svg.png' },
    { id: 11, name: 'General Electric', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/500px-General_Electric_logo.svg.png' },
    { id: 12, name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/500px-ABB_logo.svg.png' },
    { id: 13, name: 'Caterpillar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Caterpillar_logo.svg/500px-Caterpillar_logo.svg.png' },
    { id: 14, name: 'Komatsu', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Komatsu_company_logos.svg/500px-Komatsu_company_logos.svg.png' },
    { id: 15, name: 'Hitachi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Hitachi_2025_logo.svg/500px-Hitachi_2025_logo.svg.png' },
];

export function HomepagePartners() {
    return (
        <section className="py-20 md:py-28 bg-[#f8f9fa] relative overflow-hidden border-t border-gray-100">
            {/* Background watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex justify-center z-0">
                <span className="text-[28vw] md:text-[18vw] font-black whitespace-nowrap text-dark-slate leading-none">TRUSTED</span>
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

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
                                {/* Decorative quote mark */}
                                <span className="absolute -top-2 right-6 text-6xl text-gray-100 font-serif leading-none opacity-50">"</span>
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
                                    <span className="block text-4xl md:text-5xl font-bold text-dark-slate mb-1">50<span className="text-primary">+</span></span>
                                    <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Global Brands</span>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                                <div className="col-span-1">
                                    <span className="block text-4xl md:text-5xl font-bold text-dark-slate mb-1">100<span className="text-primary">%</span></span>
                                    <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Commitment</span>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                                <div className="col-span-2 md:col-span-1 md:block">
                                    <span className="block text-4xl md:text-5xl font-bold text-dark-slate mb-1">20<span className="text-primary">+</span></span>
                                    <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Years Trust</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </motion.div>

                {/* Partners Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-l border-t border-gray-200"
                >
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-white border-r border-b border-gray-200 aspect-[3/2] flex items-center justify-center p-6 md:p-8 group cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-0 hover:z-10"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-12 md:max-h-16 w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
