"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

type TimelineItem = {
    title: string;
    description: string;
};

const timelineData: TimelineItem[] = [
    {
        title: "Valuación Real",
        description: "Análisis profundo de mercado para fijar el precio correcto desde el día uno, evitando estancamientos o pérdidas.",
    },
    {
        title: "Marketing Estratégico",
        description: "Fotografía profesional, recorridos virtuales y campañas dirigidas a compradores calificados, no a curiosos.",
    },
    {
        title: "Filtrado Riguroso",
        description: "Investigación de perfil financiero y legal de cada prospecto antes de abrir las puertas de tu propiedad.",
    },
    {
        title: "Negociación Experta",
        description: "Defensa de tu patrimonio con argumentos sólidos y experiencia para maximizar el valor de cierre.",
    },
    {
        title: "Cierre Seguro",
        description: "Acompañamiento legal y notarial hasta la firma y entrega de llaves o recepción de pago.",
    },
];

const useAnimation = (itemCount: number) => {
    const refs = Array.from({ length: itemCount }).map(() => useRef<HTMLDivElement>(null));

    const computedStyles = refs.map((ref) => {
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"],
        });
        const opacity = useTransform(
            scrollYProgress,
            [0, 0.5, 0.85, 1],
            [0, 0.25, 0.75, 1],
        );
        const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ccc", "#d35c6a"]);

        return {
            opacity,
            backgroundColor,
        };
    });

    return {
        refs,
        computedStyles,
    };
};

export function ProcessTimeline() {
    const { refs, computedStyles } = useAnimation(timelineData.length);

    return (
        <section id="process" className="relative z-0 bg-white">
            <div className="relative -z-30">
                <div>
                    <div className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
                        <div className="container">
                            <div className="mx-auto max-w-lg text-center">
                                <p className="mb-3 font-semibold md:mb-4 text-[#d35c6a] uppercase tracking-widest">Metodología</p>
                                <h2 className="mb-5 text-4xl font-serif font-bold md:mb-6 md:text-5xl lg:text-6xl text-black">
                                    El camino a un <span className="text-[#d35c6a]">cierre exitoso</span>
                                </h2>
                                <p className="md:text-lg text-gray-600">
                                    Un proceso probado de 5 pasos para vender o rentar sin riesgos ni contratiempos.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-[5%]">
                        <div className="container">
                            <div className="relative flex flex-col items-center justify-center">
                                <div className="absolute left-1.5 -z-20 h-full w-[3px] bg-gray-100 md:left-auto">
                                    {/* Scroll progress bar could go here */}
                                </div>

                                {timelineData.map((item, index) => (
                                    <div key={index} className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
                                        <motion.div
                                            className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
                                            style={{ opacity: computedStyles[index].opacity }}
                                        >
                                            <h3 className="text-3xl font-serif font-bold leading-[1.2] md:text-4xl lg:text-5xl text-black">
                                                {item.title}
                                            </h3>
                                        </motion.div>

                                        <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
                                            <motion.div
                                                ref={refs[index]}
                                                style={{ backgroundColor: computedStyles[index].backgroundColor }}
                                                className="sticky top-[50vh] size-[1.25rem] rounded-full shadow-[0_0_0_8px_white]"
                                            />
                                        </div>

                                        <motion.div style={{ opacity: computedStyles[index].opacity }}>
                                            <div className="mb-10 md:mb-14 lg:mb-16">
                                                <p className="md:text-lg text-gray-700">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
