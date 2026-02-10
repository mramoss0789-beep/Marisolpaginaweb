"use client";

import React from "react";
import { motion } from "framer-motion";

// Portals Data
const portals = [
    { name: "Mercado Libre", logo: "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png", type: "image", scale: 1 },
    { name: "Inmuebles24", logo: "/assets/logos/inmuebles24_new.png", type: "image", scale: 1.2 }, // New uploaded logo
    { name: "Lamudi", logo: "/assets/logos/lamudi_new.png", type: "image", scale: 1.1 }, // New uploaded logo
    { name: "Meta Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png", type: "image", scale: 0.9 },
    { name: "Google Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", type: "image", scale: 0.9 },
];

// Tools Data (Text based or Icons could be used, Text for now as requested "herramientas")
const tools = [
    "Fotografía Profesional",
    "Video 4K Cinematográfico",
    "Recorridos Virtuales 360°",
    "Red de +2000 Asesores",
    "Estrategia Digital Avanzada",
    "Brochures Interactivos",
    "Open Houses Exclusivos"
];

export function MarketingFeature() {
    return (
        <section className="py-12 bg-sand-light text-center overflow-hidden">
            <div className="container-wide mb-10 flex flex-col items-center gap-1">
                <p className="text-xl md:text-2xl font-serif text-[#d35c6a] font-medium max-w-5xl mx-auto leading-tight">
                    Tu propiedad merece ser vista por los ojos correctos.
                </p>
                <p className="text-xl md:text-2xl font-serif text-[#d35c6a] font-medium max-w-6xl mx-auto leading-tight">
                    Utilizo las plataformas más potentes y tecnología de punta para maximizar el alcance.
                </p>
            </div>

            {/* Carousel 1: Portals */}
            <div className="mb-8 relative flex overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-sand-light to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-sand-light to-transparent"></div>

                <Ticker duration={25}>
                    {portals.map((portal, idx) => (
                        <div key={idx} className="mx-8 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                            <img
                                src={portal.logo}
                                alt={portal.name}
                                className="h-10 md:h-12 w-auto object-contain max-w-[160px]"
                                style={{ transform: `scale(${portal.scale || 1})` }}
                            />
                        </div>
                    ))}
                    <div className="mx-8 flex items-center justify-center">
                        <span className="text-xl font-serif font-bold text-[#d35c6a] whitespace-nowrap">+ 10 Portales Aliados</span>
                    </div>
                </Ticker>
            </div>

            {/* Carousel 2: Tools (Reverse direction) */}
            <div className="relative flex overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-sand-light to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-sand-light to-transparent"></div>

                <Ticker duration={30} reverse>
                    {tools.map((tool, idx) => (
                        <div key={idx} className="mx-6 px-6 py-2 bg-white rounded-full shadow-sm border border-pink-100 whitespace-nowrap">
                            <span className="text-sm font-bold uppercase tracking-wider text-[#d35c6a]">{tool}</span>
                        </div>
                    ))}
                </Ticker>
            </div>
        </section>
    );
}

function Ticker({ children, duration = 20, reverse = false }: { children: React.ReactNode, duration?: number, reverse?: boolean }) {
    return (
        <div className="flex w-max">
            <motion.div
                className="flex"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration,
                }}
            >
                {/* Repetir children suficientes veces para el loop infinito sin gaps */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
