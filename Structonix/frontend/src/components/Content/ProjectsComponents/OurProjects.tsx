"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
    Search, 
    Filter, 
    X, 
    MapPin, 
    Layers, 
    Activity, 
    CheckCircle2, 
    Building2,
    HardHat
} from 'lucide-react';
import { projectsData, ProjectSpec } from './projectsData';

export function OurProjects() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedStatus, setSelectedStatus] = useState<string>('All');
    const [activeProject, setActiveProject] = useState<ProjectSpec | null>(null);

    // Categories list derived dynamically
    const categories = ['All', 'Warehouse', 'Factory & Process Plant', 'Infrastructure & Multistory'];
    
    // Statuses list derived dynamically
    const statuses = useMemo(() => {
        const unique = new Set(projectsData.map(p => p.status));
        return ['All', ...Array.from(unique)];
    }, []);

    // Filter projects based on query, category, and status
    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesSearch = 
                project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.code.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
            
            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [searchQuery, selectedCategory, selectedStatus]);

    // Dynamic metrics calculation
    const metrics = useMemo(() => {
        let totalTonnage = 0;
        let totalAreaSqft = 0;
        let handoveredCount = 0;

        projectsData.forEach(p => {
            if (p.tonnage) totalTonnage += p.tonnage;
            if (p.areaSqft) totalAreaSqft += p.areaSqft;
            if (p.status.includes('Handovered')) handoveredCount++;
        });

        return {
            tonnage: Math.round(totalTonnage).toLocaleString(),
            area: Math.round(totalAreaSqft).toLocaleString(),
            completed: handoveredCount
        };
    }, []);

    return (
        <section className="py-16 bg-gray-50 min-h-screen text-dark-slate">
            <div className="container mx-auto px-4 md:px-12 lg:px-24">
                
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Project Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-secondary text-dark-navy leading-none tracking-tight">
                        OUR PROJECTS
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base font-secondary max-w-2xl mt-4">
                        Explore our comprehensive record of heavy structural fabrications, pre-engineered warehouses, process plants, and high-rise multistory steel frameworks.
                    </p>
                </div>

                {/* Metrics Summary Banner */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 flex items-center gap-5 shadow-sm">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                            <Activity className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Total Fabricated Tonnage</span>
                            <div className="text-2xl md:text-3xl font-black font-secondary text-dark-navy mt-1">{metrics.tonnage} MT+</div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 flex items-center gap-5 shadow-sm">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                            <Layers className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Total Constructed Footprint</span>
                            <div className="text-2xl md:text-3xl font-black font-secondary text-dark-navy mt-1">{metrics.area} Sqft+</div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 flex items-center gap-5 shadow-sm">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Projects Handed Over</span>
                            <div className="text-2xl md:text-3xl font-black font-secondary text-dark-navy mt-1">{metrics.completed} Sites</div>
                        </div>
                    </div>
                </div>

                {/* Filter Controls Panel */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        
                        {/* Search Input (5 Columns) */}
                        <div className="lg:col-span-5 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by client or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 focus:border-primary rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        {/* Status Dropdown (3 Columns) */}
                        <div className="lg:col-span-3 relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Filter className="w-4 h-4" />
                            </div>
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer text-gray-700 font-medium transition-colors"
                            >
                                <option value="All">All Project Statuses</option>
                                {statuses.filter(s => s !== 'All').map(status => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>

                        {/* Category Selector Links (4 Columns) */}
                        <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                        selectedCategory === cat
                                            ? 'bg-primary text-white shadow-md'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                    }`}
                                >
                                    {cat === 'All' ? 'All' : cat.split(' ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.02 }}
                                key={project.id}
                                onClick={() => setActiveProject(project)}
                                className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-[400px]"
                            >
                                {/* Project Image Container */}
                                <div className="h-[220px] relative overflow-hidden shrink-0 bg-dark-navy">
                                    {project.image.includes('DJI_0532_fvkw9a.webp') ? (
                                        /* Architectural Blueprint Fallback */
                                        <div 
                                            className="absolute inset-0 bg-gradient-to-br from-[#0c0f1d] to-[#1a1f38] flex flex-col items-center justify-center p-6"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                                                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                                                `,
                                                backgroundSize: '24px 24px'
                                            }}
                                        >
                                            <div className="absolute w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
                                            <div className="relative p-3 rounded-xl bg-white/[0.02] border border-white/10 shadow-inner mb-2">
                                                <Building2 className="w-6 h-6 text-primary/70" />
                                            </div>
                                            <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-full relative z-10">
                                                Site Photo Pending
                                            </span>
                                        </div>
                                    ) : (
                                        <Image
                                            src={project.image}
                                            alt={project.client}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            unoptimized
                                        />
                                    )}

                                    {/* Status Badge */}
                                    <div className={`absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg text-white shadow-md ${
                                        project.status.includes('Handovered') ? 'bg-green-600' : 'bg-primary'
                                     }`}>
                                        {project.status.split(' ')[0]}
                                    </div>
                                </div>

                                {/* Project Text & Stats Preview */}
                                <div className="p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        {/* Location */}
                                        <div className="flex items-center gap-1 text-gray-400 mb-2">
                                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                                            <span className="text-xs font-medium truncate max-w-[200px]">{project.location}</span>
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-dark-navy leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                            {project.client}
                                        </h3>
                                    </div>

                                    {/* Bottom Mini Specs Preview */}
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Tonnage</span>
                                            <span className="text-xs font-bold text-dark-navy">
                                                {project.tonnage ? `${project.tonnage.toFixed(1)} MT` : '—'}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Structure</span>
                                            <span className="text-xs font-bold text-dark-navy truncate max-w-[120px]">{project.buildingType}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8"
                    >
                        <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-dark-navy">No Projects Found</h3>
                        <p className="text-gray-400 text-sm mt-1 max-w-md mx-auto">
                            We couldn't find any projects matching "{searchQuery}" under the selected filters. Please adjust your query.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Slide-out Technical Spec Drawer Modal */}
            <AnimatePresence>
                {activeProject && (
                    <>
                        {/* Overlay Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                            className="fixed inset-0 bg-black z-50 cursor-pointer"
                        />

                        {/* Slide-out Drawer Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-dark-slate z-50 shadow-2xl overflow-y-auto text-white"
                        >
                            {/* Drawer Header image overlay */}
                            <div className="h-[240px] relative bg-dark-navy overflow-hidden">
                                {activeProject.image.includes('DJI_0532_fvkw9a.webp') ? (
                                    /* Architectural Blueprint Fallback */
                                    <div 
                                        className="absolute inset-0 bg-gradient-to-br from-[#0c0f1d] to-[#1a1f38] flex flex-col items-center justify-center p-6"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                                                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                                            `,
                                            backgroundSize: '24px 24px'
                                        }}
                                    >
                                        <div className="absolute w-40 h-40 bg-primary/15 rounded-full blur-2xl" />
                                        <div className="relative p-3.5 rounded-xl bg-white/[0.02] border border-white/10 shadow-inner mb-3">
                                            <Building2 className="w-8 h-8 text-primary/70" />
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest bg-white/[0.04] border border-white/5 px-3 py-1 rounded-full relative z-10">
                                            Site Photo Pending
                                        </span>
                                    </div>
                                ) : (
                                    <Image
                                        src={activeProject.image}
                                        alt={activeProject.client}
                                        fill
                                        className="object-cover opacity-80"
                                        unoptimized
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-dark-slate via-dark-slate/20 to-black/40" />
                                
                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>

                                {/* Project Basic Details Overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-primary text-[10px] font-extrabold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                                        Project Spec Sheet
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-black font-secondary leading-tight mt-3 text-white">
                                        {activeProject.client}
                                    </h2>
                                </div>
                            </div>

                            {/* Drawer Specs Table Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <HardHat className="w-5 h-5 text-primary" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Technical Details</h3>
                                </div>

                                <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">


                                    <div className="grid grid-cols-2 border-b border-white/5 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Structure Type</span>
                                        <span className="font-bold text-white text-right">{activeProject.buildingType}</span>
                                    </div>

                                    <div className="grid grid-cols-2 border-b border-white/5 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Tonnage (MT)</span>
                                        <span className="font-bold text-primary text-right">
                                            {activeProject.tonnage ? `${activeProject.tonnage.toLocaleString()} MT` : '—'}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 border-b border-white/5 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Clear Height</span>
                                        <span className="font-bold text-white text-right">
                                            {activeProject.height ? `${activeProject.height} meters` : '—'}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 border-b border-white/5 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Total Area</span>
                                        <span className="font-bold text-white text-right">
                                            {activeProject.areaSqft ? `${activeProject.areaSqft.toLocaleString()} sqft` : '—'}
                                            {activeProject.areaSqm ? ` (${activeProject.areaSqm.toLocaleString()} sqm)` : ''}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 border-b border-white/5 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Steel Consumption Ratio</span>
                                        <span className="font-bold text-white text-right">
                                            {activeProject.kgPerSqft ? `${activeProject.kgPerSqft} Kg/sqft` : '—'}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 border-b border-white/5 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Site Location</span>
                                        <span className="font-bold text-white text-right">{activeProject.location}</span>
                                    </div>

                                    <div className="grid grid-cols-2 p-4 text-sm hover:bg-white/[0.01] transition-colors">
                                        <span className="text-gray-400 font-medium">Execution Status</span>
                                        <span className="font-bold text-green-400 text-right">{activeProject.status}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest py-4 mt-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                >
                                    Close Spec Sheet
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
