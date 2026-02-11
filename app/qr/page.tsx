import { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaGlobe, FaCalculator } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Marisol Ramos - Directora Estratégica en Bienes Raíces",
    description: "Conecta con Marisol Ramos, experta en bienes raíces con 19 años de experiencia. Vende o renta tu propiedad con confianza.",
    openGraph: {
        title: "Marisol Ramos - Directora Estratégica",
        description: "19 años transformando el mercado inmobiliario en Ciudad de México",
        type: "profile",
    },
};

export default function QRPage() {
    const links = [
        {
            label: "Sitio Web Principal",
            href: "https://marisolramosinmobiliaria.com",
            icon: FaGlobe,
            external: true,
        },
        {
            label: "¿Cuánto vale mi propiedad?",
            href: "/evaluacion",
            icon: FaCalculator,
            external: false,
        },
        {
            label: "WhatsApp - Contáctame",
            href: "https://wa.me/5215512345678",
            icon: FaWhatsapp,
            external: true,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/marisolramos.look/",
            icon: FaInstagram,
            external: true,
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61582474410782",
            icon: FaFacebookF,
            external: true,
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@inmobiliariaqualitylema7832",
            icon: FaYoutube,
            external: true,
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f9f7f5] via-[#f0e6e0] to-[#e8c5b5] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Profile Section */}
                <div className="text-center mb-8 animate-fade-in">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark rounded-full opacity-20 blur-xl"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src="/images/profile/marisol-stage.png"
                                alt="Marisol Ramos"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Name & Title */}
                    <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
                        Marisol Ramos
                    </h1>
                    <p className="text-sm text-charcoal/70 font-sans tracking-wide">
                        Directora Estratégica · Bienes Raíces
                    </p>
                    <p className="text-xs text-brand font-semibold mt-2 tracking-widest uppercase">
                        19 años de experiencia
                    </p>
                </div>

                {/* Links */}
                <div className="space-y-4 animate-fade-in-up">
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        const LinkComponent = link.external ? "a" : Link;
                        const extraProps = link.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {};

                        return (
                            <LinkComponent
                                key={index}
                                href={link.href}
                                {...extraProps}
                                className="group relative block w-full bg-white/80 backdrop-blur-sm hover:bg-brand hover:shadow-2xl text-charcoal hover:text-white py-4 px-6 rounded-2xl transition-all duration-300 border border-brand/20 hover:border-brand overflow-hidden"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                {/* Content */}
                                <div className="relative flex items-center justify-center gap-3">
                                    <Icon className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="font-sans font-semibold text-sm tracking-wide">
                                        {link.label}
                                    </span>
                                </div>
                            </LinkComponent>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="text-center mt-12 animate-fade-in">
                    <p className="text-xs text-charcoal/50 tracking-widest uppercase">
                        © {new Date().getFullYear()} Marisol Ramos
                    </p>
                </div>
            </div>
        </main>
    );
}
