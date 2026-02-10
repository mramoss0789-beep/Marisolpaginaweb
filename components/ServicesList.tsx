"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Análisis de mercado", // From screenshot title
        headline: "Valuación precisa de tu propiedad", // From screenshot headline
        desc: "Utilizamos datos actuales del mercado inmobiliario en CDMX para determinar el precio justo. Nuestro análisis considera ubicación, características y tendencias recientes.",
        link: "/evaluacion",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" // Data/Charts
    },
    {
        id: "02",
        title: "Negociación experta",
        headline: "Maximiza el valor de tu inversión",
        desc: "Con dos décadas de experiencia, manejo cada negociación con precisión y profesionalismo. Obtenemos los mejores términos para nuestros clientes.",
        link: "/contacto",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" // Handshake/Meeting
    },
    {
        id: "03",
        title: "Tecnología avanzada",
        headline: "Proceso transparente y eficiente",
        desc: "Plataformas digitales modernas permiten seguimiento en tiempo real de tu propiedad. Comunicación clara en cada paso del proceso.",
        link: "/contacto",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop" // Tech/Tablet
    },
];

export function ServicesList() {
    return (
        <section className="bg-white text-charcoal">
            <div className="container-wide">

                {services.map((service, idx) => (
                    <div key={service.id} className="py-24 border-b border-gray-100 last:border-0">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                            {/* Text Content - Always Left as per specific screenshot request for 01 & 02? 
                     Actually screenshot showed text left, image right for 01.
                     Let's keep them consistent or alternate? 
                     User plan said: "ZigZag Layout".
                     Let's alternate to make it dynamic, but keep 01 as Text Left.
                 */}
                            <div className={`order-1 ${idx === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <span className="block text-xs font-bold underline decoration-1 underline-offset-4 mb-8">
                                    {service.id} &nbsp;&nbsp; {service.title}
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">
                                    {service.title.split(' ')[0]} {/* Approximate category */}
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-serif font-medium mb-6 leading-tight">
                                    {service.headline}
                                </h2>
                                <p className="text-gray-500 mb-8 leading-relaxed max-w-md">
                                    {service.desc}
                                </p>
                                <Link href={service.link} className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-xs font-bold uppercase tracking-widest hover:border-black transition-colors">
                                    Conocer más
                                    <span className="text-lg">›</span>
                                </Link>
                            </div>

                            {/* Image Content */}
                            <div className={`order-2 ${idx === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="aspect-square bg-gray-100 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${service.image}')` }}></div>

                                    {/* Number Overlay */}
                                    <div className="absolute top-4 right-4 text-9xl font-serif text-white opacity-20 font-bold select-none">
                                        {idx + 1}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
