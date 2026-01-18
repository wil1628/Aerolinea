export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white px-8 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Logo y descripción */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">
                        Fly<span className="text-blue-300">74</span>
                    </h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                        Conectando Costa Rica desde el cielo con seguridad, eficiencia y confianza.
                    </p>
                </div>

                {/* Navegación */}
                <div>

                </div>

                {/* Contacto */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-blue-200">Contacto</h4>
                    <p className="text-blue-200 text-sm">Correo: info@charq.com</p>
                    <p className="text-blue-200 text-sm mt-2">Teléfono: +506 2232-2525</p>
                    <p className="text-blue-200 text-sm mt-2">Costa Rica</p>
                </div>

            </div>

            {/* Línea inferior */}
            <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300 text-sm">
                © {new Date().getFullYear()} Fly74. Todos los derechos reservados.
            </div>
        </footer>
    );
}
