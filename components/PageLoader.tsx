"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for the page to fully load, then fade out
        const handleLoad = () => {
            // Small delay to ensure smooth transition
            setTimeout(() => setIsLoading(false), 300);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-sand-light flex items-center justify-center transition-opacity duration-500 ${
                isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div className="flex flex-col items-center gap-6">
                {/* Logo Text */}
                <h1 className="text-3xl md:text-4xl font-serif text-charcoal tracking-tight animate-pulse">
                    MARISOL RAMOS
                </h1>
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">
                    Asesora Inmobiliaria
                </p>
                {/* Subtle loading bar */}
                <div className="w-48 h-[2px] bg-charcoal/10 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-brand rounded-full animate-loader" />
                </div>
            </div>
        </div>
    );
}
