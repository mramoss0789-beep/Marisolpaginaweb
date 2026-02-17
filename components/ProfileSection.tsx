"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

function useCountUp(target: number, duration: number, inView: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const startTime = performance.now();

        function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setCount(current);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }, [inView, target, duration]);

    return count;
}

export function ProfileSection() {
    const statsRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!statsRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const years = useCountUp(19, 3000, inView);
    const operations = useCountUp(250, 3000, inView);

    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden transition-all duration-700">
                            <Image src="/images/profile/marisol-stage.webp" fill className="object-cover" alt="Marisol Ramos - Directora Estratégica" sizes="(max-width: 1024px) 100vw, 40vw" />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -top-6 -right-6 w-full h-full border border-brand/20 -z-10"></div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-8 leading-tight">
                            No soy una vendedora. <br />
                            <span className="text-brand">Soy tu Directora Estratégica.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-charcoal/70 font-light leading-relaxed">
                            <p>
                                En un mercado saturado de improvisación, mi enfoque es distinto.
                                Con 14 años como Directora de Franquicia en Quality Inmobiliaria e inicios en Century 21,
                                entiendo que no estás vendiendo "ladrillos", estás moviendo&nbsp;patrimonio.
                            </p>
                            <p>
                                Mi trabajo no es abrir la puerta y mostrar una casa. Mi trabajo es
                                <strong className="text-charcoal font-medium"> blindar tu operación</strong>,
                                filtrar a los curiosos y negociar con la firmeza de quien ha cerrado cientos de tratos.
                            </p>
                        </div>

                        <div ref={statsRef} className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                            <div>
                                <h4 className="text-3xl lg:text-4xl font-serif text-brand mb-1">{years}</h4>
                                <p className="text-xs uppercase tracking-widest text-charcoal/60">Años de Trayectoria</p>
                            </div>
                            <div>
                                <h4 className="text-3xl lg:text-4xl font-serif text-brand mb-1">+{operations}</h4>
                                <p className="text-xs uppercase tracking-widest text-charcoal/60">Operaciones Cerradas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
