"use client";

import React from "react";
import { FaExclamationTriangle, FaFileContract, FaRegClock, FaMoneyBillWave } from "react-icons/fa";

const risks = [
    {
        id: 1,
        title: "Fraudes y estafas",
        desc: "Sin verificación profesional, los compradores inescrupulosos aprovechan la falta de experiencia. Falsificaciones de documentos y esquemas de pago fraudulentos son comunes en transacciones sin asesoría.",
        icon: FaExclamationTriangle,
        color: "bg-white",
    },
    {
        id: 2,
        title: "Procesos lentos",
        desc: "Una propiedad mal promocionada puede estancarse meses en el mercado. El tiempo es dinero, y una propiedad 'quemada' pierde valor percibido ante los compradores serios.",
        icon: FaRegClock,
        color: "bg-white",
    },
    {
        id: 3,
        title: "Pérdida de valor",
        desc: "Negociar sin expertos suele resultar en concesiones innecesarias. Se estima que entre el 10% y 15% del valor real puede perderse por una mala defensa del precio y\u00A0condiciones.",
        icon: FaMoneyBillWave,
        color: "bg-white",
    },
    {
        id: 4,
        title: "Riesgos Legales",
        desc: "Contratos mal redactados o cláusulas de extinción de dominio no revisadas pueden poner en riesgo no solo la venta actual, sino tu patrimonio entero y tu libertad legal.",
        icon: FaFileContract,
        color: "bg-white",
    },
];

export function RisksSection() {
    return (
        <section className="bg-[#FDF0F2] relative">

            {/* 1. Sticky Header Layer */}
            {/* Remains pinned to the center of the viewport while cards scroll over it */}
            <div className="sticky top-0 h-screen flex items-center justify-center z-0 pointer-events-none">
                <h2 className="text-5xl lg:text-[7rem] font-serif text-[#d35c6a] font-bold tracking-tighter text-center leading-none uppercase">
                    Riesgos <br /> del Mercado
                </h2>
            </div>

            {/* 2. Scrolling Cards Layer */}
            {/* Placed relative z-10 to scroll naturally OVER the sticky header */}
            <div className="relative z-10 -mt-[80vh] pb-40 container-wide">
                <div className="max-w-3xl mx-auto space-y-32">
                    {/* Spacer to let the header breathe before cards start arriving? 
                        The user says "siguen dando scroll y justo encima de esa frase, las tarjetas se amontonan".
                        So we need some scroll distance before the first card hits.
                    */}
                    <div className="h-[50vh]"></div>

                    {risks.map((risk, index) => (
                        <div
                            key={risk.id}
                            className="sticky top-1/4 mx-auto w-full"
                            style={{
                                zIndex: index + 10, // Higher than header
                                marginTop: index * 20, // Optional slight offset if needed, but space-y handles gap
                            }}
                        >
                            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-pink-100 flex flex-col gap-6 relative overflow-hidden group transition-transform duration-500">
                                {/* Decorative Icon Background */}
                                <div className="absolute -right-8 -top-8 text-pink-50 opacity-50 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <risk.icon size={200} className="text-brand/5" />
                                </div>

                                <div className="relative z-10 w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-2">
                                    <risk.icon size={32} className="text-brand" />
                                </div>

                                <h3 className="relative z-10 text-3xl font-serif text-charcoal">
                                    {risk.title}
                                </h3>

                                <p className="relative z-10 text-lg text-charcoal/70 leading-relaxed font-light">
                                    {risk.desc}
                                </p>

                                <div className="absolute bottom-6 right-8 text-9xl font-serif text-gray-50 -z-0 pointer-events-none select-none">
                                    0{index + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
