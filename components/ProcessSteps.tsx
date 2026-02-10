"use client";

import React from "react";
import Link from "next/link";
import { FaImage, FaChartBar, FaFileContract, FaComments } from "react-icons/fa"; // Icons matching implied content

const steps = [
    {
        icon: <FaImage size={32} className="text-gray-300" />, // Using generic placeholder icon style from screenshot
        title: "Comparte los detalles de tu propiedad",
        desc: "Envía información básica y fotos de tu inmueble de forma segura.",
    },
    {
        icon: <FaChartBar size={32} className="text-gray-300" />,
        title: "Análisis profundo del mercado actual",
        desc: "Revisamos comparables y tendencias para determinar el valor real.",
    },
    {
        icon: <FaFileContract size={32} className="text-gray-300" />,
        title: "Recibe tu propuesta de valor personalizada",
        desc: "Documento detallado con estrategia específica para tu propiedad.",
    },
    {
        icon: <FaComments size={32} className="text-gray-300" />,
        title: "Conversación directa con Marisol Ramos",
        desc: "Llamada privada para resolver dudas y definir próximos pasos.",
    },
];

export function ProcessSteps() {
    return (
        <section id="proceso" className="py-24 bg-white text-charcoal">
            <div className="container-wide text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Proceso</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-4 text-black">
                    Cuatro pasos hacia el éxito de tu propiedad
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Un proceso claro y transparente diseñado para maximizar el valor de tu inmueble.
                    Desde el primer contacto hasta la propuesta final, cada paso cuenta.
                </p>
            </div>

            <div className="container-wide grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                        <div className="w-full aspect-video bg-gray-100 flex items-center justify-center mb-8 relative group cursor-default">
                            {/* Placeholder image style */}
                            <div className="text-6xl opacity-20">{step.icon}</div>
                        </div>
                        <h3 className="text-lg font-bold mb-4 px-4">{step.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed px-2">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16 flex justify-center gap-4">
                <button className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                    Comenzar
                </button>
                <button className="px-8 py-3 text-charcoal text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors flex items-center gap-1">
                    Más ›
                </button>
            </div>
        </section>
    );
}
