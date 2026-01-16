export default function Pilot() {
    return (
        <section id="pilot" className="px-8 py-20 bg-white text-gray-800 scroll-mt-32">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
                Nuestro Piloto
            </h2>

            <div className="w-24 h-1 bg-blue-300 mx-auto mb-8 rounded-full"></div>

            {/* Imagen del piloto */}
            <div className="flex justify-center mb-10">
                <img
                    src="/Hong.png"
                    alt="Piloto de Fly74"
                    className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-blue-200"
                />
            </div>

            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
                <p>
                    Fly74 cuenta con un piloto certificado,
                    <span className="font-semibold"> Hong Bin Hong</span>,
                    con más de
                    <span className="font-semibold"> 10 años de experiencia</span>
                    en aviación comercial y vuelos regionales.
                </p>

                <p className="mt-4">
                    Su trayectoria incluye operaciones en diversas zonas del país,
                    garantizando un conocimiento profundo del clima, rutas y condiciones
                    aéreas de Costa Rica.
                </p>
            </div>
        </section>
    );
}