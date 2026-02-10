"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Obtén tu evaluación hoy
          </h2>
          <p className="md:text-md">
            Completa este formulario y recibe un análisis detallado de tu
            propiedad
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Enviar">Enviar</Button>
            <Button title="Comenzar" variant="secondary">
              Comenzar
            </Button>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
