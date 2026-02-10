"use client";

import React from "react";
import Link from "next/link";
import { FaUserTie, FaChartLine, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const solutions = [
    {
        icon: <FaUserTie size={32} />,
        title: "Acompañamiento Total",
        desc: "Mentoría personalizada de inicio a fin. No estás solo; te guío en cada paso logístico y emocional hasta la firma.",
    },
    {
        icon: <FaChartLine size={32} />,
        title: "Valuación Estratégica",
        desc: "Análisis de mercado basado en datos reales y tecnología de punta para fijar el precio que maximiza tu retorno.",
    },
    {
        icon: <FaHandshake size={32} />,
        title: "Negociación Experta",
        desc: "Cierre efectivo sin dejar dinero en la mesa. Defiendo tu patrimonio con la firmeza de 19 años de experiencia.",
    },
    {
        icon: <FaShieldAlt size={32} />,
        title: "Tranquilidad Legal",
        desc: "Proceso jurídico blindado contra fraudes y extinción de dominio. Tu operación segura, sin sorpresas.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export function SolutionsGrid() {
    return (
        <section className="py-24 bg-white text-charcoal overflow-hidden">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Soluciones Integrales</span>
                    <h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                        Estrategia experta para <br /> maximizar tu patrimonio
                    </h2>
                    <p className="text-charcoal/60 font-light text-lg">
                        Combino la calidez de la mentoría humana con la precisión del análisis de datos.
                        Cada propiedad recibe una estrategia a la medida.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
                >
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-sand-light flex items-center justify-center mb-6 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-500 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-4">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="/evaluacion"
                        className="px-8 py-3 bg-brand text-white text-xs font-bold tracking-widest uppercase hover:bg-brand-dark transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        ¿Cuánto vale mi propiedad?
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-charcoal text-charcoal text-xs font-bold tracking-widest uppercase hover:bg-charcoal hover:text-white transition-all rounded-full"
                    >
                        CONTACTAR
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
