export default function About() {
    return (
        <section id="about" className="px-8 py-20 bg-white text-gray-800">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
                Sobre Fly74
            </h2>

            <div className="w-24 h-1 bg-blue-300 mx-auto mb-8 rounded-full"></div>

            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
                Fly74 es una aerolínea costarricense en desarrollo, creada con la visión
                de ofrecer vuelos seguros, eficientes y accesibles dentro del territorio nacional.
                Nuestro compromiso es brindar una experiencia aérea moderna, confiable y cercana
                a cada pasajero.
            </p>

            <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-center text-blue-700 font-medium">
                Nuestra misión es conectar personas, negocios y destinos en Costa Rica,
                impulsando el desarrollo regional a través del transporte aéreo.
            </p>
        </section>
    );
}
