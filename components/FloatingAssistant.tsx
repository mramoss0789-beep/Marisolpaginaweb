"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingAssistant() {
    return (
        <a
            href="https://wa.me/525554148142?text=Hola%20Marisol%2C%20vi%20tus%20servicios%20en%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#d35c6a] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
            aria-label="Enviar WhatsApp a Marisol"
        >
            <FaWhatsapp size={28} />
        </a>
    );
}
