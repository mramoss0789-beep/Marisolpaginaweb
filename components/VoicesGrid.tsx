"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
// Using generic icons/text for logos to match the 'Relume/Webflow' placeholder style in screenshot
import { FaCube, FaShapes } from "react-icons/fa6";

export function VoicesGrid() {
    return (
        <section className="bg-white text-charcoal py-24">
            <div className="container-wide mb-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-4">Voces reales</h2>
                <p className="text-gray-500">Propietarios que transformaron sus resultados</p>
            </div>

            <div className="container-wide">
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Row 1 */}
                    {/* Box 1: Logo Placeholder */}
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-2xl font-bold flex items-center gap-2">
                            <FaCube /> <span>Relume</span>
                        </div>
                    </div>

                    {/* Box 2: Featured Testimonial (Wide? No, grid is 3 cols. The screenshot shows center one is text.) */}
                    <div className="md:col-span-1 border border-charcoal p-8 flex flex-col justify-center bg-white text-left hover:shadow-lg transition-shadow relative">
                        <div className="flex gap-1 text-black mb-6">
                            <FaStar size={14} /><FaStar size={14} /><FaStar size={14} /><FaStar size={14} /><FaStar size={14} />
                        </div>
                        <p className="text-lg font-medium leading-relaxed mb-6">
                            "Marisol entendió exactamente lo que necesitaba. No solo vendió mi propiedad, sino que me guió en cada paso del camino."
                        </p>
                        <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                            <div>
                                <p className="text-sm font-bold">Carlos Mendoza</p>
                                <p className="text-xs text-gray-500">Vendedor, Polanco</p>
                            </div>
                        </div>
                    </div>

                    {/* Box 3: Logo Placeholder */}
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-2xl font-bold flex items-center gap-2">
                            <FaShapes /> <span>Webflow</span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    {/* Box 4: Logo Placeholder */}
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-2xl font-bold flex items-center gap-2">
                            <FaShapes /> <span>Webflow</span>
                        </div>
                    </div>

                    {/* Box 5: Logo Placeholder */}
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-2xl font-bold flex items-center gap-2">
                            <FaCube /> <span>Relume</span>
                        </div>
                    </div>

                    {/* Box 6: Logo Placeholder */}
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <FaShapes /> <span>Webflow</span>
                        </div>
                    </div>

                    {/* Box 7: Logo Placeholder (If 4x2 grid? Screenshot shows 8 boxes total, 4 top 4 bottom? Or 3 then 4?
                Screenshot 1: 3 boxes in row 1 (Logo, Testimonial, Logo).
                Screenshot 2 (continuation): 4 boxes in row 2?
                Let's stick to a clean 3-col grid or 4-col grid based on screenshot.
                Actually looking at Screenshot 1: It's 3 columns. Logo - Testimonial - Logo.
                Screenshot 1 bottom part: 4 boxes. Logo - Logo - Logo - Logo.
                Wait, the first screenshot shows a row of 3 items (Logo, Text, Logo).
                Then below it shows a row of 4 items (Logo, Logo, Logo, Logo).
                This implies a mixed grid.
                Let's emulate that structure.
            */}
                </div>

                {/* Second Row - 4 columns */}
                <div className="grid md:grid-cols-4 gap-6 mt-6">
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <FaShapes /> <span>Webflow</span>
                        </div>
                    </div>
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <FaCube /> <span>Relume</span>
                        </div>
                    </div>
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <FaShapes /> <span>Webflow</span>
                        </div>
                    </div>
                    <div className="aspect-square border border-gray-200 flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="text-xl font-bold flex items-center gap-2">
                            <FaCube /> <span>Relume</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
