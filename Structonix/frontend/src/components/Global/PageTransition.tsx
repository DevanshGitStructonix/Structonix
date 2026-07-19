"use client";
 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
 
interface PageTransitionProps {
  onComplete?: () => void;
}
 
export function PageTransition({ onComplete }: PageTransitionProps) {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean | null>(null);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [startExitAnimation, setStartExitAnimation] = useState(false);
 
  useEffect(() => {
    // Check if the user has visited the site in this session
    const hasVisited = sessionStorage.getItem("structonix_first_load");
    if (!hasVisited) {
      setIsFirstLoad(true);
    } else {
      setIsFirstLoad(false);
    }
  }, []);
 
  // Handlers for when the timelines finish
  useEffect(() => {
    if (isFirstLoad === null) return;
 
    let exitTimer: NodeJS.Timeout;
    let finishTimer: NodeJS.Timeout;
 
    if (isFirstLoad) {
      // Timeline for First Load (Cinematic 4-Quadrant Vault Door)
      // 1. Grid/vector draw: 0s - 1.2s
      // 2. Logo / Tagline reveal: 0.6s - 2.8s
      // 3. Trigger exit doors: 2.8s
      exitTimer = setTimeout(() => {
        setStartExitAnimation(true);
      }, 2900);
 
      // 4. Entire transition ends: 3.75s
      finishTimer = setTimeout(() => {
        setIsAnimationFinished(true);
        sessionStorage.setItem("structonix_first_load", "true");
        if (onComplete) onComplete();
      }, 3750);
    } else {
      // Timeline for Normal Page Transition (Vertical Shutter)
      exitTimer = setTimeout(() => {
        setStartExitAnimation(true);
      }, 950);
 
      finishTimer = setTimeout(() => {
        setIsAnimationFinished(true);
        if (onComplete) onComplete();
      }, 1450);
    }
 
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [isFirstLoad, onComplete]);
 
  // Prevent rendering if animation is fully completed
  if (isAnimationFinished) return null;
 
  // Word variants for staggered tagline reveal
  const wordVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(2px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 1.1 + i * 0.25,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };
 
  // 4-Quadrant Door Variants (Cinematic First Load)
  const tlVariants = {
    initial: { x: 0, y: 0 },
    exit: { 
      x: "-100%", 
      y: "-100%", 
      transition: { duration: 0.85, ease: [0.85, 0, 0.15, 1] as const } 
    }
  };
 
  const trVariants = {
    initial: { x: 0, y: 0 },
    exit: { 
      x: "100%", 
      y: "-100%", 
      transition: { duration: 0.85, ease: [0.85, 0, 0.15, 1] as const } 
    }
  };
 
  const blVariants = {
    initial: { x: 0, y: 0 },
    exit: { 
      x: "-100%", 
      y: "100%", 
      transition: { duration: 0.85, ease: [0.85, 0, 0.15, 1] as const } 
    }
  };
 
  const brVariants = {
    initial: { x: 0, y: 0 },
    exit: { 
      x: "100%", 
      y: "100%", 
      transition: { duration: 0.85, ease: [0.85, 0, 0.15, 1] as const } 
    }
  };
 
  // Normal Page transition slide variants (Counter-sliding Shutters)
  const leftCurtainVariants = {
    initial: { y: "-100%" },
    animate: { 
      y: 0, 
      transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] as const } 
    },
    exit: { 
      y: "100%", 
      transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] as const } 
    }
  };
 
  const rightCurtainVariants = {
    initial: { y: "100%" },
    animate: { 
      y: 0, 
      transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1] as const } 
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] as const } 
    }
  };
 
  // Render cinematic 4-quadrant loader for first load
  if (isFirstLoad === true) {
    return (
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
        {/* Top Left Quadrant */}
        <motion.div
          variants={tlVariants}
          initial="initial"
          animate={startExitAnimation ? "exit" : "initial"}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-dark-navy border-r border-b border-white/5 pointer-events-auto"
        >
          {/* Blueprint vector lines top-left */}
          <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
            <motion.path
              d="M0 50h1000M150 0v1000M0 0l500 500M200 400l100-100"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
 
        {/* Top Right Quadrant */}
        <motion.div
          variants={trVariants}
          initial="initial"
          animate={startExitAnimation ? "exit" : "initial"}
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-dark-navy border-l border-b border-white/5 pointer-events-auto"
        >
          {/* Blueprint vector lines top-right */}
          <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
            <motion.path
              d="M0 150h1000M350 0v1000M800 0L400 400"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
 
        {/* Bottom Left Quadrant */}
        <motion.div
          variants={blVariants}
          initial="initial"
          animate={startExitAnimation ? "exit" : "initial"}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-dark-navy border-r border-t border-white/5 pointer-events-auto"
        >
          {/* Blueprint vector lines bottom-left */}
          <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
            <motion.path
              d="M0 350h1000M550 0v1000M0 500l500-500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
 
        {/* Bottom Right Quadrant */}
        <motion.div
          variants={brVariants}
          initial="initial"
          animate={startExitAnimation ? "exit" : "initial"}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-dark-navy border-l border-t border-white/5 pointer-events-auto"
        >
          {/* Blueprint vector lines bottom-right */}
          <svg className="absolute inset-0 w-full h-full stroke-white/5 stroke-[1.5] fill-none">
            <motion.path
              d="M0 250h1000M750 0v1000M1000 500L500 0"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
 
        {/* Central Overlay for Content */}
        {!startExitAnimation && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[110] px-4">
            {/* Background Grid */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-[0.03] pointer-events-none">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-white/30" />
              ))}
            </div>
 
            {/* Logo Wrapper - Substantially enlarged */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative w-[340px] h-[170px] md:w-[600px] md:h-[300px] mb-8"
            >
              <Image
                src="/images/structonix-logo-white.png"
                alt="Structonix"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              />
              {/* Tech Underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
 
            {/* Tagline Wrapper */}
            <div className="flex flex-wrap justify-center gap-x-2 text-center text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/70 font-secondary mt-2">
              <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible">
                Engineering
              </motion.span>
              <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible">
                tomorrow’s
              </motion.span>
              <motion.span
                custom={2}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="text-primary font-bold drop-shadow-[0_0_10px_rgba(254,127,45,0.35)]"
              >
                Horizon
              </motion.span>
            </div>
          </div>
        )}
      </div>
    );
  }
 
  // Render Sleek Page Transition (Subsequent Navigations - Shutter Wipe)
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
      {/* Left Shutter Panel */}
      <motion.div
        variants={leftCurtainVariants}
        initial="initial"
        animate={startExitAnimation ? "exit" : "animate"}
        className="absolute top-0 left-0 w-1/2 h-full bg-dark-navy border-r border-primary/5 pointer-events-auto shadow-2xl"
      />
      {/* Right Shutter Panel */}
      <motion.div
        variants={rightCurtainVariants}
        initial="initial"
        animate={startExitAnimation ? "exit" : "animate"}
        className="absolute top-0 right-0 w-1/2 h-full bg-dark-navy border-l border-primary/5 pointer-events-auto shadow-2xl"
      />
 
      {/* Center content overlaid on top of shutters */}
      {!startExitAnimation && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          {/* Subtle design grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="flex flex-col items-center">
            {/* White Logo - Resized to be significantly larger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="relative w-[280px] h-[140px] md:w-[450px] md:h-[225px]"
            >
              <Image
                src="/images/structonix-logo-white.png"
                alt="Structonix"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
 
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.35 }}
              className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white/50 font-secondary mt-3"
            >
              Engineering tomorrow’s <span className="text-primary font-bold">Horizon</span>
            </motion.p>
          </div>
        </div>
      )}
    </div>
  );
}
