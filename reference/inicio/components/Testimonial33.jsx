"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const leftCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10rem", "5rem"],
  );
  const rightCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const rightCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["10rem", "-5rem"],
  );

  const leftCards = isMobile ? leftCardsMobile : leftCardsDesktop;
  const rightCards = isMobile ? rightCardsMobile : rightCardsDesktop;

  return {
    sectionRef,
    leftCards,
    rightCards,
  };
};

export function Testimonial33() {
  const animationState = useAnimation();
  return (
    <section
      id="relume"
      ref={animationState.sectionRef}
      className="overflow-hidden px-[5%] py-12 md:py-16 lg:py-20"
      ref={animationState.sectionRef}
    >
      <div className="border-border-primary container grid min-h-svh auto-cols-fr grid-cols-1 overflow-hidden border lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="lg:text-10xl mb-5 text-6xl font-bold md:mb-6 md:text-9xl">
              Testimonios
            </h2>
            <p className="md:text-md">Lo que dicen nuestros clientes</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button title="Leer" variant="secondary">
              Leer
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
        <div className="border-border-primary grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pl-0 lg:pr-12">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Su mentoría cambió mi perspectiva sobre inversión
                    inmobiliaria. Ahora tengo un portafolio sólido gracias a sus
                    consejos."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Elena Gutiérrez</p>
                    <p>Inversionista, Condesa</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Profesional, empática y con resultados reales. Recomiendo a
                    Marisol sin dudarlo a cualquiera que busque vender o
                    rentar."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Roberto Silva</p>
                    <p>Empresario, Lomas</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Su equipo manejó todo con precisión. Cerré en tiempo récord
                    sin estrés ni sorpresas."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Andrés Moreno</p>
                    <p>Empresario, Lomas</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Encontré en Marisol la mentoría que necesitaba para
                    entender el verdadero valor de mis activos."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Verónica Castillo</p>
                    <p>Inversionista, Condesa</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: animationState.rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Marisol hizo que el proceso fuera simple y seguro. Vendí mi
                    propiedad en tiempo récord y por el precio que merecía."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 5"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Carlos Mendoza</p>
                    <p>Propietario, Polanco</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Después de años dudando, su claridad me permitió invertir
                    con confianza en el mercado."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 6"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Guillermo Ruiz</p>
                    <p>Inversionista, Coyoacán</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Marisol no solo vendió mi casa, la colocó en manos seguras
                    con el precio que realmente valía."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 7"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Fernanda López</p>
                    <p>Vendedora, San Ángel</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Profesional de verdad. Negoció mejor de lo que yo hubiera
                    podido imaginar."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 8"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Ricardo Flores</p>
                    <p>Vendedor, Reforma</p>
                  </div>
                </div>
              </div>
              <div className="border-border-primary flex w-full flex-col items-start justify-between border p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="md:text-md">
                    "Transparencia total. Cada paso fue explicado y cada
                    decisión fue mía, pero informada."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 9"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                  />
                  <div>
                    <p className="font-semibold">Mariana Sánchez</p>
                    <p>Propietaria, Polanco</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
