"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export function CallToAction() {
    return (
        <section id="cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
            <div className="container flex flex-col items-center">
                <div className="mb-12 max-w-2xl text-center md:mb-18 lg:mb-20">
                    <h2 className="rb-5 mb-5 text-4xl font-serif font-bold md:mb-6 md:text-6xl text-black">
                        Tu propiedad merece expertos
                    </h2>
                    <p className="md:text-lg text-gray-600">
                        No arriesgues tu patrimonio. Obtén una evaluación profesional y descubre el verdadero valor de mercado de tu inmueble.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link href="/evaluacion">
                            <Button title="Evaluar" className="bg-[#d35c6a] border-[#d35c6a] hover:bg-[#b04a56] text-white px-8 py-3">
                                Solicitar Evaluación
                            </Button>
                        </Link>
                        <Link href="https://wa.me/525512345678" target="_blank">
                            <Button title="Contactar" variant="secondary" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                                Agendar Llamada
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="w-full max-w-4xl h-[400px] bg-gray-200 relative overflow-hidden rounded-lg">
                    {/* Placeholder for high-quality real estate image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-lg">Imagen Destacada de Propiedad de Lujo</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
