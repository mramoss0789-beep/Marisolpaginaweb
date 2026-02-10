"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

export function ContactSection() {
    // START: Pre-fill Logic
    const searchParams = useSearchParams();
    const [selectedService, setSelectedService] = React.useState("");
    const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

    React.useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (serviceParam) {
            switch (serviceParam) {
                case "vender":
                    setSelectedService("Quiero Vender mi Propiedad");
                    break;
                case "comprar":
                    setSelectedService("Busco Comprar una Propiedad");
                    break;
                case "rentar":
                    setSelectedService("Busco Rentar mi Propiedad");
                    break;
                default:
                    break;
            }
        }
    }, [searchParams]);
    // END: Pre-fill Logic

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/xaqdyqlq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus("success");
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            setFormStatus("error");
        }
    };

    return (
        <section className="py-24 lg:py-32 bg-[#FDF0F2] text-charcoal" id="contact">
            <div className="container-wide max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-serif font-medium mb-6 text-charcoal">
                        ¿Empezamos?
                    </h2>
                    <p className="text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
                        Cuéntame brevemente sobre tu propiedad o lo que buscas.
                        <br />
                        <span className="block mt-1">Unas pocas frases son perfectas.</span>
                    </p>
                </div>

                {formStatus === "success" ? (
                    <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-2xl mx-auto mb-20 animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6 text-3xl">✓</div>
                        <h3 className="text-3xl font-serif mb-4">¡Mensaje Recibido!</h3>
                        <p className="text-charcoal/60 text-lg">Gracias por contactarme. Revisaré tu mensaje y te responderé a la brevedad posible.</p>
                        <button onClick={() => setFormStatus("idle")} className="mt-8 text-xs font-bold uppercase tracking-widest text-[#d35c6a] hover:text-charcoal transition-colors">Enviar otro mensaje</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-12 mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#d35c6a]/10 pb-12">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">
                                    Nombre Completo *
                                </label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Tu nombre"
                                    className="w-full bg-transparent border-b border-charcoal/10 py-4 text-xl placeholder:text-charcoal/30 focus:outline-none focus:border-[#d35c6a] transition-colors text-charcoal"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">
                                    Correo Electrónico *
                                </label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="hola@tucorreo.com"
                                    className="w-full bg-transparent border-b border-charcoal/10 py-4 text-xl placeholder:text-charcoal/30 focus:outline-none focus:border-[#d35c6a] transition-colors text-charcoal"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#d35c6a]/10 pb-12">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">
                                    Número de Celular *
                                </label>
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    id="phone"
                                    placeholder="+52 ..."
                                    className="w-full bg-transparent border-b border-charcoal/10 py-4 text-xl placeholder:text-charcoal/30 focus:outline-none focus:border-[#d35c6a] transition-colors text-charcoal"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">
                                    ¿Qué buscas? *
                                </label>
                                <select
                                    required
                                    name="service"
                                    id="service"
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="w-full bg-transparent border-b border-charcoal/10 py-4 text-xl text-charcoal focus:outline-none focus:border-[#d35c6a] transition-colors appearance-none"
                                >
                                    <option value="" disabled>Selecciona una opción...</option>
                                    <option className="bg-white" value="Quiero Vender mi Propiedad">Quiero Vender mi Propiedad</option>
                                    <option className="bg-white" value="Busco Comprar una Propiedad">Busco Comprar una Propiedad</option>
                                    <option className="bg-white" value="Busco Rentar mi Propiedad">Busco Rentar mi Propiedad</option>
                                    <option className="bg-white" value="Necesito una Valuación">Necesito una Valuación</option>
                                    <option className="bg-white" value="Solo Información General">Solo Información General</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">
                                Cuéntame más
                            </label>
                            <textarea
                                required
                                name="message"
                                id="message"
                                rows={4}
                                placeholder="Detalles sobre la ubicación, tamaño, presupuesto, etc..."
                                className="w-full bg-transparent border-b border-charcoal/10 py-4 text-xl placeholder:text-charcoal/30 focus:outline-none focus:border-[#d35c6a] transition-colors resize-none text-charcoal"
                            />
                        </div>

                        <div className="flex justify-center pt-8">
                            <button
                                disabled={formStatus === "submitting"}
                                type="submit"
                                className="px-12 py-5 bg-[#d35c6a] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-charcoal transition-colors shadow-lg disabled:opacity-50 disabled:cursor-wait"
                            >
                                {formStatus === "submitting" ? "Enviando..." : "Enviar Solicitud"}
                            </button>
                        </div>
                        {formStatus === "error" && (
                            <p className="text-red-500 text-center mt-4">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
                        )}
                    </form>
                )}

                <div className="text-center pt-10 border-t border-[#d35c6a]/10">
                    <p className="text-charcoal/60 text-sm mb-4">¿Prefieres un chat rápido?</p>
                    <a
                        href="https://wa.me/525554148142?text=Hola%20Marisol%2C%20vi%20tus%20servicios%20en%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[#d35c6a] font-bold text-lg hover:text-charcoal transition-colors group"
                    >
                        <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform" />
                        Mándame un WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
