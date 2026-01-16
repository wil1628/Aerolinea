export default function Hero() {
    return (
        <section
            id="hero"
            className="
                relative w-full h-[90vh]
                flex justify-center items-center text-center
                bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: "url('/77572-Guanacaste-North-Pacific-Coast.webp')" }}
        >
            {/* Capa oscura para mejorar la legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

            {/* Contenido */}
            <div className="relative z-10 px-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl">
                    Fly<span className="text-blue-300">74</span>
                </h1>

                <p className="mt-6 text-lg md:text-2xl text-blue-100 leading-relaxed">
                    Una nueva forma de conectar Costa Rica desde el cielo.
                </p>

                <p className="mt-4 text-xl md:text-2xl font-semibold text-yellow-300 drop-shadow-lg">
                    Próximamente estaremos operando con todos nuestros servicios.
                </p>
            </div>
        </section>
    )
}