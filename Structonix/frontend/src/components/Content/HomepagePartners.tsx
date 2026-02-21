'use client';

import { motion } from 'framer-motion';

// Expanded mock data for the grid
const partners = [
    { id: 1, name: 'Tata Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/512px-Tata_logo.svg.png' },
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
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

                {/* Header Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start ">
                        <div className="flex items-start gap-2 mt-3">
                            <span className="text-primary font-bold text-lg leading-none mt-[2px]">»</span>
                            <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase">OUR PARTNERS</span>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-normal text-dark-slate max-w-4xl leading-relaxed">
                                We are proud to work with leading brands that trust Structonix for precision, quality, and timely delivery. Their confidence reflects the value we bring to every project.
                            </h2>
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
                            className="bg-white border-r border-b border-gray-200 aspect-[3/2] flex items-center justify-center p-6 md:p-8 group cursor-pointer transition-colors duration-300 hover:bg-gray-50/50"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-12 md:max-h-16 w-auto max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out 
                                {/* Fallback styles in case some logos don't load or are weirdly sized */}
                                "
                            />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
