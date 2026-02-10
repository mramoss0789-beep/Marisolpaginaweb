"use client";

import React from "react";
import { FaCube, FaShapes } from "react-icons/fa6"; // Reusing for trust bar if needed

export function StatsDetailed() {
    return (
        <section className="py-24 bg-white text-charcoal">
            <div className="container-wide mb-16 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Resultados</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-4 text-black">
                    Números que hablan
                </h2>
                <p className="text-gray-500">Dos décadas construyendo relaciones duraderas en CDMX</p>
            </div>

            <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Left */}
                <div className="w-full aspect-video lg:aspect-[4/3] bg-gray-100 relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop')" }}></div>
                </div>

                {/* Stats Right */}
                <div className="space-y-12">
                    <div>
                        <p className="text-6xl font-bold text-black mb-2">20</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-charcoal">Años de experiencia</p>
                    </div>
                    <div>
                        <p className="text-6xl font-bold text-black mb-2">300</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-charcoal">Clientes asesorados</p>
                    </div>
                    <div>
                        <p className="text-6xl font-bold text-black mb-2">98%</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-charcoal">Satisfacción comprobada</p>
                    </div>
                </div>
            </div>

            {/* Trust Bar below stats within same section/flow */}
            <div className="container-wide mt-24 border-t border-gray-100 pt-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="font-bold text-sm max-w-[200px]">Respaldada por las mejores inmobiliarias</p>
                    <div className="flex flex-wrap justify-center gap-12 text-2xl font-bold text-black/80">
                        <div className="flex items-center gap-2"><FaShapes /> Webflow</div>
                        <div className="flex items-center gap-2"><FaCube /> Relume</div>
                        <div className="flex items-center gap-2"><FaShapes /> Webflow</div>
                        <div className="flex items-center gap-2"><FaCube /> Relume</div>
                        <div className="flex items-center gap-2"><FaShapes /> Webflow</div>
                    </div>
                </div>
            </div>

        </section>
    );
}
