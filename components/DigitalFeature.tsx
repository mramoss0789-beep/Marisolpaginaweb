"use client";

import React from "react";
import Link from "next/link";

export function DigitalFeature() {
    return (
        <section className="bg-[#6b6b6b] text-white py-32"> {/* Dark Gray from Screenshot */}
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Side */}
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-4 block">Digital</span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-8 leading-tight">
                        Tu propiedad brilla en el mundo digital
                    </h2>
                    <div className="space-y-6 max-w-md text-white/80 leading-relaxed font-light">
                        <p>
                            Tours virtuales en 3D, home staging digital y anuncios dirigidos a compradores de alto poder adquisitivo.
                        </p>
                        <p>
                            Cada detalle cuenta cuando se trata de vender en la ciudad.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link href="/evaluacion" className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#6b6b6b] transition-colors">
                            Explorar
                            <span className="text-lg">›</span>
                        </Link>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="relative">
                    <div className="aspect-video lg:aspect-square bg-white/5 rounded-sm overflow-hidden relative">
                        {/* Abstract/Digital placeholder */}
                        <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2670&auto=format&fit=crop')" }}></div>

                        {/* Floating UI Card Mockup */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-center opacity-50">
                                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                            </div>
                            <div className="space-y-3 opacity-50">
                                <div className="w-full h-24 bg-white/10 rounded-sm"></div>
                                <div className="w-full h-2 bg-white/20 rounded-full"></div>
                                <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
