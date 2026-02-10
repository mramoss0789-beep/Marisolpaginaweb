"use client";

import React from "react";
import Link from "next/link";

export function EvaluationHeader() {
    return (
        <section className="bg-white text-charcoal pt-40 pb-20 text-center">
            <div className="container-wide">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Evaluación</span>
                <h1 className="text-5xl lg:text-7xl font-serif font-medium mb-8 text-black">
                    Tu propiedad merece más
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
                    Descubre el valor real de tu inmueble con la asesoría de Marisol Ramos, Directora Inmobiliaria de lujo con 20 años de experiencia en CDMX
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors rounded-full">
                        Evaluar
                    </button>
                    <Link href="#proceso" className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                        Conocer
                    </Link>
                </div>
            </div>
        </section>
    );
}
