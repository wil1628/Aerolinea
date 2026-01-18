import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="backdrop-blur-md text-white px-6 md:px-10 shadow-lg fixed w-full top-0 z-50">
            <div className="flex justify-between items-center">

                {/* LOGO DESTACADO */}
                <a
                    href="#hero"
                    className="flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
                >
                    <img
                        src="/Logo de Fly74 con av.png"
                        alt="Logo de Fly74"
                        className="h-24 w-auto drop-shadow-2xl"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl md:text-2xl font-bold tracking-wide">
                            Fly74
                        </span>
                        <span className="text-[0.7rem] md:text-xs text-blue-200 italic tracking-wide">
                            Operated by Charq Estudio S.A.
                        </span>
                    </div>
                </a>

                {/* BOTÓN HAMBURGUESA (si luego agregas menú) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none"
                >
                    <div className="space-y-1">
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </div>
                </button>

            </div>
        </nav>
    );
}
