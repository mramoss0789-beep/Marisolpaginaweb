"use client";

import React from "react";
import Image from "next/image";

export function TrustBar() {
    return (
        <section id="trust-bar" className="overflow-hidden py-12 md:py-16 lg:py-20 bg-white border-b border-gray-100">
            <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
                <h2 className="text-center text-sm font-bold tracking-widest uppercase text-gray-500">
                    Respaldada por líderes inmobiliarios
                </h2>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16 opacity-70 grayscale">
                {/* Placeholder for real logos: Century 21, Quality Inmobiliaria, AMPI, etc.
             Using text placeholders for now until assets are ready or verified.
          */}
                <div className="text-xl font-bold font-serif text-gray-400">CENTURY 21</div>
                <div className="text-xl font-bold font-serif text-gray-400">QUALITY INMOBILIARIA</div>
                <div className="text-xl font-bold font-serif text-gray-400">AMPI</div>
                <div className="text-xl font-bold font-serif text-gray-400">REALTOR®</div>
            </div>
        </section>
    );
}
