"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        quote: "Su mentoría cambió mi perspectiva sobre inversión inmobiliaria. Ahora tengo un portafolio sólido gracias a sus consejos.",
        author: "Elena Gutiérrez",
        role: "Inversionista, Condesa",
        stars: 5,
    },
    {
        quote: "Su equipo manejó todo con precisión. Cerré en tiempo récord sin estrés ni sorpresas.",
        author: "Andrés Moreno",
        role: "Empresario, Lomas",
        stars: 5,
    },
    {
        quote: "Profesional, empática y con resultados reales. Recomiendo a Marisol sin dudarlo a cualquiera que busque vender o rentar.",
        author: "Roberto Silva",
        role: "Empresario, Lomas",
        stars: 5,
    },
    {
        quote: "Encontré en Marisol la mentoría que necesitaba para entender el verdadero valor de mis activos.",
        author: "Verónica Castillo",
        role: "Inversionista, La Condesa",
        stars: 5,
    },
    {
        quote: "Marisol no solo vendió mi casa, la colocó en manos seguras con el precio que realmente valía.",
        author: "Fernanda López",
        role: "Proprietaria, Polanco",
        stars: 5,
    },
    {
        quote: "Profesional de verdad. Negoció mejor de lo que yo hubiera podido imaginar.",
        author: "Carlos Méndez",
        role: "Arquitecto, Roma Norte",
        stars: 5,
    },
];

export function TestimonialsGrid() {
    return (
        <section className="py-24 bg-white text-charcoal">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-5xl lg:text-7xl font-serif font-medium mb-6">Testimonios</h2>
                        <p className="text-lg text-charcoal/70">Lo que dicen nuestros clientes</p>
                    </div>
                    <div className="mt-8 md:mt-0 flex gap-4">
                        <button className="px-6 py-2 border border-charcoal uppercase text-xs font-bold tracking-widest hover:bg-charcoal hover:text-white transition-colors">Leer</button>
                        <button className="px-6 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors">Más ›</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="border border-gray-200 p-8 hover:shadow-lg transition-shadow bg-white flex flex-col justify-between min-h-[300px]">
                            <div>
                                <div className="flex gap-1 text-charcoal mb-6">
                                    {[...Array(t.stars)].map((_, i) => (
                                        <FaStar key={i} size={14} />
                                    ))}
                                </div>
                                <p className="text-lg font-light leading-relaxed mb-8">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm font-bold">{t.author}</p>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
