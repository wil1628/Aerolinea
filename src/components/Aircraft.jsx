export default function Aircraft() {
    return (
        <section id="aircraft" className="px-8 py-20 bg-blue-50 text-gray-900">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
                Nuestra Aeronave
            </h2>

            <div className="w-24 h-1 bg-blue-300 mx-auto mb-8 rounded-full"></div>

            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
                <p>
                    Actualmente contamos con una aeronave modelo
                    <span className="font-semibold"> Piper Arrow</span>,
                    reconocida por su seguridad, eficiencia y capacidad ideal para vuelos
                    regionales dentro de Costa Rica.
                </p>

                <p className="mt-4">
                    Esta aeronave ofrece una experiencia cómoda, estable y perfecta para
                    rutas cortas y medianas, garantizando un viaje seguro y agradable.
                </p>
            </div>

            <div className="mt-10 flex justify-center">
                <img
                    src="/14-911_0151_16x9.jpg"
                    alt="Aeronave Piper Arrow"
                    className="w-full max-w-2xl h-auto rounded-xl shadow-xl object-cover"
                />
            </div>

        </section>
    );
}
