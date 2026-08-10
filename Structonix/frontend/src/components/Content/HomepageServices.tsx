'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 'design-engineering',
        label: 'Design & Engineering',
        title: 'Premium Structural Engineering & Detailing',
        description: 'Complete design solutions using state-of-the-art modeling software. We construct high-accuracy blueprints, structural analysis, and detailing before fabrication.',
        points: [
            '3D CAD & Tekla Modeling',
            'Structural Optimization',
            'Engineering Feasibility Studies'
        ],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
        link: '/services/design-engineering'
    },
    {
        id: 'primary-steel-structure-manufacturing',
        label: 'Primary Steel Structure Manufacturing',
        title: 'Heavy Industrial Primary Frame Fabrication',
        description: 'Precision manufacturing of built-up sections, columns, and rafter systems engineered to support high-tensile forces and primary structural loads.',
        points: [
            'Heavy Built-up Sections',
            'Rafters & Columns Fabrication',
            'High-Tensile Load Durability'
        ],
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785704882/Primary-Steel-Structure_xa68xr.gif',
        link: '/services/primary-steel-structure-manufacturing'
    },
    {
        id: 'secondary-steel-structure-manufacturing',
        label: 'Secondary Steel Structure Manufacturing',
        title: 'Framing Supports & Secondary Members',
        description: 'Manufacturing and detailing of structural secondary elements like purlins, girts, eave struts, and bracings critical for layout integrity.',
        points: [
            'Eave Struts & Side Girts',
            'Bracing Systems & Gusses',
            'Precision Pre-Punched Holes'
        ],
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785704409/Steel_frame_structure_k0v326.webp',
        link: '/services/secondary-steel-structure-manufacturing'
    },
    {
        id: 'warehousing',
        label: 'Warehousing',
        title: 'Turnkey Warehouse Construction Solutions',
        description: 'Creating large-span industrial warehouse buildings engineered for heavy storage, automated inventory logistics, and commercial distribution.',
        points: [
            'Large Clear Span Design',
            'High-Load Ground Panels',
            'Insulated Storage Configurations'
        ],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        link: '/services/warehousing'
    },
    {
        id: 'roofing-and-cladding-systems',
        label: 'Roofing and Cladding Systems',
        title: 'Weatherproof Protective Insulated Shells',
        description: 'Premium single-skin profile sheets and sandwich panels offering ultimate thermal insulation, leakproof joints, and modern facade finishes.',
        points: [
            'Insulated Sandwich Panels',
            'Standing Seam Roof Sheets',
            'Corrosion-Resistant Coatings'
        ],
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785704406/images_utytsf.webp',
        link: '/services/roofing-and-cladding-systems'
    },
    {
        id: 'cz-purlin-and-downspout-pipe',
        label: 'C/Z Purlin and Downspout Pipe',
        title: 'Cold-Formed Sections & Water Drainage',
        description: 'Cold-roll formed C & Z purlins providing lightweight yet heavy-duty support for roof cladding, complemented by rain downspout drainage pipes.',
        points: [
            'Roll-Formed C & Z Sections',
            'Galvanized Corrosion Resistance',
            'Rainwater Downspouts & Gutters'
        ],
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1785704405/images_1_vzi3kh.webp',
        link: '/services/cz-purlin-and-downspout-pipe'
    },
    {
        id: 'turnkey-industrial-projects',
        label: 'Turnkey Industrial Projects',
        title: 'Full-Scale End-to-End Industrial Execution',
        description: 'Comprehensive project management covering design, raw material manufacturing, delivery logistics, and safe, fast-track on-site erection.',
        points: [
            'Concept-to-Execution Ownership',
            'Rigorous Site Safety Protocols',
            'On-Schedule Turnkey Delivery'
        ],
        image: 'https://res.cloudinary.com/dpctlwaam/image/upload/v1786395394/DJI_0513_fg1lw1.jpg',
        link: '/services/turnkey-industrial-projects'
    }
];

const workProcess = [
    {
        id: '01',
        title: "Planning & Engineering",
        description: "We understand the client’s requirements, develop optimized structural designs, prepare detailed drawings, and finalize the project scope with complete technical clarity.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        )
    },
    {
        id: '02',
        title: "Precision Manufacturing & Dispatch",
        description: "Using advanced manufacturing processes and strict quality control, we fabricate primary and secondary structures with a strong focus on accuracy, durability, and timely delivery.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
        )
    },
    {
        id: '03',
        title: "Erection & Project Handover",
        description: "Our execution team ensures smooth on-site erection, safe installation, and timely completion, delivering a fully functional structure ready for operations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 22h18M5 22V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18M9 18h6M9 14h6M9 10h6M9 6h6" />
            </svg>
        )
    }
];

export function HomepageServices() {
    const [activeTab, setActiveTab] = useState(services[0].id);
    const activeService = services.find(s => s.id === activeTab) || services[0];

    return (
        <section className="py-20 md:py-32 bg-[#F8F9FA] overflow-hidden">
            <div className="container mx-auto px-4">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                            <ChevronsRight className="w-4 h-4" />
                            <span>Services</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-slate leading-tight">
                            Comprehensive Turnkey <br /> Construction Solutions
                        </h2>
                    </div>
                    <div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 text-dark-slate font-bold uppercase text-sm hover:bg-dark-slate hover:text-white transition-colors duration-300"
                        >
                            View All Solutions
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* --- TABS SECTION --- */}
                <div className="flex flex-col lg:flex-row gap-8 mb-32 items-stretch">

                    {/* Sidebar Tabs */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-2">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                onMouseEnter={() => setActiveTab(service.id)}
                                className={`flex items-center justify-between p-4 text-left font-bold text-lg transition-all duration-300 border-l-4 cursor-pointer ${activeTab === service.id
                                    ? 'bg-primary text-white border-primary shadow-lg' // Active State
                                    : 'bg-white text-gray-500 border-transparent hover:bg-gray-100 hover:text-dark-slate' // Inactive State
                                    }`}
                            >
                                {service.label}
                                {activeTab === service.id ? <ArrowRight className="w-5 h-5" /> : null}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-8 lg:gap-16 items-stretch">
                        {/* Image */}
                        <motion.div
                            key={`img-${activeTab}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full md:w-1/2 min-h-[300px] md:min-h-[450px] md:h-auto relative rounded-sm overflow-hidden self-stretch"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary transform translate-x-12 -translate-y-12 rotate-45 z-10 hidden md:block"></div>
                            <Image
                                src={activeService.image}
                                alt={activeService.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            key={`text-${activeTab}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full md:w-1/2 flex flex-col justify-center space-y-6"
                        >
                            <h3 className="text-3xl font-bold text-dark-slate leading-tight">
                                {activeService.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {activeService.description}
                            </p>

                            <ul className="space-y-4 pt-2">
                                {activeService.points.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3 text-dark-slate font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={activeService.link}
                                className="inline-flex items-center gap-2 text-dark-slate font-bold underline decoration-2 decoration-primary underline-offset-4 hover:text-primary transition-colors mt-4"
                            >
                                Read More
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* --- WORK PROCESS SECTION --- */}
                <div className="relative pt-0 pb-20">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">How We Work</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-dark-slate tracking-tight">Our 3-Step Execution Workflow</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[45px] left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-gray-200 -z-10"></div>
                        {/* Connector Line (Mobile) */}
                        <div className="block md:hidden absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-gray-200 -z-10"></div>

                        {workProcess.map((step) => (
                            <div key={step.id} className="relative group">
                                {/* Number Badge */}
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white border-4 border-[#F8F9FA] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-dark-slate shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(254,127,45,0.4)] transition-all duration-500 mb-6 md:mb-8 relative z-10">
                                    {step.id}
                               </div>

                                {/* Content Card */}
                                <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100/80 group-hover:border-primary/20 group-hover:shadow-[0_20px_50px_rgba(254,127,45,0.12)] group-hover:-translate-y-2 transition-all duration-500 text-center h-full flex flex-col items-center">
                                    <div className="mb-4 p-3.5 rounded-full bg-orange-50/80 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-dark-slate mb-3">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                    
                                    {/* Interactive expanding line */}
                                    <div className="w-8 h-[2px] bg-gray-200 group-hover:w-16 group-hover:bg-primary transition-all duration-500 mt-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
