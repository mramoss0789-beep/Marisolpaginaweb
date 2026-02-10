"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export function GratitudeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"] // Reveal starts when section enters, ends when fully visible
    });

    const text = "Gracias por llegar hasta aquí. Esta profesión me regaló ver crecer a mis hijos y mi independencia, pero sobre todo, el privilegio de guiarte en una de las decisiones más importantes de tu vida. Amo lo que hago y sería un honor trabajar para ti. ¡Hagamos magia juntos!";

    const words = text.split(" ");

    return (
        <section
            ref={containerRef}
            className="py-32 lg:py-40 bg-[#d35c6a] text-center min-h-[60vh] flex items-center justify-center transition-colors duration-500"
        >
            <div className="container-wide max-w-4xl mx-auto px-6">
                <p className="sr-only">{text}</p>
                <div className="flex flex-wrap justify-center gap-[0.25em] md:gap-[0.3em] leading-tight">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return (
                            <Word key={i} range={[start, end]} progress={scrollYProgress}>
                                {word}
                            </Word>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const Word = ({ children, range, progress }: { children: string, range: [number, number], progress: MotionValue<number> }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);

    return (
        <span className="relative inline-block">
            <motion.span
                style={{ opacity }}
                className="text-3xl md:text-5xl lg:text-5xl font-serif font-medium text-white"
            >
                {children}
            </motion.span>
        </span>
    );
};
