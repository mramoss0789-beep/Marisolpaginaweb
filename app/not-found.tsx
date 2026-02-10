import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-sand flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-md space-y-8">
                {/* Icon or Brand Element */}
                <div className="text-[#d35c6a] text-6xl mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>

                <h1 className="text-5xl font-serif text-charcoal font-bold">
                    404
                </h1>

                <h2 className="text-2xl font-serif text-charcoal/80">
                    Esta propiedad no existe
                </h2>

                <p className="text-charcoal/60 leading-relaxed">
                    Parece que hemos llegado a una dirección que no está en nuestro inventario. Regresa al inicio para encontrar lo que buscas.
                </p>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-[#d35c6a] text-white font-bold uppercase tracking-widest rounded-full hover:bg-[#b04b56] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
