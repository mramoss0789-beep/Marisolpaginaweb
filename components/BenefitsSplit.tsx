"use client";

import React from "react";
import Link from "next/link";
import { FaRegCheckCircle, FaChartLine, FaShieldAlt, FaHandHoldingHeart } from "react-icons/fa";

const benefits = [
    {
        icon: <FaShieldAlt size={24} />,
        title: "Tranquilidad garantizada",
        desc: "Proceso seguro de inicio a fin sin sorpresas desagradables.",
    },
    {
        icon: <FaChartLine size={24} />,
        title: "Máxima plusvalía",
        desc: "Estrategia de mercado que obtiene el verdadero valor patrimonial.",
    },
    {
        icon: <FaRegCheckCircle size={24} />,
        title: "Cierre efectivo",
        desc: "Negociación experta que protege tus intereses en cada detalle.",
    },
    {
        icon: <FaHandshakeSimple size={24} />, // Custom icon placeholder
        title: "Acompałamiento total",
        desc: "Marisol te guía en cada paso hasta la transferencia final.",
    },
];

// Helper for custom icon if needed, or use generic
import { FaHandshake as FaHandshakeSimple } from "react-icons/fa";

export function BenefitsSplit() {
    return (
        <section className="py-24 bg-white text-charcoal">
            <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Large Image */}
                <div className="relative aspect-square bg-gray-100">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop')" }}></div>
                </div>

                {/* Grid Content */}
                <div>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16">
                        {benefits.map((benefit, idx) => (
                            <div key={idx}>
                                <div className="mb-6 text-charcoal">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold font-serif mb-4">{benefit.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                    {benefit.desc}
                                </p>
                                <Link href="/servicios" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-brand transition-colors">
                                    Más <span className="text-lg">›</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
