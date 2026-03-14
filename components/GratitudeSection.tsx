"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function GratitudeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

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
                opacity = 0.12;
            } else if (latest >= wordEnd) {
                opacity = 1;
            } else {
                opacity = 0.12 + 0.88 * ((latest - wordStart) / (wordEnd - wordStart));
            }
            el.style.opacity = String(opacity);
        });
    });

    return (
        <section
            ref={containerRef}
            className="relative bg-[#d35c6a] h-[250vh] md:h-[400vh]"
        >
            <div className="sticky top-0 h-screen-safe flex items-center justify-center py-8 px-5 md:py-16 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="sr-only">{text}</p>
                    <p className="text-[1.35rem] leading-relaxed sm:text-2xl md:text-4xl lg:text-5xl font-serif font-medium md:leading-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
                        {words.map((word, i) => (
                            <span
                                key={i}
                                ref={(el) => { wordRefsRef.current[i] = el; }}
                                className="inline-block text-white will-change-[opacity]"
                                style={{
                                    opacity: 0.12,
                                    transition: "opacity 0.15s ease-out",
                                }}
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
