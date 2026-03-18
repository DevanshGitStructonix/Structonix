"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function PageTransition() {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    // The overlay should disappear after the animation finishes
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 1800); // Shorter duration for image fade

    return () => clearTimeout(timer);
  }, []);

  if (!isPresent) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#f4f4f4] flex flex-col items-center justify-center pointer-events-none"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-48 h-auto md:w-64"
      >
        <img
          src="/images/structonix-logo.png"
          alt="Structonix Logo"
          className="w-full h-auto object-contain drop-shadow-md"
          onError={(e) => {
            // Fallback if they haven't saved it as logo.png yet
            e.currentTarget.style.display = 'none';
          }}
        />
      </motion.div>
    </motion.div>
  );
}
