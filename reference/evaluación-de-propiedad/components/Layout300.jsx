"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout300() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">Proceso</p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Cuatro pasos hacia el éxito de tu propiedad
            </h2>
            <p className="text-center md:text-md">
              Un proceso claro y transparente diseñado para maximizar el valor
              de tu inmueble. Desde el primer contacto hasta la propuesta final,
              cada paso cuenta.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Comparte los detalles de tu propiedad
              </h3>
              <p className="text-center">
                Envía información básica y fotos de tu inmueble de forma segura.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Análisis profundo del mercado actual
              </h3>
              <p className="text-center">
                Revisamos comparables y tendencias para determinar el valor
                real.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Recibe tu propuesta de valor personalizada
              </h3>
              <p className="text-center">
                Documento detallado con estrategia específica para tu propiedad.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Conversación directa con Marisol Ramos
              </h3>
              <p className="text-center">
                Llamada privada para resolver dudas y definir próximos pasos.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Comenzar" variant="secondary">
              Comenzar
            </Button>
            <Button
              title="Más"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
