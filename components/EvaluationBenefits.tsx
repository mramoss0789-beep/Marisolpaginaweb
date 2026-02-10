"use client";

import React from "react";
import Link from "next/link";
import { FaRegSquare, FaChartPie, FaShieldAlt } from "react-icons/fa";
// Using generic icons to match the look: Square/Box, PieChart/Graph, Shield

const benefits = [
    {
        icon: <FaRegSquare size={24} />,
        title: "Valuación precisa",
        desc: "Análisis de mercado actual en CDMX con datos reales y comparables",
    },
    {
        icon: <FaChartPie size={24} />,
        title: "Estrategia personalizada",
        desc: "Plan diseñado específicamente para tu propiedad y objetivos financieros",
    },
    {
        icon: <FaShieldAlt size={24} />,
        title: "Seguridad jurídica",
        desc: "Protección legal completa en cada paso del proceso de venta o renta",
    },
];

export function EvaluationBenefits() {
    return (
        <section className="py-24 bg-white text-charcoal">
            <div className="container-wide grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Side: Benefits List */}
                <div>
                    <div className="space-y-12 mb-12">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="flex-shrink-0 mt-1">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 pl-[calc(24px+1.5rem)]"> {/* Align with text */}
                        <button className="px-8 py-3 border border-gray-300 text-charcoal text-xs font-bold uppercase tracking-widest hover:border-black transition-colors rounded-full">
                            Conocer
                        </button>
                        <Link href="#" className="flex items-center text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors">
                            Más ›
                        </Link>
                    </div>
                </div>

                {/* Right Side: Large Image */}
                <div className="w-full aspect-square bg-gray-100 relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop')" }}></div> {/* Modern Interior */}
                </div>

            </div>
        </section>
    );
}
