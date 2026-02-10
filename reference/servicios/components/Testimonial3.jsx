"use client";

import React from "react";

export function Testimonial3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Testimonios
          </h1>
          <p className="md:text-md">Lo que dicen nuestros clientes</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo"
                className="max-h-14"
              />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Marisol transformó la venta de mi propiedad en una experiencia
              sin estrés."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">Carlos Mendoza</p>
              <p>Propietario, Polanco</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo"
                className="max-h-14"
              />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Su conocimiento del mercado y negociación me permitió obtener el
              mejor precio."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">Elena Gutiérrez</p>
              <p>Vendedora, Condesa</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo"
                className="max-h-14"
              />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Profesional, dedicada y siempre disponible cuando la necesité."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold">Roberto Silva</p>
              <p>Inversor, Santa Fe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
