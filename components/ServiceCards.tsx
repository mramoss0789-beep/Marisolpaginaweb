"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Valuación Técnica",
        desc: "No adivinamos el precio. Analizamos mercado, plusvalía y competencia para fijar el valor real de cierre.",
    },
    {
        num: "02",
        title: "Marketing Selectivo",
        desc: "Fotografía editorial y campañas segmentadas. Tu propiedad no se muestra a todo el mundo, solo al comprador correcto.",
    },
    {
        num: "03",
        title: "Filtrado de Seguridad",
        desc: "Investigación profunda de prospectos. Nadie entra a tu casa sin haber sido perfilado financieramente.",
    },
    {
        num: "04",
        title: "Cierre Jurídico",
        desc: "Acompañamiento notarial y contratos blindados. Protegemos tu patrimonio hasta que recibes el pago.",
    },
];

export function ServiceCards() {
    return (
        <section className="py-24 bg-sand text-charcoal">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-0">
                    <h2 className="text-4xl lg:text-5xl font-serif max-w-lg">
                        Una metodología probada para <span className="text-brand italic">proteger tu valor.</span>
                    </h2>
                    <Link href="/servicios" className="hidden md:inline-block text-sm font-bold tracking-widest uppercase border-b border-charcoal pb-1 hover:text-brand hover:border-brand transition-colors mt-8 md:mt-0">
                        Explorar Servicios Completos
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group bg-white p-8 h-full min-h-[300px] flex flex-col justify-between transition-shadow hover:shadow-xl"
                        >
                            <div>
                                <span className="block text-xs font-bold text-brand mb-4 tracking-widest">
                                    {service.num}
                                </span>
                                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-brand transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-charcoal/70 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="mt-8 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold uppercase tracking-widest">Saber más &rarr;</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/servicios" className="text-sm font-bold tracking-widest uppercase border-b border-charcoal pb-1">
                        Explorar Servicios
                    </Link>
                </div>
            </div>
        </section>
    );
}
