"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

export function HeroScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Choreography of the scroll sequence
    // Total Scroll Distance: 0.0 to 1.0 (h-[400vh]) - Increased for "Hold" phase

    // Phase 1 (0.0 - 0.15): Text stays for a moment, then fades out rapidly.
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-30vh"]);
    const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    // Phase 2 (0.15 - 0.4): Grid moves UP to visually center
    // Tuned lift to -42vh (Splitting difference to hit exact center)
    const gridY = useTransform(scrollYProgress, [0.15, 0.4], ["0vh", "-42vh"]);

    // Phase 3 (0.4 - 0.7): Central Image Expansion
    // Finish expansion by 0.7, leaving 0.7-1.0 as a static "Hold" phase
    // START SMALL (Compact) -> EXPAND TO FULL SCREEN
    // Tuned size to 38vw/60vh to avoid overlapping neighbors while staying substantial
    const width = useTransform(scrollYProgress, [0.4, 0.7], ["38vw", "100vw"]);
    const height = useTransform(scrollYProgress, [0.4, 0.7], ["60vh", "100vh"]);
    const borderRadius = useTransform(scrollYProgress, [0.4, 0.7], ["12px", "0px"]);

    // Secondary Animations (Side Images Departure)
    // Clear the stage quickly
    const sideOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
    const sideScale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.8]);

    const outerLeftX = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-300%"]);
    const innerLeftX = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "-200%"]);
    const innerRightX = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "200%"]);
    const outerRightX = useTransform(scrollYProgress, [0.4, 0.7], ["0%", "300%"]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-sand">
            {/* Height extended to 400vh to allow for a 'Hold' phase at the end */}

            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center">

                {/* Text Content */}
                {/* Fixed Layout: Added pt-40 to push text CLEARLY below the Navbar (80px-100px) */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY, scale: textScale }}
                    className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-32 lg:pt-40 pb-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-6 text-charcoal leading-tight text-balance">
                        Vende o renta tu propiedad <br className="hidden md:block" /> en Ciudad de México con&nbsp;confianza
                    </h1>
                    <p className="text-lg text-charcoal/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Te guío hacia la mejor decisión para tu patrimonio. <br className="hidden md:block" /> Dos décadas transformando el mercado inmobiliario.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/evaluacion" className="px-8 py-3 bg-[#d35c6a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#b04b56] transition-colors rounded-full">
                            ¿Cuánto vale mi propiedad?
                        </Link>
                        <Link href="#contact" className="px-8 py-3 border border-charcoal/30 text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors rounded-full">
                            CONTACTAR
                        </Link>
                    </div>
                </motion.div>

                {/* 
                  7-Image Grid Container 
                */}
                <motion.div
                    style={{ y: gridY }}
                    className="relative w-full flex-1 flex items-start justify-center overflow-visible"
                >

                    {/* Responsive Grid: 3 cols (mobile) -> 5 cols (tablet) -> 7 cols (desktop) */}
                    {/* GAP: Reduced gap on mobile (gap-2) to ensure items fit */}
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-4 w-full h-[60vh] items-center px-2 md:px-8 max-w-[1600px] relative">
                        {/* Added relative here to be the anchor for the absolute central card */}

                        {/* Col 1: Outer Left (Desktop Only) */}
                        <motion.div
                            style={{ x: outerLeftX, opacity: sideOpacity, scale: sideScale }}
                            className="col-span-1 hidden lg:block h-full relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/1.svg" className="w-full h-full object-cover" alt="Architecture" />
                            </div>
                        </motion.div>

                        {/* Col 2: Inner Left (Tablet+) */}
                        <motion.div
                            style={{ x: innerLeftX, opacity: sideOpacity, scale: sideScale }}
                            className="col-span-1 hidden md:flex flex-col gap-4 h-full"
                        >
                            <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/7.svg" className="w-full h-full object-cover" alt="Interior" />
                            </div>
                            <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/8.svg" className="w-full h-full object-cover" alt="Meeting" />
                            </div>
                        </motion.div>

                        {/* Col 3 (Mobile Left Neighbor) */}
                        <motion.div
                            style={{ x: innerLeftX, opacity: sideOpacity, scale: sideScale }}
                            className="col-span-1 flex flex-col gap-4 h-full md:hidden lg:hidden"
                        >
                            <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/7.svg" className="w-full h-full object-cover" alt="Interior Mobile" />
                            </div>
                        </motion.div>


                        {/* SPACER for Central Hero */}
                        {/* We leave this empty to hold the grid structure/gap, but the actual image is absolute to the container */}
                        <div className="col-span-1 md:col-span-3 lg:col-span-3 h-full relative pointer-events-none" />


                        {/* ABSOLUTE CENTER HERO */}
                        {/* 
                            ROBUST CENTERING: 
                            top-0 left-0 right-0 bottom-0 + m-auto 
                            Ensures it sits perfectly in the center of the relative parent (Grid).
                        */}
                        <motion.div
                            style={{ width, height, borderRadius, x: "-50%", y: "-50%" }}
                            className="absolute top-1/2 left-1/2 shadow-2xl overflow-hidden z-50"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/hero/hero.svg')" }}
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </motion.div>



                        {/* Col 4 (Mobile Right Neighbor) */}
                        <motion.div
                            style={{ x: innerRightX, opacity: sideOpacity, scale: sideScale }}
                            className="col-span-1 flex flex-col gap-4 h-full md:hidden lg:hidden"
                        >
                            <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/9.svg" className="w-full h-full object-cover" alt="Keys Mobile" />
                            </div>
                        </motion.div>

                        {/* Col 6: Inner Right (Tablet+) */}
                        <motion.div
                            style={{ x: innerRightX, opacity: sideOpacity, scale: sideScale }}
                            className="col-span-1 hidden md:flex flex-col gap-4 h-full"
                        >
                            <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/9.svg" className="w-full h-full object-cover" alt="Keys" />
                            </div>
                            <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/10.svg" className="w-full h-full object-cover" alt="Kitchen" />
                            </div>
                        </motion.div>

                        {/* Col 7: Outer Right (Desktop Only) */}
                        <motion.div
                            style={{ x: outerRightX, opacity: sideOpacity, scale: sideScale }}
                            className="col-span-1 hidden lg:block h-full relative"
                        >
                            <div className="absolute top-0 right-0 w-full h-full rounded-lg overflow-hidden bg-gray-300">
                                <img src="/images/hero/2.svg" className="w-full h-full object-cover" alt="New Garden" />
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
