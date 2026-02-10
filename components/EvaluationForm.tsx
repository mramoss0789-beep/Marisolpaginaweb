"use client";

import React from "react";

export function EvaluationForm() {
    return (
        <section className="py-24 bg-white text-charcoal border-t border-gray-50">
            <div className="container-wide text-center">
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6 text-black">
                    Obtén tu evaluación hoy
                </h2>
                <p className="text-gray-500 mb-12">
                    Completa este formulario y recibe un análisis detallado de tu propiedad
                </p>

                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors rounded-full">
                        Enviar
                    </button>
                    <button className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                        Comenzar
                    </button>
                </div>
            </div>
        </section>
    );
}
