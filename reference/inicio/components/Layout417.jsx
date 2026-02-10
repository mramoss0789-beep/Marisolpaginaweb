"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const useRelume = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });
  const totalSections = featureSections.length;
  const transforms = (index) => {
    const sectionScrollStart = index / totalSections;
    const sectionScrollEnd = (index + 1) / totalSections;
    const rotate = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      index === totalSections - 1 ? [9, 9] : [0 + index * 3, -30],
    );
    const translateY = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      index === totalSections - 1 ? [undefined, undefined] : ["0vh", "-120vh"],
    );
    const translateX = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      index === totalSections - 1 ? [undefined, undefined] : ["0vw", "-10vw"],
    );
    const style = {
      rotate,
      translateY,
      translateX,
      zIndex: totalSections - index,
    };
    return { style };
  };
  return {
    containerRef,
    transforms,
  };
};

export function Layout417() {
  const useActive = useRelume({
    featureSections: [
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 1",
        },
        title: "Subheading one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 2",
        },
        title: "Subheading two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 3",
        },
        title: "Subheading three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
      {
        icon: {
          src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
          alt: "Relume logo 4",
        },
        title: "Subheading four",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      },
    ],
  });
  return (
    <section
      id="relume"
      ref={useActive.containerRef}
      ref={useActive.containerRef}
    >
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="sticky top-0 grid h-svh grid-cols-1 content-center items-center justify-center px-[5%] md:flex md:content-normal md:px-0 lg:h-screen">
            <div className="absolute bottom-auto left-0 right-0 top-0 flex w-full justify-center overflow-hidden pt-20 md:inset-auto md:pt-0">
              <h1 className="whitespace-nowrap text-9xl font-bold sm:text-[5.5rem] md:text-[7.5rem] lg:text-[10rem]">
                Los riesgos de vender sin asesoría profesional
              </h1>
            </div>
            <div className="sticky top-0 mx-auto mt-12 flex min-h-[24.5rem] w-full max-w-sm flex-col items-center justify-center sm:mt-24 md:relative lg:mt-0">
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:mx-0"
                style={useActive.transforms(0).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 1"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Fraudes y estafas
                </h3>
                <p>
                  Sin verificación profesional, los compradores inescrupulosos
                  aprovechan la falta de experiencia. Las falsificaciones de
                  documentos y esquemas de pago fraudulentos son comunes en
                  transacciones sin asesoría experta.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:mx-0"
                style={useActive.transforms(1).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 2"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Procesos lentos y costosos
                </h3>
                <p>
                  Sin verificación profesional, los compradores inescrupulosos
                  aprovechan la falta de experiencia. Las falsificaciones de
                  documentos y esquemas de pago fraudulentos son comunes en
                  transacciones sin asesoría experta.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:mx-0"
                style={useActive.transforms(2).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 3"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Pérdida de valor patrimonial
                </h3>
                <p>
                  Sin verificación profesional, los compradores inescrupulosos
                  aprovechan la falta de experiencia. Las falsificaciones de
                  documentos y esquemas de pago fraudulentos son comunes en
                  transacciones sin asesoría experta.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-border-primary bg-background-primary p-8 md:mx-0"
                style={useActive.transforms(3).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo 4"
                    className="size-12"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Documentos falsificados
                </h3>
                <p>
                  Sin verificación profesional, los compradores inescrupulosos
                  aprovechan la falta de experiencia. Las falsificaciones de
                  documentos y esquemas de pago fraudulentos son comunes en
                  transacciones sin asesoría experta.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
