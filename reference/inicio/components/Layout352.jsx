"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const useAnimation = (projects) => {
  const refs = timelineItems.map(() => useRef(null));
  const computedStyles = refs.map((ref) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });
    const opacity = {
      opacity: useTransform(
        scrollYProgress,
        [0, 0.5, 0.85, 1],
        [0, 0.25, 0.75, 1],
      ),
    };
    const backgroundColor = {
      backgroundColor: useTransform(scrollYProgress, [0, 1], ["#ccc", "#000"]),
    };
    return {
      opacity,
      backgroundColor,
    };
  });
  return {
    refs,
    computedStyles,
  };
};

export function Layout352() {
  const useActive = useAnimation([
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
      timelineButtons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 2",
      },
      timelineButtons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
      timelineButtons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 4",
      },
      timelineButtons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 4",
      },
      timelineButtons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ]);
  return (
    <section id="relume" className="relative z-0">
      <div className="relative -z-30">
        <div>
          <div className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="mx-auto max-w-lg text-center">
                <p className="mb-3 font-semibold md:mb-4">Valuación</p>
                <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Análisis profundo de tu propiedad
                </h1>
                <p className="md:text-md">
                  Campañas digitales dirigidas a compradores calificados.
                  Fotografía profesional, videos y posicionamiento en
                  plataformas de alto tráfico aseguran máxima exposición.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                  <Button title="Evaluar" variant="secondary">
                    Evaluar
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
          </div>
          <div className="px-[5%]">
            <div className="container">
              <div className="relative flex flex-col items-center justify-center">
                <div className="absolute left-1.5 -z-20 h-full w-[3px] bg-neutral-lighter md:left-auto">
                  <div className="fixed bottom-[50vh] top-0 -z-10 h-[50vh] w-[3px] bg-neutral-black" />
                  <div className="absolute left-0 right-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-white to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 z-10 h-24 w-full bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
                  <motion.div
                    className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
                    style={useActive.computedStyles[0].opacity}
                  >
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                      Estrategia
                    </h3>
                  </motion.div>
                  <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
                    <motion.div
                      ref={useActive.refs[0]}
                      style={useActive.computedStyles[0].backgroundColor}
                      className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
                      ref={useActive.refs[0]}
                    />
                  </div>
                  <motion.div style={useActive.computedStyles[0].opacity}>
                    <div className="mb-10 md:mb-14 lg:mb-16">
                      <p className="md:text-md">
                        Marisol negocia cada detalle protegiendo tus intereses.
                        Su experiencia en cientos de operaciones garantiza
                        acuerdos sólidos y seguros.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Explorar" variant="secondary">
                          Explorar
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
                    <div className="overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 1"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
                  <motion.div
                    className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
                    style={useActive.computedStyles[1].opacity}
                  >
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                      Estrategia
                    </h3>
                  </motion.div>
                  <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
                    <motion.div
                      ref={useActive.refs[1]}
                      style={useActive.computedStyles[1].backgroundColor}
                      className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
                      ref={useActive.refs[1]}
                    />
                  </div>
                  <motion.div style={useActive.computedStyles[1].opacity}>
                    <div className="mb-10 md:mb-14 lg:mb-16">
                      <p className="md:text-md">
                        Marisol negocia cada detalle protegiendo tus intereses.
                        Su experiencia en cientos de operaciones garantiza
                        acuerdos sólidos y seguros.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Explorar" variant="secondary">
                          Explorar
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
                    <div className="overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 2"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
                  <motion.div
                    className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
                    style={useActive.computedStyles[2].opacity}
                  >
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                      Estrategia
                    </h3>
                  </motion.div>
                  <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
                    <motion.div
                      ref={useActive.refs[2]}
                      style={useActive.computedStyles[2].backgroundColor}
                      className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
                      ref={useActive.refs[2]}
                    />
                  </div>
                  <motion.div style={useActive.computedStyles[2].opacity}>
                    <div className="mb-10 md:mb-14 lg:mb-16">
                      <p className="md:text-md">
                        Marisol negocia cada detalle protegiendo tus intereses.
                        Su experiencia en cientos de operaciones garantiza
                        acuerdos sólidos y seguros.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Explorar" variant="secondary">
                          Explorar
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
                    <div className="overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 3"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
                  <motion.div
                    className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
                    style={useActive.computedStyles[3].opacity}
                  >
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                      Estrategia
                    </h3>
                  </motion.div>
                  <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
                    <motion.div
                      ref={useActive.refs[3]}
                      style={useActive.computedStyles[3].backgroundColor}
                      className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
                      ref={useActive.refs[3]}
                    />
                  </div>
                  <motion.div style={useActive.computedStyles[3].opacity}>
                    <div className="mb-10 md:mb-14 lg:mb-16">
                      <p className="md:text-md">
                        Marisol negocia cada detalle protegiendo tus intereses.
                        Su experiencia en cientos de operaciones garantiza
                        acuerdos sólidos y seguros.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Explorar" variant="secondary">
                          Explorar
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
                    <div className="overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 4"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
                  <motion.div
                    className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
                    style={useActive.computedStyles[4].opacity}
                  >
                    <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                      Estrategia
                    </h3>
                  </motion.div>
                  <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
                    <motion.div
                      ref={useActive.refs[4]}
                      style={useActive.computedStyles[4].backgroundColor}
                      className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
                      ref={useActive.refs[4]}
                    />
                  </div>
                  <motion.div style={useActive.computedStyles[4].opacity}>
                    <div className="mb-10 md:mb-14 lg:mb-16">
                      <p className="md:text-md">
                        Marisol negocia cada detalle protegiendo tus intereses.
                        Su experiencia en cientos de operaciones garantiza
                        acuerdos sólidos y seguros.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Explorar" variant="secondary">
                          Explorar
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
                    <div className="overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder image 4"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="mx-auto max-w-lg text-center">
                <p className="mb-3 font-semibold md:mb-4">Marketing</p>
                <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Visibilidad estratégica en el mercado
                </h1>
                <p className="md:text-md">Más</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                  <Button title="Evaluar" variant="secondary">
                    Evaluar
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
          </div>
        </div>
      </div>
    </section>
  );
}
