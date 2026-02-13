"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";

export function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);

    return (
        <footer className="bg-white text-charcoal pt-20 pb-8 border-t border-gray-100 overflow-hidden">
            <div className="container-wide">

                {/* Social Strip */}
                <div className="grid grid-cols-3 gap-2 mb-4 max-w-2xl mx-auto">
                    <a href="https://www.instagram.com/marisolramos.look/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="bg-[#da727e] text-white min-h-[48px] py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-sm group">
                        <FaInstagram className="text-base group-hover:rotate-12 transition-transform" />
                        <span className="font-bold text-[10px] tracking-widest uppercase">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61582474410782" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="bg-[#e08992] text-white min-h-[48px] py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-sm group">
                        <FaFacebookF className="text-sm group-hover:rotate-12 transition-transform" />
                        <span className="font-bold text-[10px] tracking-widest uppercase">Facebook</span>
                    </a>
                    <a href="https://www.youtube.com/@inmobiliariaqualitylema7832" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en YouTube" className="bg-[#e69fa6] text-white min-h-[48px] py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-sm group">
                        <FaYoutube className="text-base group-hover:rotate-12 transition-transform" />
                        <span className="font-bold text-[10px] tracking-widest uppercase">YouTube</span>
                    </a>
                </div>
            </div>

            {/* HUGE Typography - Full Bleed */}
            <div className="w-full border-b border-black mb-6 px-2 overflow-hidden">
                <h1 className="text-[10vw] xl:text-[10.5vw] leading-tight font-bold tracking-tighter text-black text-center uppercase whitespace-nowrap pb-6 pt-2">
                    Marisol Ramos
                </h1>
            </div>

            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
                    <p>© {new Date().getFullYear()} Marisol Ramos. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="hover:text-black transition-colors"
                        >
                            Aviso de Privacidad
                        </button>
                    </div>
                </div>
            </div>

            <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </footer>
    );
}
