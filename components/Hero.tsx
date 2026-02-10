"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-sand pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block" />

            <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="px-4 lg:px-0"
                >
                    <span className="block text-brand text-sm font-bold tracking-[0.2em] uppercase mb-6">
                        Real Estate Director
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-charcoal mb-8">
                        Tu patrimonio merece <br />
                        <span className="italic text-brand-dark">experiencia real.</span>
                    </h1>
                    <p className="text-lg text-charcoal/70 mb-10 max-w-md leading-relaxed">
                        20 años guiando las operaciones inmobiliarias más importantes de la Ciudad de México. Venta y renta con estrategia, no con suerte.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/evaluacion" className="btn-primary">
                            Solicitar Valuación
                        </Link>
                        <Link href="/servicios" className="btn-secondary">
                            Ver Metodología
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text placeholders for now */}
                        <span className="text-xs font-serif font-bold tracking-widest">CENTURY 21</span>
                        <span className="w-px h-8 bg-charcoal/20"></span>
                        <span className="text-xs font-serif font-bold tracking-widest">QUALITY INMOBILIARIA</span>
                    </div>
                </motion.div>

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[60vh] lg:h-[80vh] w-full"
                >
                    <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                        {/* Placeholder for Marisol's Hero Image - Abstract Architectural or Portrait */}
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop')" }}>
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 max-w-xs shadow-xl hidden lg:block">
                        <p className="text-4xl font-serif text-brand font-bold mb-2">20+</p>
                        <p className="text-sm text-charcoal uppercase tracking-wider">Años de trayectoria en el mercado de lujo</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
