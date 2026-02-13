"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaMicrophone, FaComments, FaTimes, FaStop } from "react-icons/fa";
import { useConversation } from "@11labs/react";

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "";

export function FloatingAssistant() {
    const [isOpen, setIsOpen] = useState(false);

    const conversation = useConversation({
        onError: (error) => {
            console.error("ElevenLabs error:", error);
        },
    });

    const handleVoiceToggle = useCallback(async () => {
        if (!AGENT_ID) {
            console.warn("ElevenLabs Agent ID not configured");
            return;
        }

        if (conversation.status === "connected") {
            await conversation.endSession();
        } else {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                await conversation.startSession({ agentId: AGENT_ID, connectionType: "websocket" });
            } catch (err) {
                console.error("Microphone access denied:", err);
            }
        }
    }, [conversation]);

    const isVoiceActive = conversation.status === "connected";
    const isSpeaking = conversation.isSpeaking;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {/* WhatsApp Widget */}
                        <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 w-64">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Directo</p>
                            <a
                                href="https://wa.me/525554148142?text=Hola%20Marisol%2C%20vi%20tus%20servicios%20en%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                                <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                                    <FaWhatsapp size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-charcoal leading-tight">WhatsApp</p>
                                    <p className="text-xs text-green-600 font-medium">En línea ahora</p>
                                </div>
                            </a>
                        </div>

                        {/* Voice Assistant Widget */}
                        <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 w-64 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-1 h-full ${isVoiceActive ? "bg-green-500" : "bg-[#d35c6a]"}`} />
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Asistente IA</p>
                            <button
                                onClick={handleVoiceToggle}
                                disabled={!AGENT_ID}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform ${
                                    isVoiceActive ? "bg-green-500" : "bg-[#d35c6a]"
                                } ${isSpeaking ? "animate-pulse" : ""}`}>
                                    {isVoiceActive ? <FaStop size={16} /> : <FaMicrophone size={18} />}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-charcoal leading-tight">
                                        {isVoiceActive ? "Finalizar llamada" : "Preguntar con Voz"}
                                    </p>
                                    <p className={`text-xs font-medium ${isVoiceActive ? "text-green-600" : "text-[#d35c6a]"}`}>
                                        {isVoiceActive
                                            ? isSpeaking ? "Hablando..." : "Escuchando..."
                                            : AGENT_ID ? "Disponible" : "No configurado"
                                        }
                                    </p>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-105 ${isOpen ? "bg-charcoal" : "bg-[#d35c6a]"}`}
                aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? <FaTimes size={20} /> : <FaComments size={24} />}
                </motion.div>
            </button>
        </div>
    );
}
