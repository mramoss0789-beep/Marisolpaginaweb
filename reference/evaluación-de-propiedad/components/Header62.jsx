"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Evaluación</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Tu propiedad merece más
        </h1>
        <p className="md:text-md">
          Descubre el valor real de tu inmueble con la asesoría de Marisol
          Ramos, Directora Inmobiliaria de lujo con 20 años de experiencia en
          CDMX
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Evaluar">Evaluar</Button>
          <Button title="Conocer" variant="secondary">
            Conocer
          </Button>
        </div>
      </div>
    </section>
  );
}
