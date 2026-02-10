"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout420() {
  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Proceso</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Metodología probada en dos décadas
                </h2>
                <p className="md:text-md">
                  No hay atajos en bienes raíces. Mi enfoque combina análisis
                  riguroso, conocimiento profundo del mercado y negociación
                  inteligente para resultados que hablan por sí solos.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Conocer" variant="secondary">
                    Conocer
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Análisis inicial
              </h3>
              <p>
                Evaluamos tu propiedad contra comparables actuales en CDMX.
                Datos reales, sin inflaciones ni especulaciones.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Análisis inicial
              </h3>
              <p>
                Evaluamos tu propiedad contra comparables actuales en CDMX.
                Datos reales, sin inflaciones ni especulaciones.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 2"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Análisis inicial
              </h3>
              <p>
                Evaluamos tu propiedad contra comparables actuales en CDMX.
                Datos reales, sin inflaciones ni especulaciones.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 3"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Análisis inicial
              </h3>
              <p>
                Evaluamos tu propiedad contra comparables actuales en CDMX.
                Datos reales, sin inflaciones ni especulaciones.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 4"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
