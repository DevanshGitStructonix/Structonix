'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Hammer, Layers, ShieldCheck, Ruler, Construction, Box } from 'lucide-react';

const innovations = [
    {
        id: '01',
        title: 'Steel Decking',
        description: 'High-tensile galvanized steel profile providing superior structural capability and composite functionality.',
        icon: <Layers className="w-6 h-6" />,
        color: '#e99a25ff', // Steel Blue/Grey
    },
    {
        id: '02',
        title: 'Reinforcement Grid',
        description: 'Precision-welded wire mesh ensuring optimal tensile strength and crack control.',
        icon: <Ruler className="w-6 h-6" />,
        color: '#F4991A', // Orange Highlight
    },
    {
        id: '03',
        title: 'Concrete Composite',
        description: 'High-grade concrete topping integrated with the deck for maximum load-bearing efficiency.',
        icon: <Box className="w-6 h-6" />,
        color: '#e99a25ff', // Concrete Grey
    },
];

export function HomepageStructuralInnovation() {
    return (
        <section className="relative py-24 bg-[#121C22] overflow-hidden text-white min-h-screen flex items-center">
            {/* Dynamic Background with Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,_#F4991A_0%,_transparent_45%)] blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 md:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#F4991A] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                                <Construction className="w-4 h-4" /> Innovation Lab
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-secondary leading-tight mb-8">
                                Composite <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4991A] to-[#FCD34D]">
                                    Floor Systems.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                                Advanced floor decking solutions.
                                Integrating profiled steel sheeting with reinforced concrete for lighter, stronger, and faster structural floors.
                            </p>

                            <div className="space-y-6">
                                {innovations.map((item, index) => (
                                    <InnovationItem key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Full Crane Visualization */}
                    <div className="order-1 lg:order-2 h-[400px] lg:h-[550px] flex items-end justify-center [perspective:1200px] relative pb-8">
                        <InteractiveCraneScene />
                    </div>

                </div>
            </div>
        </section>
    );
}

function InnovationItem({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group flex gap-5 items-start p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-default"
        >
            <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#1F2937] text-[${item.color}] group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div style={{ color: item.color }}>{item.icon}</div>
            </div>
            <div>
                <h3 className="text-lg font-bold font-secondary mb-1 text-white group-hover:text-[#F4991A] transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {item.description}
                </p>
            </div>
        </motion.div>
    )
}

function InteractiveCraneScene() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

    // Panel Tilt (Reduced tilt for decking to keep perspective clear)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    // Jib/Trolley Movement (Parallax)
    const trolleyX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full h-full flex flex-col justify-end items-center cursor-pointer"
        >
            {/* --- Crane Structure (SVG) --- */}
            <div className="absolute top-0 w-full h-full pointer-events-none z-0">
                <svg viewBox="0 0 400 500" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="craneGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FCD34D" />
                            <stop offset="100%" stopColor="#F4991A" />
                        </linearGradient>
                    </defs>

                    {/* Tower Mast */}
                    <g transform="translate(280, 50) scale(0.9)">
                        <path d="M0 0 L0 450 L40 450 L40 0" fill="none" stroke="#F4991A" strokeWidth="2" />
                        <path d="M0 0 L40 40 M0 40 L40 80 M0 80 L40 120 M0 120 L40 160 M0 160 L40 200 M0 200 L40 240 M0 240 L40 280 M0 280 L40 320 M0 320 L40 360 M0 360 L40 400 M0 400 L40 440" stroke="#F4991A" strokeWidth="1" opacity="0.6" />
                        <path d="M40 0 L0 40 M40 40 L0 80 M40 80 L0 120 M40 120 L0 160 M40 160 L0 200 M40 200 L0 240 M40 240 L0 280 M40 280 L0 320 M40 320 L0 360 M40 360 L0 400 M40 400 L0 440" stroke="#F4991A" strokeWidth="1" opacity="0.6" />
                    </g>

                    {/* Jib (Horizontal Arm) */}
                    <g transform="translate(50, 50) scale(0.9)">
                        <rect x="0" y="0" width="300" height="20" fill="url(#craneGradient)" />
                        <path d="M0 0 L20 -20 L40 0 L60 -20 L80 0 L100 -20 L120 0 L140 -20 L160 0 L180 -20 L200 0 L220 -20 L230 0" fill="none" stroke="#F4991A" strokeWidth="1" />
                        <line x1="0" y1="-20" x2="230" y2="-20" stroke="#F4991A" strokeWidth="2" />
                        <g transform="translate(230, 0)">
                            <rect x="0" y="0" width="80" height="20" fill="#B45309" />
                            <rect x="40" y="-10" width="30" height="40" fill="#505050" />
                        </g>
                        <g transform="translate(230, 20)">
                            <rect x="-10" y="0" width="30" height="25" fill="#303030" rx="2" />
                            <rect x="-5" y="5" width="20" height="15" fill="#87CEEB" opacity="0.4" />
                        </g>
                    </g>

                    <motion.g animate={{ x: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.1">
                        <path d="M50 80 Q65 60 80 80 T110 80" fill="none" stroke="white" strokeWidth="2" />
                    </motion.g>
                </svg>
            </div>

            {/* --- Trolley & Hook & DECKING (Interactive Layer) --- */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 md:left-[25%] md:translate-x-0 z-20 flex flex-col items-center">
                {/* Trolley */}
                <motion.div
                    style={{ x: trolleyX }}
                    className="flex flex-col items-center"
                >
                    <div className="w-8 h-5 bg-gray-700 rounded-sm mb-0 relative">
                        <div className="absolute -top-1 left-1 w-1.5 h-1.5 bg-gray-500 rounded-full" />
                        <div className="absolute -top-1 right-1 w-1.5 h-1.5 bg-gray-500 rounded-full" />
                    </div>

                    <div className="w-[2px] h-24 bg-gray-400 origin-top" />

                    <div className="w-6 h-6 bg-yellow-500 rounded border border-yellow-300 flex items-center justify-center shadow-md z-10">
                        <div className="text-black font-bold text-[10px]">20t</div>
                    </div>

                    {/* 4-Chain Sling for wide decking */}
                    <div className="relative mt-0">
                        <div className="absolute top-0 left-0 w-[1px] h-12 bg-gray-400 origin-top rotate-[25deg] translate-x-3" />
                        <div className="absolute top-0 left-0 w-[1px] h-12 bg-gray-400 origin-top rotate-[-25deg] -translate-x-3" />
                        <div className="absolute top-0 left-0 w-[1px] h-12 bg-gray-400 origin-top rotate-[10deg] translate-x-1" />
                        <div className="absolute top-0 left-0 w-[1px] h-12 bg-gray-400 origin-top rotate-[-10deg] -translate-x-1" />
                    </div>
                </motion.div>
            </div>

            {/* Interactive Flooring Decking (Suspended below) */}
            <motion.div
                style={{ rotateX, rotateY, x: trolleyX, transformStyle: "preserve-3d" }}
                className="relative mt-8 md:mt-6 md:mr-48 w-[280px] h-[180px] md:w-[320px] md:h-[220px] z-30"
            >
                {/* Shadow on 'Ground' */}
                <div
                    className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/60 blur-xl rounded-[100%] transition-opacity duration-300 group-hover:opacity-40"
                    style={{ transform: "rotateX(60deg) translateZ(-200px)" }}
                />

                {/* --- LAYERS --- */}

                {/* Layer 1: Corrugated Steel Decking (Bottom) */}
                <motion.div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:translate-z-[-50px]"
                    style={{ transform: "translateZ(-10px)" }}
                >
                    <DeckingSheet color="#546E7A" shine />
                </motion.div>

                {/* Layer 2: Reinforcement Mesh (Middle) */}
                <motion.div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:translate-z-[30px] group-hover:-translate-y-4"
                    style={{ transform: "translateZ(10px)" }}
                >
                    <RebarMesh color="#F4991A" />
                </motion.div>

                {/* Layer 3: Concrete Slab (Top) */}
                <motion.div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:translate-z-[100px] group-hover:-translate-y-8"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <ConcreteSlab />
                </motion.div>

            </motion.div>
        </div>
    );
}

// Visual for Corrugated Steel Decking
function DeckingSheet({ color, shine }: any) {
    return (
        <div
            className="w-full h-full relative"
            style={{
                background: color,
                // Simulate corrugated profile using repeating heavy gradients
                backgroundImage: `repeating-linear-gradient(90deg, 
                    transparent 0px, 
                    transparent 20px, 
                    rgba(0,0,0,0.3) 20px, 
                    rgba(0,0,0,0.3) 40px
                )`
            }}
        >
            <div className="absolute inset-0 border-2 border-gray-400/30" />
            {/* Edge detail */}
            <div className="absolute top-0 right-0 h-full w-2 bg-black/30 origin-right transform rotate-y-90 translate-x-full"
                style={{ transform: "rotateY(90deg) translateX(100%)" }}
            />
            <div className="absolute bottom-0 left-0 w-full h-2 bg-black/40 origin-bottom transform rotate-x-90 translate-y-full"
                style={{ transform: "rotateX(-90deg) translateY(100%)" }}
            />

            {shine && <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />}
        </div>
    )
}

// Visual for Rebar Mesh
function RebarMesh({ color }: any) {
    return (
        <div className="w-full h-full border-4 border-[#F4991A] relative shadow-xl bg-black/10 backdrop-blur-[1px]">
            {/* Grid Pattern */}
            <div className="w-full h-full"
                style={{
                    backgroundImage: `
                        linear-gradient(${color} 2px, transparent 2px),
                        linear-gradient(90deg, ${color} 2px, transparent 2px)
                      `,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    )
}

// Visual for Concrete Slab
function ConcreteSlab() {
    return (
        <div className="w-full h-full bg-[#e99a25ff] relative shadow-2xl border border-white/20">
            {/* Concrete Texture */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Branding */}
            <div className="absolute bottom-4 right-4 flex flex-col items-end opacity-80">
                <span className="text-white font-bold font-secondary text-2xl tracking-tight">STRUCTONIX<sup>®</sup></span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Floor Systems</span>
            </div>

            {/* Thickness / Sides */}
            <div className="absolute top-0 right-0 h-full w-4 bg-[#757575] origin-right transform rotate-y-90 translate-x-full"
                style={{ transform: "rotateY(90deg) translateX(50%)" }}
            />
            <div className="absolute bottom-0 left-0 w-full h-4 bg-[#616161] origin-bottom transform rotate-x-90 translate-y-full"
                style={{ transform: "rotateX(-90deg) translateY(50%)" }}
            />
        </div>
    )
}
