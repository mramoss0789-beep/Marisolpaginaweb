"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaBuilding, FaTree, FaStore, FaBed, FaBath, FaCar, FaRulerCombined, FaCheck, FaArrowLeft, FaBroom, FaMountain, FaCity, FaGem, FaDollarSign } from "react-icons/fa";

// Types
type Step =
    | "intro"
    | "type"
    | "location"
    | "features"
    | "dimensions"
    | "details"
    | "contact"
    | "success";

interface FormData {
    propertyType: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    halfBaths: number;
    parking: number;
    serviceRoom: boolean;
    age: string;
    inDevelopment: boolean;
    landSize: string;
    constructionSize: string;
    amenities: string[];
    conservation: string;
    finishes: string;
    view: string;
    name: string;
    email: string;
    phone: string;
    estimatedPrice: string;
}

interface CommonStepProps {
    formData: FormData;
    updateData: (field: keyof FormData, value: any) => void;
    nextStep: (next: Step) => void;
    prevStep: (prev: Step) => void;
}

interface StepIntroProps {
    nextStep: (next: Step) => void;
}

interface StepDetailsProps extends CommonStepProps {
    toggleAmenity: (amenity: string) => void;
}

interface StepContactProps {
    formData: FormData;
    updateData: (field: keyof FormData, value: any) => void;
    prevStep: (prev: Step) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
}

interface StepSuccessProps {
    formData: FormData;
}

const amenitiesList = [
    "Seguridad 24/7", "Elevador", "Alberca", "Gimnasio",
    "Salón de Usos Múltiples", "Jardín / Parque", "Terraza Privada", "Jacuzzi",
    "Roof Garden", "Cine", "Ludoteca", "Business Center"
];

export function EvaluationWizard() {
    const [step, setStep] = useState<Step>("intro");
    const [direction, setDirection] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        propertyType: "",
        location: "",
        bedrooms: 2,
        bathrooms: 2,
        halfBaths: 0,
        parking: 1,
        serviceRoom: false,
        age: "",
        inDevelopment: false,
        landSize: "",
        constructionSize: "",
        amenities: [],
        conservation: "",
        finishes: "",
        view: "",
        name: "",
        email: "",
        phone: "",
        estimatedPrice: ""
    });

    const updateData = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleAmenity = (amenity: string) => {
        setFormData(prev => {
            const exists = prev.amenities.includes(amenity);
            if (exists) return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
            return { ...prev, amenities: [...prev.amenities, amenity] };
        });
    };

    const nextStep = (next: Step) => {
        setDirection(1);
        setStep(next);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = (prev: Step) => {
        setDirection(-1);
        setStep(prev);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mlgwegob", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                nextStep("success");
            } else {
                alert("Hubo un error al enviar tu evaluación. Por favor intenta de nuevo.");
            }
        } catch (error) {
            alert("Hubo un error de conexión.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation Config
    const variants = {
        enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({ x: direction > 0 ? -50 : 50, opacity: 0 })
    };

    return (
        <section className="py-24 bg-white min-h-[90vh] relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#faefe3]/40 -z-10 blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#d35c6a]/5 -z-10 blur-3xl opacity-60" />

            <div className="container-wide max-w-4xl mx-auto relative z-10 px-6">
                {step !== "intro" && step !== "success" && (
                    <div className="mb-12">
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-[#d35c6a]" initial={{ width: 0 }} animate={{ width: `${getProgress(step)}%` }} transition={{ duration: 0.5 }} />
                        </div>
                        <p className="text-xs font-bold text-charcoal/30 uppercase tracking-widest mt-4 text-right">Paso {getStepNumber(step)} de 6</p>
                    </div>
                )}

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={step} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: "easeInOut" }}>
                        {step === "intro" && <StepIntro nextStep={nextStep} />}
                        {step === "type" && <StepType formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                        {step === "location" && <StepLocation formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                        {step === "features" && <StepFeatures formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                        {step === "dimensions" && <StepDimensions formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
                        {step === "details" && <StepDetails formData={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} toggleAmenity={toggleAmenity} />}
                        {step === "contact" && <StepContact formData={formData} updateData={updateData} prevStep={prevStep} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />}
                        {step === "success" && <StepSuccess formData={formData} />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

// --- Extracted Step Components ---

const StepIntro = ({ nextStep }: StepIntroProps) => (
    <div className="text-center py-12">
        <h2 className="text-4xl lg:text-5xl font-serif font-medium mb-6 text-charcoal">
            Opinión de valor
        </h2>
        <p className="text-lg text-charcoal/60 mb-12 max-w-2xl mx-auto">
            Conoce el valor real de tu patrimonio con nuestra calculadora de mercado basada en características detalladas.
        </p>
        <button
            onClick={() => nextStep("type")}
            className="px-10 py-4 bg-[#d35c6a] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b04b56] transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
            Comenzar Ahora
        </button>
    </div>
);

const StepType = ({ formData, updateData, nextStep, prevStep }: CommonStepProps) => (
    <div className="max-w-3xl mx-auto space-y-8">
        <h3 className="text-2xl font-serif text-center mb-8">¿Qué tipo de propiedad deseas evaluar?</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { id: "casa", label: "Casa", icon: FaHome },
                { id: "departamento", label: "Departamento", icon: FaBuilding },
                { id: "terreno", label: "Terreno", icon: FaTree },
                { id: "otro", label: "Otro", icon: FaStore }
            ].map((type) => (
                <button
                    key={type.id}
                    onClick={() => { updateData("propertyType", type.id); nextStep("location"); }}
                    className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-4 group ${formData.propertyType === type.id ? 'border-[#d35c6a] bg-[#FDF0F2]' : 'border-gray-200 hover:border-[#d35c6a]/50 hover:bg-gray-50'}`}
                >
                    <type.icon size={32} className={formData.propertyType === type.id ? 'text-[#d35c6a]' : 'text-charcoal/40 group-hover:text-[#d35c6a]'} />
                    <span className={`text-sm font-bold uppercase tracking-widest ${formData.propertyType === type.id ? 'text-[#d35c6a]' : 'text-charcoal'}`}>{type.label}</span>
                </button>
            ))}
        </div>
        <div className="flex justify-start pt-4">
            <button onClick={() => prevStep("intro")} className="text-xs font-bold text-charcoal/40 hover:text-charcoal uppercase tracking-widest flex items-center gap-2">
                <FaArrowLeft /> Regresar
            </button>
        </div>
    </div>
);

const StepLocation = ({ formData, updateData, nextStep, prevStep }: CommonStepProps) => (
    <div className="max-w-xl mx-auto space-y-8">
        <h3 className="text-2xl font-serif text-center mb-8">Ubicación del Inmueble</h3>
        <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Dirección o Zona</label>
            <input
                autoFocus
                type="text"
                value={formData.location}
                onChange={(e) => updateData("location", e.target.value)}
                placeholder="Ej. Polanco, CDMX"
                className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xl focus:border-[#d35c6a] focus:outline-none transition-colors"
            />
        </div>
        <div className="flex justify-between pt-8">
            <button onClick={() => prevStep("type")} className="px-6 py-3 text-xs font-bold text-charcoal/40 hover:text-charcoal uppercase tracking-widest">Atrás</button>
            <button
                onClick={() => nextStep("features")}
                disabled={!formData.location}
                className="px-8 py-3 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-full disabled:opacity-50"
            >
                Siguiente
            </button>
        </div>
    </div>
);

const StepFeatures = ({ formData, updateData, nextStep, prevStep }: CommonStepProps) => (
    <div className="max-w-2xl mx-auto space-y-10">
        <h3 className="text-2xl font-serif text-center mb-8">Características Generales</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Counter label="Recámaras" icon={FaBed} value={formData.bedrooms} onChange={(v) => updateData("bedrooms", v)} />
            <Counter label="Baños Completos" icon={FaBath} value={formData.bathrooms} onChange={(v) => updateData("bathrooms", v)} />
            <Counter label="Medios Baños" icon={FaBath} value={formData.halfBaths} onChange={(v) => updateData("halfBaths", v)} />
            <Counter label="Estacionamientos" icon={FaCar} value={formData.parking} onChange={(v) => updateData("parking", v)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a] block mb-4">Antigüedad</label>
                <div className="flex items-center gap-2 border-b border-charcoal/20 pb-2">
                    <span className="text-charcoal/60 text-sm">Años:</span>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => updateData("age", e.target.value)}
                        className="w-full bg-transparent text-xl focus:outline-none"
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => updateData("serviceRoom", !formData.serviceRoom)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${formData.serviceRoom ? 'bg-[#FDF0F2] border-[#d35c6a] text-[#d35c6a]' : 'border-gray-200 text-charcoal/60'}`}
                >
                    <span className="flex items-center gap-3 font-bold text-sm">
                        <FaBroom /> Cuarto de Servicio
                    </span>
                    {formData.serviceRoom && <FaCheck />}
                </button>
            </div>
        </div>

        <div className="flex justify-between pt-8">
            <button onClick={() => prevStep("location")} className="px-6 py-3 text-xs font-bold text-charcoal/40 hover:text-charcoal uppercase tracking-widest">Atrás</button>
            <button onClick={() => nextStep("dimensions")} className="px-8 py-3 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-full">Siguiente</button>
        </div>
    </div>
);

const StepDimensions = ({ formData, updateData, nextStep, prevStep }: CommonStepProps) => (
    <div className="max-w-xl mx-auto space-y-8">
        <h3 className="text-2xl font-serif text-center mb-8">Dimensiones</h3>
        <div className="space-y-8">
            <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Terreno (m²)</label>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-transparent focus-within:border-[#d35c6a] transition-colors">
                    <FaRulerCombined className="text-[#d35c6a]" />
                    <input
                        type="number"
                        value={formData.landSize}
                        onChange={(e) => updateData("landSize", e.target.value)}
                        placeholder="Ej. 150"
                        className="w-full bg-transparent text-xl focus:outline-none text-charcoal"
                    />
                </div>
            </div>
            <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Construcción (m²)</label>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-transparent focus-within:border-[#d35c6a] transition-colors">
                    <FaBuilding className="text-[#d35c6a]" />
                    <input
                        type="number"
                        value={formData.constructionSize}
                        onChange={(e) => updateData("constructionSize", e.target.value)}
                        placeholder="Ej. 200"
                        className="w-full bg-transparent text-xl focus:outline-none text-charcoal"
                    />
                </div>
            </div>
        </div>
        <div className="flex justify-between pt-8">
            <button onClick={() => prevStep("features")} className="px-6 py-3 text-xs font-bold text-charcoal/40 hover:text-charcoal uppercase tracking-widest">Atrás</button>
            <button
                onClick={() => nextStep("details")}
                disabled={!formData.landSize && !formData.constructionSize}
                className="px-8 py-3 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-full disabled:opacity-50"
            >
                Siguiente
            </button>
        </div>
    </div>
);

const StepDetails = ({ formData, updateData, nextStep, prevStep, toggleAmenity }: StepDetailsProps) => (
    <div className="max-w-4xl mx-auto space-y-12">
        <h3 className="text-2xl font-serif text-center mb-8">Detalles Finos</h3>

        {/* Condition */}
        <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a] block">Estado de Conservación</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Excelente", "Bueno", "Regular", "Para Remodelar"].map(opt => (
                    <button key={opt} onClick={() => updateData("conservation", opt)} className={`py-3 px-4 rounded-lg border text-sm transition-all ${formData.conservation === opt ? 'bg-charcoal text-white border-charcoal' : 'border-gray-200 text-charcoal hover:border-charcoal'}`}>
                        {opt}
                    </button>
                ))}
            </div>
        </div>

        {/* View & Finishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a] block">Vistas Principales</label>
                <div className="grid grid-cols-2 gap-3">
                    {[{ l: "Panorámica", i: FaMountain }, { l: "Ciudad", i: FaCity }, { l: "Áreas Verdes", i: FaTree }, { l: "Interior", i: FaHome }].map(v => (
                        <button key={v.l} onClick={() => updateData("view", v.l)} className={`py-3 px-3 rounded-lg border text-xs font-bold uppercase flex items-center gap-2 ${formData.view === v.l ? 'bg-[#FDF0F2] border-[#d35c6a] text-[#d35c6a]' : 'border-gray-200 text-charcoal/60'}`}>
                            <v.i /> {v.l}
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a] block">Nivel de Acabados</label>
                <div className="grid grid-cols-2 gap-3">
                    {["Lujo", "Equipado", "Intermedio", "Básico"].map(f => (
                        <button key={f} onClick={() => updateData("finishes", f)} className={`py-3 px-3 rounded-lg border text-xs font-bold uppercase flex items-center gap-2 ${formData.finishes === f ? 'bg-[#FDF0F2] border-[#d35c6a] text-[#d35c6a]' : 'border-gray-200 text-charcoal/60'}`}>
                            <FaGem /> {f}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Amenities */}
        <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a] block">Amenidades</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {amenitiesList.map(amenity => (
                    <button key={amenity} onClick={() => toggleAmenity(amenity)} className={`py-2 px-3 rounded-lg border text-[10px] font-bold uppercase tracking-wider text-left transition-all flex items-center justify-between ${formData.amenities.includes(amenity) ? 'bg-[#2D2D2D] border-[#2D2D2D] text-white' : 'border-gray-200 text-charcoal/60 hover:border-gray-300'}`}>
                        {amenity}
                        {formData.amenities.includes(amenity) && <FaCheck size={10} />}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex justify-between pt-8">
            <button onClick={() => prevStep("dimensions")} className="px-6 py-3 text-xs font-bold text-charcoal/40 hover:text-charcoal uppercase tracking-widest">Atrás</button>
            <button onClick={() => nextStep("contact")} className="px-8 py-3 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-full">Siguiente</button>
        </div>
    </div>
);

const StepContact = ({ formData, updateData, prevStep, handleSubmit, isSubmitting }: StepContactProps) => (
    <div className="max-w-xl mx-auto space-y-8">
        <h3 className="text-2xl font-serif text-center mb-8">Datos de Contacto</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Tu Precio Estimado (Opcional)</label>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-transparent focus-within:border-[#d35c6a] transition-colors mb-4">
                    <FaDollarSign className="text-green-600" />
                    <input
                        type="text"
                        value={formData.estimatedPrice}
                        onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, '');
                            const formatted = raw ? Number(raw).toLocaleString('en-US') : '';
                            updateData("estimatedPrice", formatted);
                        }}
                        placeholder="Ej. 5,000,000"
                        className="w-full bg-transparent text-xl focus:outline-none text-charcoal"
                    />
                </div>
                <p className="text-xs text-charcoal/40 italic">Si tienes un estimado en mente, nos ayuda a calibrar la estrategia.</p>
            </div>

            <div className="border-t border-gray-100 my-6"></div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Nombre Completo *</label>
                <input required type="text" value={formData.name} onChange={(e) => updateData("name", e.target.value)} className="w-full bg-transparent border-b border-charcoal/20 py-3 text-lg focus:border-[#d35c6a] focus:outline-none" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Correo Electrónico *</label>
                <input required type="email" value={formData.email} onChange={(e) => updateData("email", e.target.value)} className="w-full bg-transparent border-b border-charcoal/20 py-3 text-lg focus:border-[#d35c6a] focus:outline-none" />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#d35c6a]">Teléfono (WhatsApp ) *</label>
                <input required type="tel" value={formData.phone} onChange={(e) => updateData("phone", e.target.value)} className="w-full bg-transparent border-b border-charcoal/20 py-3 text-lg focus:border-[#d35c6a] focus:outline-none" />
            </div>

            <div className="flex justify-between pt-8 items-center">
                <button type="button" onClick={() => prevStep("details")} className="px-6 py-3 text-xs font-bold text-charcoal/40 hover:text-charcoal uppercase tracking-widest">Atrás</button>
                <button disabled={isSubmitting} type="submit" className="px-10 py-4 bg-[#d35c6a] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#b04b56] transition-colors rounded-full shadow-lg disabled:opacity-50 disabled:cursor-wait">{isSubmitting ? "Enviando..." : "Solicitar opinión de valor"}</button>
            </div>
        </form>
    </div>
);

const StepSuccess = ({ formData }: StepSuccessProps) => (
    <div className="text-center py-16 space-y-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6"><FaCheck size={32} /></div>
        <h3 className="text-3xl font-serif text-charcoal">¡Evaluación en Proceso!</h3>
        <p className="text-lg text-charcoal/60 max-w-xl mx-auto">Gracias {formData.name}, he recibido los detalles de tu propiedad.<br />Iniciaré el análisis comparativo de mercado y te contactaré al {formData.phone} con los resultados.</p>
        <div className="pt-8"><button onClick={() => window.location.href = "/"} className="px-8 py-3 border border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors rounded-full">Volver al Inicio</button></div>
    </div>
);

// Helpers
function getProgress(step: Step): number {
    switch (step) { case "type": return 15; case "location": return 30; case "features": return 45; case "dimensions": return 60; case "details": return 75; case "contact": return 90; case "success": return 100; default: return 0; }
}

function getStepNumber(step: Step): number {
    switch (step) { case "type": return 1; case "location": return 2; case "features": return 3; case "dimensions": return 4; case "details": return 5; case "contact": return 6; default: return 0; }
}

const Counter = ({ label, icon: Icon, value, onChange }: { label: string, icon: any, value: number, onChange: (v: number) => void }) => (
    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors bg-white shadow-sm group">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FDF0F2] text-[#d35c6a] flex items-center justify-center group-hover:scale-110 transition-transform"><Icon size={16} /></div>
            <span className="text-sm font-bold text-charcoal">{label}</span>
        </div>
        <div className="flex items-center gap-4">
            <button onClick={() => onChange(Math.max(0, value - 1))} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-charcoal hover:border-charcoal transition-colors pb-1">-</button>
            <span className="text-xl font-serif w-6 text-center">{value}</span>
            <button onClick={() => onChange(value + 1)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-charcoal hover:border-charcoal transition-colors pb-1">+</button>
        </div>
    </div>
);
