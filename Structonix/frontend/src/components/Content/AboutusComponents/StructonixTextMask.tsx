'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function StructonixTextMask() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the background image within the text
    // Moving the background position vertically as we scroll
    const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0% 0%", "0% 100%"]);

    return (
        <section ref={containerRef} className="bg-white py-32 overflow-hidden flex items-center justify-center relative min-h-[50vh]">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-[12vw] md:text-[150px] font-black leading-none tracking-normal uppercase font-secondary"
                        style={{
                            backgroundImage: `url('https://images.pexels.com/photos/16045267/pexels-photo-16045267.jpeg')`, // Industrial structure image
                            backgroundSize: 'cover',
                            backgroundPosition: backgroundPosition as any, // Type assertion needed for motion style
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextStroke: '1px #F4991A', // Using primary color for stroke
                        }}
                    >
                        Structonix
                    </motion.h1>
                </motion.div>
            </div>

            {/* Decorative Background Elements (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 border-2 border-dark-gray rounded-full" />
                <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-primary rounded-full" />
            </div>
        </section>
    );
}
