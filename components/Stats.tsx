"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";

export function Stats() {
    return (
        <section id="stats" className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4 text-[#ffa6b1]">
                            Resultados probados
                        </p>
                        <h2 className="mb-5 text-4xl font-serif font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Dos décadas de excelencia en el mercado
                        </h2>
                        <p className="md:text-lg opacity-90">
                            Marisol ha cerrado cientos de operaciones inmobiliarias en Ciudad de México,
                            guiando a familias hacia sus mejores decisiones patrimoniales.
                            Su experiencia abarca desde propiedades residenciales hasta portafolios de inversión complejos.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link href="/servicios">
                                <Button variant="secondary-alt" className="bg-white text-black hover:bg-gray-100 border-none">Explorar Servicios</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-y-8 py-2 md:gap-y-12">
                        <div className="border-l-2 border-[#d35c6a] pl-8">
                            <p className="mb-2 text-6xl font-bold leading-[1.3] md:text-7xl lg:text-8xl">
                                20
                            </p>
                            <h3 className="text-lg font-bold leading-[1.4] md:text-xl text-[#ffa6b1]">
                                Años de trayectoria
                            </h3>
                            <p className="mt-2 text-sm opacity-80">
                                Guiando transacciones seguras en CDMX
                            </p>
                        </div>
                        <div className="border-l-2 border-[#d35c6a] pl-8">
                            <p className="mb-2 text-6xl font-bold leading-[1.3] md:text-7xl lg:text-8xl">
                                800+
                            </p>
                            <h3 className="text-lg font-bold leading-[1.4] md:text-xl text-[#ffa6b1]">
                                Operaciones cerradas
                            </h3>
                            <p className="mt-2 text-sm opacity-80">
                                Familias satisfechas con su venta o renta
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0 bg-black">
                {/* Replaced video with static dark background or accessible image if needed for performance.
             Can re-enable video if asset is provided using <video> or Background Video component.
             For now, using a dark overlay over a solid color to ensure text readability.
         */}
                <div className="absolute inset-0 bg-black/80" />
                {/* Example of video background if needed:
         <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted playsInline>
           <source src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-black/70" />
         */}
            </div>
        </section>
    );
}
