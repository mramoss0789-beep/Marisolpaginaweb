"use client";

import React, { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function GratitudeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const text = "Gracias por llegar hasta aquí. Esta profesión me regaló ver crecer a mis hijos y mi independencia, pero sobre todo, el privilegio de guiarte en una de las decisiones más importantes de tu vida. Amo lo que hago y sería un honor trabajar para ti. ¡Hagamos magia juntos!";
    const words = text.split(" ");

    const REVEAL_START = 0.05;
    const REVEAL_END = 0.75;
    const revealRange = REVEAL_END - REVEAL_START;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        wordRefsRef.current.forEach((el, i) => {
            if (!el) return;
            const wordStart = REVEAL_START + (i / words.length) * revealRange;
            const wordEnd = REVEAL_START + ((i + 1) / words.length) * revealRange;

            let opacity;
            if (latest <= wordStart) {
                opacity = 0.08;
            } else if (latest >= wordEnd) {
                opacity = 1;
            } else {
                opacity = 0.08 + 0.92 * ((latest - wordStart) / (wordEnd - wordStart));
            }
            el.style.opacity = String(opacity);
        });
    });

    return (
        <section
            ref={containerRef}
            className="relative bg-[#d35c6a] h-[400vh]"
        >
            <div className="sticky top-0 h-screen flex items-center justify-center py-12 md:py-16 px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="sr-only">{text}</p>
                    <p className="text-3xl md:text-5xl lg:text-5xl font-serif font-medium leading-snug md:leading-tight flex flex-wrap justify-center">
                        {words.map((word, i) => (
                            <span
                                key={i}
                                ref={(el) => { wordRefsRef.current[i] = el; }}
                                className="inline-block mr-[0.3em] mb-[0.15em] text-white"
                                style={{ opacity: 0.08 }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}
