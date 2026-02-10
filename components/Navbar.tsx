"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeroMode, setIsHeroMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            // HERO MODE LOGIC
            // Only active on Homepage ('/')
            // Active while scrolling through the Hero Animation (approx 3.5 viewport heights)
            if (pathname === "/") {
                const heroThreshold = window.innerHeight * 3.5;
                setIsHeroMode(currentScrollY < heroThreshold);
            } else {
                setIsHeroMode(false);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // Recalculate on resize
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [pathname]);

    return (
        <>
            <nav
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md py-4 border-gray-200"
                        : "bg-transparent py-6 border-transparent"
                )}
            >
                <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between h-full">
                    {/* Logo Section */}
                    <Link href="/" className="relative z-50 flex flex-col leading-none group">
                        <span
                            className={clsx(
                                "font-serif text-2xl font-bold tracking-tight transition-colors group-hover:opacity-80",
                                "text-charcoal"
                            )}
                        >
                            Marisol Ramos
                        </span>
                        <span className="text-[10px] font-sans font-normal tracking-[0.2em] uppercase text-brand mt-1">
                            Asesora Inmobiliaria
                        </span>
                    </Link>

                    {/* Right Side Group (Links + Buttons) */}
                    <div className="hidden md:flex items-center gap-12">
                        {/* Desktop Menu */}
                        <div className="flex items-center gap-8">
                            <NavLink href="#services" label="Servicios" />
                            <NavLink href="#process" label="¿Cómo?" />
                            <NavLink href="#testimonios" label="Testimonios" />
                        </div>

                        {/* Desktop Buttons */}
                        {/* HIDDEN IN HERO MODE -> This forces the links to collapse to the right */}
                        <div
                            className={clsx(
                                "flex items-center gap-4 transition-all duration-500 overflow-hidden",
                                isHeroMode ? "w-0 opacity-0 pointer-events-none" : "w-auto opacity-100"
                            )}
                        >
                            <Link
                                href="#contact"
                                className="px-6 py-2 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors rounded-full whitespace-nowrap"
                            >
                                CONTACTAR
                            </Link>
                            <Link
                                href="/evaluacion"
                                className="px-6 py-2 bg-brand text-white text-xs font-bold tracking-widest uppercase hover:bg-brand-dark transition-colors rounded-full whitespace-nowrap"
                            >
                                ¿Cuánto vale mi propiedad?
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {/* Placeholder for icons, assuming FaTimes and FaBars are imported */}
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-white shadow-xl md:hidden py-8 px-6 border-t border-gray-100"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {[
                                { name: "Servicios", href: "#services" },
                                { name: "¿Cómo?", href: "#process" },
                                { name: "Testimonios", href: "#testimonios" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-serif"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <Link href="#contact" className="px-6 py-3 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                                    CONTACTAR
                                </Link>
                                <Link href="/evaluacion" className="px-6 py-3 bg-brand text-white text-xs font-bold uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                                    ¿Cuánto vale mi propiedad?
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium tracking-wide text-charcoal/80 hover:text-brand transition-colors uppercase"
        >
            {label}
        </Link>
    );
}

function MobileNavLink({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-2xl font-serif text-charcoal hover:text-brand transition-colors"
        >
            {label}
        </Link>
    );
}
