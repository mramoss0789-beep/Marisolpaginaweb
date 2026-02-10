"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaKey, FaHandshake } from "react-icons/fa";

const services = [
    {
        icon: FaHome,
        title: "Venta de Propiedades",
        description: "Transformo tu propiedad en un producto de deseo. Estrategia comercial, valuación precisa y exposición premium para cierres exitosos.",
        action: "Vender mi propiedad",
        link: "?service=vender#contact"
    },
    {
        icon: FaKey,
        title: "Renta Segura",
        description: "Encuentra al inquilino ideal sin riesgos. Investigación exhaustiva y protección jurídica para blindar tu patrimonio.",
        action: "Rentar mi propiedad",
        link: "?service=rentar#contact"
    },
    {
        icon: FaHandshake,
        title: "Ayuda para Comprar",
        description: "Accede a inventario exclusivo y off-market. Te guío desde la búsqueda hasta la firma, negociando el mejor precio para ti.",
        action: "Buscar propiedad",
        link: "?service=comprar#contact"
    }
];

export function ServicesOverview() {
    return (
        <section className="py-24 lg:py-32 bg-[#FDF0F2] overflow-hidden" id="services">
            <div className="container-wide">
                <div className="text-center mb-24 relative">
                    <div className="overflow-hidden inline-block relative px-4 text-center mx-auto">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl lg:text-7xl font-serif text-charcoal mb-2 relative z-10"
                        >
                            Servicios Exclusivos
                        </motion.h2>
                        {/* Animated Underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                            className="h-1 bg-[#d35c6a] w-full mt-4 origin-left"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-charcoal/60 max-w-2xl mx-auto text-lg leading-relaxed mt-10 text-balance"
                    >
                        Soluciones inmobiliarias de alto nivel diseñadas para maximizar el valor de tu tiempo y patrimonio.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2 + 0.4,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{
                                y: -15,
                                boxShadow: "0 25px 50px -12px rgba(211, 92, 106, 0.15)",
                                borderColor: "rgba(255, 255, 255, 1)",
                                transition: { duration: 0.4 }
                            }}
                            className="group relative bg-white p-10 lg:p-14 rounded-[2rem] shadow-sm transition-all duration-500 border border-transparent/50 flex flex-col justify-between h-full"
                        >
                            {/* Hover Gradient Background (Subtle) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FDF0F2] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />

                            <div className="relative z-10">
                                {/* Elegant Icon with Reveal */}
                                <motion.div
                                    className="text-[#d35c6a] text-5xl mb-8 origin-left inline-block"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <service.icon />
                                </motion.div>

                                <h3 className="text-3xl font-serif text-charcoal mb-6 group-hover:text-[#d35c6a] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-charcoal/60 leading-relaxed mb-10 text-lg text-pretty">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <Link
                                    href={service.link}
                                    className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-charcoal/40 group-hover:text-[#d35c6a] transition-colors duration-300 w-fit"
                                >
                                    <span className="border-b border-transparent group-hover:border-[#d35c6a] pb-1 transition-all">
                                        {service.action}
                                    </span>
                                    <motion.span
                                        className="ml-2 inline-block"
                                        initial={{ x: 0, opacity: 0 }}
                                        whileHover={{ x: 5, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
