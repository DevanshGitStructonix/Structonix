"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration: 1.5 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: 1.5 } 
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-3xl">
        
        {/* Animated SVG Section */}
        <motion.div 
          className="mb-8 relative w-64 h-64 md:w-80 md:h-80"
          initial="hidden"
          animate="visible"
        >
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            className="text-primary stroke-current"
            initial="hidden"
            animate="visible"
          >
            {/* Ground / Base */}
            <motion.path
               d="M 20 180 L 180 180"
               strokeWidth="4"
               strokeLinecap="round"
               fill="none"
               variants={draw}
               custom={0}
            />

            {/* Left Pillar */}
            <motion.path
               d="M 40 180 L 40 100"
               strokeWidth="6"
               strokeLinecap="round"
               fill="none"
               variants={draw}
               custom={0.5}
            />

            {/* Center Pillar */}
            <motion.path
               d="M 100 180 L 100 100"
               strokeWidth="6"
               strokeLinecap="round"
               fill="none"
               variants={draw}
               custom={0.8}
            />

            {/* Right Pillar */}
            <motion.path
               d="M 160 180 L 160 100"
               strokeWidth="6"
               strokeLinecap="round"
               fill="none"
               variants={draw}
               custom={1.1}
            />

            {/* Top Cross Beam */}
            <motion.path
               d="M 30 100 L 170 100"
               strokeWidth="5"
               strokeLinecap="round"
               fill="none"
               variants={draw}
               custom={1.5}
            />

            {/* Roof Truss Left */}
            <motion.path
               d="M 30 100 L 100 40 L 100 100"
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
               fill="none"
               variants={draw}
               custom={2}
            />

            {/* Roof Truss Right */}
            <motion.path
               d="M 170 100 L 100 40"
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
               fill="none"
               variants={draw}
               custom={2.3}
            />

            {/* Crane / Hanging hook from top */}
            <motion.path
               d="M 100 0 L 100 30"
               strokeWidth="2"
               strokeDasharray="4 4"
               fill="none"
               variants={draw}
               custom={2.5}
            />
            {/* Hook */}
            <motion.path
               d="M 100 30 C 100 40, 115 40, 115 45 C 115 50, 105 50, 105 45"
               strokeWidth="2"
               strokeLinecap="round"
               fill="none"
               variants={draw}
               custom={2.7}
            />

            {/* Inner diagonal support 1 */}
            <motion.path
               d="M 40 100 L 100 180"
               strokeWidth="1"
               strokeDasharray="5 5"
               fill="none"
               variants={draw}
               custom={1.6}
            />
            {/* Inner diagonal support 2 */}
            <motion.path
               d="M 160 100 L 100 180"
               strokeWidth="1"
               strokeDasharray="5 5"
               fill="none"
               variants={draw}
               custom={1.8}
            />

          </motion.svg>
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-dark-slate/10 font-bold text-8xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Construction className="text-primary w-8 h-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-slate font-secondary tracking-tight uppercase">
              Page Not Found
            </h1>
            <Construction className="text-primary w-8 h-8" />
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto font-medium">
            Looks like this area is still under construction or doesn&apos;t exist. Let&apos;s get you back to solid ground.
          </p>

          <Link 
            href="/" 
            className="inline-flex bg-primary hover:bg-dark-slate text-white px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 items-center justify-center gap-3 group cursor-pointer shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
            Return to Homepage
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
