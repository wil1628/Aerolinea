import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="backdrop-blur-md bg-blue-900/90 text-white px-6 md:px-10 py-5 shadow-lg fixed w-full top-0 z-50">

            <div className="flex justify-between items-center">
                {/* LOGO */}
                <h1 className="text-3xl font-extrabold tracking-wide hover:text-blue-300 hover:scale-110 transition-all duration-300 inline-block">
                    Fly<span className="text-blue-300">74</span>
                </h1>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none"
                >
                    <div className="space-y-1">
                        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </div>
                </button>

                {/* MENÚ DESKTOP */}
                <ul className="hidden md:flex gap-10 text-lg font-medium">
                    <li className="relative group">
                        <a href="#hero" className="hover:text-blue-300 hover:scale-110 transition-all duration-300 inline-block">
                            Inicio
                        </a>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative group">
                        <a href="#about" className="hover:text-blue-300 hover:scale-110 transition-all duration-300 inline-block">
                            Nosotros
                        </a>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative group">
                        <a href="#aircraft" className="hover:text-blue-300 hover:scale-110 transition-all duration-300 inline-block">
                            Aeronaves
                        </a>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative group">
                        <a href="#pilot" className="hover:text-blue-300 hover:scale-110 transition-all duration-300 inline-block">
                            Pilotos
                        </a>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative group">
                        <a href="#coming-soon" className="hover:text-blue-300 hover:scale-110 transition-all duration-300 inline-block">
                            Próximamente
                        </a>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>

            {/* MENÚ MÓVIL */}
            {open && (
                <ul className="md:hidden mt-6 space-y-6 text-center text-lg font-medium bg-blue-900/95 py-8 rounded-xl shadow-xl animate-slideDown">

                    {[
                        { name: "Inicio", link: "#hero" },
                        { name: "Nosotros", link: "#about" },
                        { name: "Aeronaves", link: "#aircraft" },
                        { name: "Pilotos", link: "#pilot" },
                        { name: "Próximamente", link: "#coming-soon" },
                    ].map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.link}
                                onClick={() => setOpen(false)}
                                className="block hover:text-blue-300 transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
