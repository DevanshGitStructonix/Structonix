"use client";
 
import { motion } from "framer-motion";
import { PageTransition } from "@/components/Global/PageTransition";
import { useState } from "react";
 
export default function Template({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(true);
 
  return (
    <>
      <PageTransition onComplete={() => setIsTransitioning(false)} />
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
        animate={isTransitioning 
          ? { opacity: 0, scale: 0.98, filter: "blur(5px)" } 
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={isTransitioning ? "pointer-events-none select-none" : ""}
      >
        {children}
      </motion.div>
    </>
  );
}
