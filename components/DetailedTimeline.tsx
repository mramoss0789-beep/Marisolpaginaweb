"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        title: "Análisis",
        desc: "Analizamos tu propiedad y definimos el precio correcto para el mercado.",
        image: "/images/process/1.png"
    },
    {
        title: "Preparación",
        desc: "Preparamos tu propiedad para salir al mercado con fotos, descripción y estrategia.",
        image: "/images/process/2.png"
    },
    {
        title: "Promoción",
        desc: "La promociono en portales, redes y con mi red de clientes y asesores.",
        image: "/images/process/3.png"
    },
    {
        title: "Filtro de clientes",
        desc: "Filtro a los interesados para que solo recibas visitas\u00A0calificadas.",
        image: "/images/process/4.png"
    },
    {
        title: "Negociación",
        desc: "Te ayudo a negociar para lograr las mejores\u00A0condiciones.",
        image: "/images/process/5.png"
    },
    {
        title: "Cierre",
        desc: "Te acompaño hasta la firma y entrega de la\u00A0propiedad.",
        buttonText: "CONTACTAR",
        link: "#contact",
        image: "/images/process/6.png"
    }
];

export function DetailedTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-32 bg-[#d35c6a] text-white overflow-hidden relative" id="process">
            {/* Background Texture/Noise could be added here for texture if desired */}

            <div className="container-wide max-w-6xl relative z-10">
                <div className="text-center mb-24">
                    <span className="text-pink-200 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Proceso</span>
                    <h2 className="text-4xl lg:text-6xl font-serif text-white">
                        ¿Cómo trabajo?
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Vertical Line Container */}
                    <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-1 bg-white/20 -z-10 hidden lg:block rounded-full">
                        {/* The Filling Line (Animated) */}
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-[#ffa6b1] rounded-full top-0 absolute lg:block hidden"
                        />
                    </div>

                    {steps.map((step, idx) => (
                        <StepCard key={idx} step={step} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, idx }: { step: any, idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-center mb-32 last:mb-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            {/* Text Content */}
            <div className={`flex-1 ${idx % 2 === 1 ? 'lg:pl-0 text-left' : 'lg:text-right lg:pr-0'}`}>
                <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:items-start' : 'lg:items-end'}`}>
                    <span className="text-[#ffa6b1] font-serif text-6xl opacity-50 mb-4 block">0{idx + 1}</span>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">{step.title}</h3>
                    <p className="text-pink-100 mb-8 leading-relaxed text-lg max-w-md">
                        {step.desc}
                    </p>
                    {step.buttonText && (
                        <Link
                            href={step.link}
                            className="inline-block px-8 py-3 border border-pink-200 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#d35c6a] transition-all rounded-full"
                        >
                            {step.buttonText}
                        </Link>
                    )}
                </div>
            </div>

            {/* Center Dot (Desktop Only) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"></div>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full lg:w-auto">
                <div className="relative aspect-[4/5] bg-pink-900/20 max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl group">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        style={{ backgroundImage: `url('${step.image}')` }}
                    ></div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d35c6a]/80 to-transparent opacity-60 mix-blend-overlay"></div>
                </div>
            </div>
        </motion.div>
    );
}
