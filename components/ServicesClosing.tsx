"use client";

import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export function ServicesClosing() {
    return (
        <section className="py-24 bg-white text-charcoal">
            <div className="container-wide grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Image (Left) */}
                <div>
                    <div className="aspect-square bg-gray-100 relative">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574633089851-4c6e000c2830?q=80&w=2574&auto=format&fit=crop')" }}></div> {/* Meeting/Strategy */}
                    </div>
                </div>

                {/* Text (Right) */}
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Cierre</span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8 leading-tight">
                        Negocia desde una posición de fuerza
                    </h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        Cada negociación es una batalla ganada. Con veinte años en el mercado, sé cómo obtener el precio y los términos que protegen tus intereses.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {["Análisis competitivo del mercado", "Estrategia de presentación profesional", "Cierre legal seguro y transparente"].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="mt-1 text-black text-xs"><FaCheck /></span>
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-3 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors rounded-full">
                        Descubrir
                        <span className="text-lg">›</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
