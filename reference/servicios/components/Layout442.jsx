"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout442() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              Digital
            </p>
            <h2 className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
              Tu propiedad brilla en el mundo digital
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-48">
            <p className="text-text-alternative md:text-md">
              Tours virtuales en 3D, home staging digital y anuncios dirigidos a
              compradores de alto poder adquisitivo. Cada detalle cuenta cuando
              se trata de vender en la ciudad.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explorar" variant="secondary-alt">
                Explorar
              </Button>
              <Button
                title="→"
                variant="link-alt"
                size="link"
                iconRight={<RxChevronRight />}
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
