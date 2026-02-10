"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Use portal to render at the root level ensures z-index works properly
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col pointer-events-auto border border-white/20"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0 bg-white rounded-t-2xl">
                                <h2 className="text-2xl font-serif font-bold text-charcoal">Aviso de Privacidad</h2>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto p-6 md:p-10 text-charcoal/80 text-sm leading-relaxed space-y-6">
                                <section>
                                    <h3 className="font-bold text-charcoal mb-2">Marisol Ramos Salguero</h3>
                                    <p className="mb-2 italic">Última actualización: 10 de Febrero del 2026</p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">1. Responsable del tratamiento de datos personales</h4>
                                    <p>
                                        En cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, se informa que Marisol Ramos Salguero, asesora inmobiliaria independiente, es responsable del uso y protección de los datos personales que usted proporcione a través de este sitio web, formularios, redes sociales, mensajes o cualquier medio de contacto.
                                    </p>
                                    <p className="mt-2 text-xs bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <strong>Contacto para privacidad:</strong><br />
                                        Correo electrónico: [colocar correo de contacto]<br />
                                        Teléfono o WhatsApp: [colocar número]
                                    </p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">2. Datos personales que se recaban</h4>
                                    <p>Los datos personales que podemos solicitar y recabar incluyen:</p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1">
                                        <li><strong>Datos de identificación:</strong> Nombre completo, Teléfono, Correo electrónico.</li>
                                        <li><strong>Datos inmobiliarios:</strong> Tipo de inmueble, Ubicación, Presupuesto, Motivo de operación, Características y necesidades.</li>
                                        <li><strong>Datos adicionales:</strong> Cualquier otra información proporcionada voluntariamente.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">3. Finalidades del tratamiento de datos</h4>
                                    <p>Usamos sus datos para:</p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1">
                                        <li><strong>Primarias:</strong> Contacto, Asesoría, Evaluación de propiedades, Envío de fichas, Citas y Seguimiento de operaciones.</li>
                                        <li><strong>Secundarias (Opcionales):</strong> Envío de recomendaciones, promociones o mejoras del servicio. Puede solicitar no usar sus datos para estos fines.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">4. Protección y resguardo de la información</h4>
                                    <p>
                                        Marisol Ramos Salguero se compromete a proteger la confidencialidad de sus datos y utilizar medidas de seguridad para evitar su mal uso. No vendemos ni rentamos sus datos a terceros sin consentimiento, salvo obligación legal.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">5. Transferencia de datos personales</h4>
                                    <p>
                                        Solo compartimos datos cuando es necesario para el servicio (Notarías, Financieras, Propietarios, Otros asesores), procurando siempre su confidencialidad.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">6. Derechos ARCO</h4>
                                    <p>
                                        Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos.
                                        Para ejercerlos, envíe una solicitud a nuestro correo de contacto incluyendo nombre, medio de contacto, descripción de la solicitud y copia de identificación.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">7. Uso de cookies</h4>
                                    <p>
                                        Este sitio puede usar cookies para mejorar la experiencia y analizar el tráfico. Puede deshabilitarlas en su navegador.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">8. Cambios al aviso de privacidad</h4>
                                    <p>
                                        Las modificaciones estarán disponibles en este sitio web.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="font-bold text-charcoal text-base mb-2">9. Consentimiento</h4>
                                    <p>
                                        Al proporcionar sus datos, acepta los términos de este aviso y autoriza su tratamiento.
                                    </p>
                                </section>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-colors"
                                >
                                    Entendido
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
