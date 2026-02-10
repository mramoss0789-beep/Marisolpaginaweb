"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        text: "Marisol me ayudó a fijar un precio realista desde el inicio. Me explicó cómo estaba el mercado y eso hizo que el proceso fuera mucho más rápido. Siempre estuvo al pendiente de las visitas y me mantuvo informado. Fue una experiencia muy tranquila.",
        author: "Carlos Mendoza",
        rating: 5,
        image: "/images/testimonials/1.jpg",
        type: "full"
    },
    {
        id: 2,
        text: "Yo no tenía tiempo para atender llamadas ni mostrar el departamento. Marisol se encargó de todo y me presentó solo a candidatos bien filtrados. En menos de un mes ya estaba rentado y con un buen perfil de inquilino.",
        author: "Jorge Salinas",
        rating: 5,
        image: "/images/testimonials/2.jpg",
        type: "full",
        imagePosition: "center"
    },
    {
        id: 3,
        text: "Estábamos buscando casa desde hacía meses y no encontrábamos algo que nos convenciera. Marisol entendió perfecto lo que necesitábamos y nos enseñó opciones muy bien pensadas. Al final encontramos una casa que nos encantó y todo el proceso fue muy claro.",
        author: "Andrés Villalobos",
        rating: 5,
        image: "/images/testimonials/3.jpg",
        type: "full"
    },
    {
        id: 4,
        text: "No sabía por dónde empezar con la venta de una casa familiar. Marisol me orientó con todo: papeles, precio, estrategia y visitas. Se nota su experiencia y su forma de explicar las cosas te da mucha confianza.",
        author: "Patricia Gómez",
        rating: 5,
        image: "/images/testimonials/4.jpg",
        type: "full",
        imagePosition: "center"
    },
    {
        id: 5,
        text: "Quería rentar mi departamento pero me preocupaba elegir mal al inquilino. Marisol fue muy cuidadosa con el filtro y me explicó cada paso. Me sentí acompañada todo el tiempo y el proceso fue más sencillo de lo que esperaba.",
        author: "Luis Herrera",
        rating: 5,
        image: "/images/testimonials/5.jpg",
        type: "full",
        imagePosition: "center"
    },
    {
        id: 6,
        text: "Era mi primera compra y tenía muchas dudas. Marisol tuvo mucha paciencia para explicarme todo y nunca me presionó. Me ayudó a tomar una decisión tranquila y bien informada. La recomiendo mucho.",
        author: "Verónica Torres",
        rating: 5,
        image: "/images/testimonials/6.jpg",
        type: "full"
    },
];

export function Testimonials() {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <section className="bg-[#FDF0F2] py-24 lg:py-32 overflow-hidden relative" id="testimonios">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Sticky Header & Video */}
                    <div className="flex flex-col justify-center h-fit lg:sticky lg:top-32 self-start gap-12">
                        <div>
                            <h2 className="text-5xl lg:text-[5rem] font-serif text-charcoal font-bold tracking-tight leading-none mb-6">
                                Testimonios
                            </h2>
                            <p className="text-xl text-charcoal/60 font-medium">
                                Lo que dicen nuestros clientes
                            </p>
                        </div>

                        {/* Video Container - Manual Play */}
                        <div
                            className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                            {!isPlaying ? (
                                /* Cover Image State */
                                <div className="absolute inset-0 bg-[#FDF0F2] flex items-center justify-center">
                                    <img
                                        src="/videos/testimonials/gracias-3.svg"
                                        alt="Gracias"
                                        className="w-full h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                                        <div className="w-20 h-20 rounded-full bg-[#d35c6a] text-white flex items-center justify-center pl-1 shadow-2xl scale-100 group-hover:scale-110 transition-transform duration-300">
                                            <FaPlay size={24} />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Video State */
                                <video
                                    src="/videos/testimonials/video-2.mp4"
                                    className="w-full h-full object-contain bg-black"
                                    autoPlay
                                    playsInline
                                    controls
                                />
                            )}
                        </div>

                        {/* Removed 'Leer Más' Button */}
                    </div>

                    {/* Right Column: Vertical Infinite Scroll */}
                    <div className="relative h-[900px] overflow-hidden mask-gradient-vertical">
                        {/* Gradient Mask for smooth fade in/out */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FDF0F2] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDF0F2] to-transparent z-10 pointer-events-none"></div>

                        <VerticalTicker duration={60}>
                            {testimonials.map((t) => (
                                <TestimonialCard key={t.id} data={t} />
                            ))}
                        </VerticalTicker>
                    </div>

                </div>
            </div>
        </section>
    );
}

function VerticalTicker({ children, duration = 40 }: { children: React.ReactNode, duration?: number }) {
    return (
        <div className="flex flex-col relative w-full">
            <motion.div
                className="flex flex-col gap-8"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration,
                }}
            >
                {/* Original */}
                {children}
                {/* Duplicate for Loop */}
                {children}
            </motion.div>
        </div>
    );
}

function TestimonialCard({ data }: { data: any }) {
    return (
        <div className="bg-white rounded-3xl p-8 border border-[#d35c6a]/10 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Large Cover Image for 'Full' cards */}
            {data.type === 'full' && data.image && (
                <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden relative">
                    <img
                        src={data.image}
                        alt={data.author}
                        className={`w-full h-full object-cover ${data.imagePosition === 'center' ? 'object-center' : 'object-top'} transform group-hover:scale-105 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            )}

            <div className="flex flex-col gap-4">
                <div className="flex gap-1 text-[#d35c6a]">
                    {[...Array(data.rating)].map((_, i) => (
                        <FaStar key={i} size={16} />
                    ))}
                </div>

                <p className="text-xl text-charcoal/80 font-medium leading-relaxed font-serif italic">
                    "{data.text}"
                </p>

                <div className="mt-2 pt-4 border-t border-pink-50">
                    <h4 className="font-bold text-charcoal text-lg">{data.author}</h4>
                </div>
            </div>
        </div>
    );
}
