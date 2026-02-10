"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer15() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-10 md:gap-y-16 md:pb-14 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-16">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">
                Recibe actualizaciones sobre propiedades exclusivas y consejos
                de mercado directo en tu bandeja.
              </p>
              <p className="mb-5 text-sm md:mb-6">
                Paseo de la Reforma 505, México City
              </p>
              <p className="mb-1 text-sm font-semibold">Contacto</p>
              <a
                href="tel:1800 123 4567"
                className="mb-1 block text-sm underline decoration-black underline-offset-1"
              >
                +52 55 1234 5678
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@relume.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <BiLogoYoutube className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Inicio</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Servicios</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Testimonios</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Contacto</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Recursos</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Sobre Marisol</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Metodología</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Galería</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Blog</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Prensa</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-8 md:pb-10 lg:pb-12">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/company-name.svg"
              alt="Company image"
              className="inline-block"
            />
          </a>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Política de privacidad</a>
            </li>
            <li className="underline">
              <a href="#">Términos de servicio</a>
            </li>
            <li className="underline">
              <a href="#">Configuración de cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
