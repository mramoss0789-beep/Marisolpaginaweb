"use client";

import React from "react";

export function ConsultationForm() {
    return (
        <section className="py-24 bg-white text-charcoal">
            <div className="container-wide max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-4 text-black">
                    Comienza tu transformación hoy
                </h2>
                <p className="text-gray-500 mb-12">
                    Solicita tu evaluación gratuita y descubre el verdadero valor de tu propiedad
                </p>

                {/* Simple CTA Buttons from middle screenshot */}
                <div className="flex justify-center gap-4 mb-24">
                    <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors rounded-full">
                        Evaluar
                    </button>
                    <button className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                        Llamar
                    </button>
                </div>

                {/* Form Section from last screenshot "Agendar consulta" */}
                <div className="max-w-xl mx-auto">
                    <h3 className="text-3xl font-serif font-bold mb-4">Agendar consulta</h3>
                    <p className="text-sm text-gray-500 mb-8">Completa tus datos y nos pondremos en contacto dentro de 24 horas</p>
                    <div className="flex justify-center gap-4 mb-16">
                        <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors rounded-full">
                            Enviar
                        </button>
                        <button className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                            Reservar
                        </button>
                    </div>
                </div>

                {/* Full Width Image at bottom */}
                <div className="aspect-video bg-gray-100 relative w-full">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2670&auto=format&fit=crop')" }}>
                        {/* Icon Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <div className="text-white text-4xl">🏔️</div> {/* Placeholder for mountain icon in screenshot */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
