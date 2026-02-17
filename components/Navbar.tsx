"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeroMode, setIsHeroMode] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            if (pathname === "/") {
                const heroThreshold = window.innerHeight * 3.5;
                setIsHeroMode(currentScrollY < heroThreshold);
            } else {
                setIsHeroMode(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [pathname]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu on outside click
    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [isMobileMenuOpen]);

    // Navigate to homepage anchor — works from any page
    const goToSection = useCallback((hash: string) => {
        setIsMobileMenuOpen(false);
        if (pathname === "/") {
            // Already on homepage, just scroll to anchor
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to homepage first, then hash
            router.push("/" + hash);
        }
    }, [pathname, router]);

    const goHome = useCallback(() => {
        setIsMobileMenuOpen(false);
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/");
        }
    }, [pathname, router]);

    return (
        <nav
            ref={navRef}
            className={clsx(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md py-4 border-gray-200"
                    : "bg-transparent py-6 border-transparent"
            )}
        >
            <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
                {/* Logo Section */}
                <button
                    onClick={goHome}
                    className="relative z-[110] flex flex-col leading-none group text-left cursor-pointer"
                >
                    <span className="font-serif text-2xl font-bold tracking-tight transition-colors group-hover:opacity-80 text-charcoal">
                        Marisol Ramos
                    </span>
                    <span className="text-[10px] font-sans font-normal tracking-[0.2em] uppercase text-brand mt-1">
                        Asesora Inmobiliaria
                    </span>
                </button>

                {/* Right Side Group (Links + Buttons) */}
                <div className="hidden md:flex items-center gap-12">
                    {/* Desktop Menu */}
                    <div className="flex items-center gap-8">
                        <button onClick={() => goToSection("#services")} className="text-sm font-medium tracking-wide text-charcoal/80 hover:text-brand transition-colors uppercase">Servicios</button>
                        <button onClick={() => goToSection("#process")} className="text-sm font-medium tracking-wide text-charcoal/80 hover:text-brand transition-colors uppercase">¿Cómo?</button>
                        <button onClick={() => goToSection("#testimonios")} className="text-sm font-medium tracking-wide text-charcoal/80 hover:text-brand transition-colors uppercase">Testimonios</button>
                    </div>

                    {/* Desktop Buttons */}
                    <div
                        className={clsx(
                            "flex items-center gap-4 transition-all duration-500 overflow-hidden",
                            isHeroMode ? "w-0 opacity-0 pointer-events-none" : "w-auto opacity-100"
                        )}
                    >
                        <button
                            onClick={() => goToSection("#contact")}
                            className="px-6 py-2 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors rounded-full whitespace-nowrap"
                        >
                            CONTACTAR
                        </button>
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
                    className="md:hidden p-3 -mr-2 relative z-[110]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMobileMenuOpen}
                >
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-8 px-6 border-t border-gray-100 z-[105]">
                    <div className="flex flex-col gap-6 text-center">
                        <button onClick={() => goToSection("#services")} className="text-lg font-serif">Servicios</button>
                        <button onClick={() => goToSection("#process")} className="text-lg font-serif">¿Cómo?</button>
                        <button onClick={() => goToSection("#testimonios")} className="text-lg font-serif">Testimonios</button>
                        <div className="flex flex-col gap-4 mt-4">
                            <button onClick={() => goToSection("#contact")} className="px-6 py-3 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest">
                                CONTACTAR
                            </button>
                            <Link href="/evaluacion" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 bg-brand text-white text-xs font-bold uppercase tracking-widest">
                                ¿Cuánto vale mi propiedad?
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
