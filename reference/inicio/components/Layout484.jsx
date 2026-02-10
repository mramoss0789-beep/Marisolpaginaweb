"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout484() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">Próximos pasos</p>
        <p className="text-5xl font-bold md:text-7xl lg:text-8xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <Button title="Button" variant="secondary">
            Button
          </Button>
          <Button
            title="Button"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Button
          </Button>
        </div>
      </div>
    </section>
  );
}
