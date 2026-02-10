"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                Soluciones
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Estrategia experta para maximizar tu patrimonio
              </h2>
              <p className="text-center md:text-md">
                Marisol combina mentoría personalizada con tecnología de punta.
                Cada propiedad recibe análisis profundo y negociación
                estratégica.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Mentoría personalizada
              </h3>
              <p className="text-center">
                Orientación directa adaptada a tu situación específica.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Tecnología inmobiliaria
              </h3>
              <p className="text-center">
                Herramientas modernas para valuación y marketing digital.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Negociación estratégica
              </h3>
              <p className="text-center">
                Experiencia en cerrar operaciones con máximo valor.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Análisis de mercado
              </h3>
              <p className="text-center">
                Datos actualizados para decisiones informadas y seguras.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Descubrir" variant="secondary">
              Descubrir
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
