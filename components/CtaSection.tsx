"use client";

import React from "react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="py-24 lg:py-32 bg-white text-center">
            <div className="container-wide max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-medium mb-8 leading-tight text-charcoal text-balance">
                    Tu propiedad está en buenas manos, <br className="hidden md:block" /> me encantaría trabajar juntos.
                </h2>
                <p className="text-lg md:text-xl text-charcoal/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Obtén una opinión de valor personalizada y descubre el verdadero valor de mercado hoy mismo.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href="/evaluacion"
                        className="px-10 py-4 bg-[#d35c6a] text-white text-sm font-bold tracking-widest uppercase hover:bg-charcoal transition-colors rounded-full shadow-lg"
                    >
                        ¿Cuánto vale mi propiedad?
                    </Link>
                    <Link
                        href="#contact"
                        className="px-10 py-4 bg-white border border-gray-200 text-charcoal text-sm font-bold tracking-widest uppercase hover:border-[#d35c6a] hover:text-[#d35c6a] transition-colors rounded-full"
                    >
                        CONTACTAR
                    </Link>
                </div>
            </div>
        </section>
    );
}
