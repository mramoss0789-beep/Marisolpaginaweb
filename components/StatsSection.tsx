"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
    {
        value: "20",
        label: "Años de trayectoria",
        sub: "Años guiando transacciones en México City",
    },
    {
        value: "800+",
        label: "Operaciones cerradas",
        sub: "Operaciones cerradas con éxito y confianza",
    },
];

export function StatsSection() {
    return (
        <section className="py-24 bg-charcoal text-white">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Resultados</span>
                        <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                            Dos décadas de excelencia en el mercado
                        </h2>
                        <p className="text-gray-400 text-lg font-light mb-8 max-w-md">
                            Marisol ha cerrado cientos de operaciones inmobiliarias en México City,
                            guiando a familias hacia sus mejores decisiones patrimoniales.
                            Su experiencia abarca desde propiedades residenciales hasta portafolios de inversión complejos.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/servicios" className="px-6 py-3 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors">
                                Explorar
                            </Link>
                            <Link href="/evaluacion" className="px-6 py-3 text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-brand transition-colors">
                                Más <span className="text-lg">›</span>
                            </Link>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 border-l border-white/10 pl-8 lg:pl-16">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <p className="text-6xl font-serif font-bold mb-2">{stat.value}</p>
                                <p className="text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-xs text-gray-400">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
