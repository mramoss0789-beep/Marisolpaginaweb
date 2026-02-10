"use client";

import React from "react";
import Link from "next/link";

export function TestimonialsHeader() {
    return (
        <section className="bg-white text-charcoal pt-40 pb-20 text-center">
            <div className="container-wide">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Confianza</span>
                <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-8 text-black">
                    Historias de éxito
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
                    Descubre cómo propietarios en CDMX lograron sus objetivos con Marisol
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors rounded-full">
                        Explorar
                    </button>
                    <Link href="/contacto" className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                        Contactar
                    </Link>
                </div>
            </div>
        </section>
    );
}
