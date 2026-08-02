'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState<'loading' | 'flash' | 'done'>('loading');

    // Simulate progress bar count-up
    useEffect(() => {
        if (phase !== 'loading') return;

        let start = 0;
        const duration = 2800; // Count-up over 2.8 seconds
        const intervalTime = 30;
        const totalSteps = duration / intervalTime;
        const stepIncrement = 100 / totalSteps;

        const timer = setInterval(() => {
            start += stepIncrement;
            if (start >= 100) {
                setProgress(100);
                clearInterval(timer);
                setTimeout(() => {
                    setPhase('flash');
                }, 400);
            } else {
                setProgress(Math.floor(start));
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [phase]);

    // Handle phase transitions
    useEffect(() => {
        if (phase === 'flash') {
            const timer = setTimeout(() => {
                setPhase('done');
                setTimeout(onComplete, 1000); // Allow exit animations to complete
            }, 2600);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete]);

    // Vault Door Quadrant Variants
    const tlVariants = {
        initial: { x: 0, y: 0 },
        exit: { 
            x: '-100%', 
            y: '-100%', 
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const } 
        }
    };

    const trVariants = {
        initial: { x: 0, y: 0 },
        exit: { 
            x: '100%', 
            y: '-100%', 
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const } 
        }
    };

    const blVariants = {
        initial: { x: 0, y: 0 },
        exit: { 
            x: '-100%', 
            y: '100%', 
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const } 
        }
    };

    const brVariants = {
        initial: { x: 0, y: 0 },
        exit: { 
            x: '100%', 
            y: '100%', 
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] as const } 
        }
    };

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <div className="fixed inset-0 z-[9999] overflow-hidden select-none">
                    {/* Quadrant 1: Top Left */}
                    <motion.div
                        variants={tlVariants}
                        initial="initial"
                        exit="exit"
                        className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0B192C] border-r border-b border-white/5 overflow-hidden"
                    >
                        {/* Blueprint lines */}
                        <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
                            <motion.path
                                d="M0 50h1000M150 0v1000M0 0l500 500M200 400l100-100"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                            />
                        </svg>
                    </motion.div>

                    {/* Quadrant 2: Top Right */}
                    <motion.div
                        variants={trVariants}
                        initial="initial"
                        exit="exit"
                        className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#0B192C] border-l border-b border-white/5 overflow-hidden"
                    >
                        {/* Blueprint lines */}
                        <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
                            <motion.path
                                d="M0 150h1000M350 0v1000M800 0L400 400"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                            />
                        </svg>
                    </motion.div>

                    {/* Quadrant 3: Bottom Left */}
                    <motion.div
                        variants={blVariants}
                        initial="initial"
                        exit="exit"
                        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#0B192C] border-r border-t border-white/5 overflow-hidden"
                    >
                        {/* Blueprint lines */}
                        <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
                            <motion.path
                                d="M0 350h1000M550 0v1000M0 500l500-500"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                            />
                        </svg>
                    </motion.div>

                    {/* Quadrant 4: Bottom Right */}
                    <motion.div
                        variants={brVariants}
                        initial="initial"
                        exit="exit"
                        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#0B192C] border-l border-t border-white/5 overflow-hidden"
                    >
                        {/* Blueprint lines */}
                        <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
                            <motion.path
                                d="M0 250h1000M750 0v1000M1000 500L500 0"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.8, ease: 'easeInOut' }}
                            />
                        </svg>
                    </motion.div>

                    {/* Background Grid */}
                    <motion.div 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-[0.03] pointer-events-none z-10"
                    >
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div key={i} className="border border-white/30" />
                        ))}
                    </motion.div>

                    {/* Center Content Container */}
                    <motion.div 
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6"
                    >
                        {/* Phase 1: Drawing Factory */}
                        {phase === 'loading' && (
                            <motion.div
                                key="loading-stage"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center w-full max-w-4xl"
                            >
                                {/* SVG PEB Blueprint */}
                                <svg 
                                    viewBox="0 0 500 250" 
                                    className="w-80 h-40 md:w-[480px] md:h-[240px] text-primary mb-8"
                                    fill="none" 
                                    stroke="currentColor"
                                >
                                    {/* Ground Line */}
                                    <motion.line 
                                        x1="10" y1="220" x2="490" y2="220" 
                                        strokeWidth="4" strokeLinecap="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 0.8, ease: 'easeOut' }} 
                                    />

                                    {/* Silo 1 */}
                                    <motion.path 
                                        d="M 35 220 L 35 90 A 20 20 0 0 1 75 90 L 75 220" 
                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.4, delay: 0.2, ease: 'easeInOut' }} 
                                    />
                                    <motion.line 
                                        x1="35" y1="125" x2="75" y2="125" 
                                        strokeWidth="1.5" strokeDasharray="3 3"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 0.6, delay: 0.8 }} 
                                    />
                                    <motion.line 
                                        x1="35" y1="165" x2="75" y2="165" 
                                        strokeWidth="1.5" strokeDasharray="3 3"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 0.6, delay: 1.0 }} 
                                    />

                                    {/* Silo 2 */}
                                    <motion.path 
                                        d="M 90 220 L 90 115 A 15 15 0 0 1 120 115 L 120 220" 
                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }} 
                                    />

                                    {/* Silo Connecting Pipes */}
                                    <motion.path 
                                        d="M 75 145 L 90 145 M 120 155 L 135 155 L 135 220" 
                                        strokeWidth="2" strokeLinecap="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 0.8, delay: 1.1 }} 
                                    />

                                    {/* Main Sawtooth Factory Building */}
                                    <motion.path 
                                        d="M 135 220 L 135 110 L 180 75 L 180 110 L 225 75 L 225 110 L 270 75 L 270 220" 
                                        strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 2.0, delay: 0.3, ease: 'easeInOut' }} 
                                    />

                                    {/* Glass Panel Highlights */}
                                    <motion.line x1="155" y1="90" x2="170" y2="90" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.1 }} />
                                    <motion.line x1="200" y1="90" x2="215" y2="90" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.3 }} />
                                    <motion.line x1="245" y1="90" x2="260" y2="90" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.5 }} />

                                    {/* Loading Bay Shutter Door */}
                                    <motion.rect 
                                        x="180" y="160" width="55" height="60" rx="3" 
                                        strokeWidth="2.5"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.2, delay: 0.9 }} 
                                    />
                                    <motion.line x1="180" y1="172" x2="235" y2="172" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.3 }} />
                                    <motion.line x1="180" y1="184" x2="235" y2="184" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.4 }} />
                                    <motion.line x1="180" y1="196" x2="235" y2="196" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.5 }} />
                                    <motion.line x1="180" y1="208" x2="235" y2="208" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.6 }} />

                                    {/* Chimney Stack */}
                                    <motion.path 
                                        d="M 295 220 L 315 50 L 340 50 L 360 220" 
                                        strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.7, delay: 0.5, ease: 'easeInOut' }} 
                                    />
                                    <motion.line x1="312" y1="75" x2="343" y2="75" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.3 }} />
                                    <motion.line x1="306" y1="120" x2="349" y2="120" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.5 }} />
                                    <motion.line x1="300" y1="170" x2="355" y2="170" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.7 }} />

                                    {/* Smoke Puffs */}
                                    <motion.path 
                                        d="M 327 40 C 320 20 340 15 335 5 C 350 5 355 20 345 30" 
                                        strokeWidth="2" strokeLinecap="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.2, delay: 1.9 }} 
                                    />

                                    {/* Warehouse Frame */}
                                    <motion.path 
                                        d="M 360 220 L 360 120 L 420 80 L 480 120 L 480 220" 
                                        strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 2.0, delay: 0.7, ease: 'easeInOut' }} 
                                    />

                                    {/* Truss Bracings */}
                                    <motion.path 
                                        d="M 360 120 L 480 120 M 360 120 L 420 80 M 480 120 L 420 80" 
                                        strokeWidth="1.5" strokeDasharray="4 4"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.4, delay: 1.3 }} 
                                    />
                                    <motion.path 
                                        d="M 360 170 L 420 170 M 420 170 L 480 170" 
                                        strokeWidth="1.5" strokeOpacity="0.4"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.2, delay: 1.5 }} 
                                    />
                                    <motion.line 
                                        x1="420" y1="220" x2="420" y2="80" 
                                        strokeWidth="1.5" strokeOpacity="0.3"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.2, delay: 1.6 }} 
                                    />

                                    {/* Window */}
                                    <motion.rect 
                                        x="435" y="140" width="28" height="40" rx="2" 
                                        strokeWidth="1.8"
                                        initial={{ pathLength: 0 }} 
                                        animate={{ pathLength: 1 }} 
                                        transition={{ duration: 1.0, delay: 1.7 }} 
                                    />
                                    <motion.line x1="435" y1="160" x2="463" y2="160" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.9 }} />
                                    <motion.line x1="449" y1="140" x2="449" y2="180" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.9 }} />
                                </svg>

                                {/* Loading Bar */}
                                <div className="w-64 md:w-96 flex flex-col items-center">
                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
                                        <motion.div
                                            className="h-full bg-primary"
                                            style={{ width: `${progress}%` }}
                                            transition={{ ease: 'easeOut' }}
                                        />
                                    </div>
                                    <div className="flex justify-between w-full mt-3 text-white/50 font-secondary text-[11px] font-bold tracking-widest uppercase">
                                        <span>STRUCTURAL LOAD</span>
                                        <span className="text-white font-bold">{progress}%</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Phase 2: Logo Reveal */}
                        {phase === 'flash' && (
                            <motion.div
                                key="logo-stage"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center"
                            >
                                {/* Logo container */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                                    className="relative w-full max-w-4xl h-24 md:h-32"
                                >
                                    <Image
                                        src="/images/structonix-logo-white.png"
                                        alt="Structonix Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>

                                {/* Orange Horizon Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "240px" }}
                                    transition={{ delay: 0.4, duration: 1.0, ease: 'easeOut' }}
                                    className="h-1 bg-primary mt-2 mb-3 rounded-full"
                                />

                                {/* Tagline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                                    className="text-white/80 text-xs md:text-sm font-bold tracking-[0.45em] uppercase text-center select-none"
                                >
                                    Engineering Tomorrow's <span className="text-primary font-bold">Horizon</span>
                                </motion.p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
