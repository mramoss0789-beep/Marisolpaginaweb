import type { Metadata } from "next";
// Playfair Display for headers, Manrope for modern, clean body text
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { PageLoader } from "@/components/PageLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://marisolramos.mx'),
  title: {
    default: "Marisol Ramos | Asesora Inmobiliaria",
    template: "%s | Marisol Ramos",
  },
  description: "Asesora inmobiliaria experta en venta, renta y gestión de propiedades de lujo en Ciudad de México. Especialista en Polanco, Lomas de Chapultepec, Condesa y Roma.",
  keywords: ["Bienes Raíces CDMX", "Luxury Real Estate Mexico", "Venta de Casas Polanco", "Renta de Departamentos Condesa", "Marisol Ramos", "Asesora Inmobiliaria", "Inversión Inmobiliaria"],
  authors: [{ name: "Marisol Ramos" }],
  creator: "Marisol Ramos",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://marisolramos.mx", // Placeholder URL, user can update later
    title: "Marisol Ramos | Inmobiliaria de Lujo CDMX",
    description: "Transformamos la experiencia inmobiliaria. Venta y renta de propiedades exclusivas en las mejores zonas de la Ciudad de México.",
    siteName: "Marisol Ramos Real Estate",
    images: [
      {
        url: "/images/hero/hero.svg", // Using existing hero image
        width: 1200,
        height: 630,
        alt: "Marisol Ramos Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marisol Ramos | Inmobiliaria de Lujo CDMX",
    description: "Asesora experta en propiedades de alto valor en CDMX. Confianza, discreción y resultados.",
    images: ["/images/hero/hero.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans antialiased`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
