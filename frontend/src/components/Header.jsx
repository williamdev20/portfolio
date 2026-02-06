import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize"

export default function Header() {
    const { width } = useWindowSize();
    const [menu, setMenu] = useState(false);
    
    useEffect(() => {
        if (width >= 1024) {
            setMenu(false);
        }
    }, [width]);

    return (
        <>
            <nav className="fixed top-0 inset-x-0 bg-[#789048]/70 flex flex-row items-center w-full p-4 z-20 gap-5">
                <h2 className="text-white text-xl sm:text-2xl sm:mr-auto">
                    <a href="#hero">{"<WA />"}</a>
                </h2>

                {width >= 1024 ? (
                    <>
                        <h2 className="text-white text-lg sm:text-xl transition hover:-translate-y-1">
                            <a href="#sobre">Sobre</a>
                        </h2>
                        <h2 className="text-white text-lg sm:text-xl transition hover:-translate-y-1">
                            <a href="#projetos">Projetos</a>
                        </h2>
                        <h2 className="text-white text-lg sm:text-xl transition hover:-translate-y-1">
                            <a href="#certificacao">Certificações</a>
                        </h2>
                        <h2 className="text-white text-lg sm:text-xl transition hover:-translate-y-1">
                            <a href="#contato">Contato</a>
                        </h2>
                        <a href="https://www.linkedin.com/in/williamalves20/">
                            <img className="w-8 h-8 transition hover:-translate-y-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/williamdev20">
                            <img className="bg-white rounded-2xl w-8 h-8 transition hover:-translate-y-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
                        </a>
                    </>
                ) : (
                    <button 
                        className="text-white text-3xl ml-auto" onClick={() => setMenu(!menu)} aria-label="Menu"> {menu ? "✕" : "☰"} </button>
                )}
            </nav>

            {menu && (
                <div className="fixed top-17 left-0 right-0 bg-[#789048]/70 flex flex-col items-center w-full z-30 gap-5 p-4">
                    <h2 className="text-white text-lg sm:text-xl underline">
                        <a href="#sobre" onClick={() => setMenu(false)}>Sobre</a>
                    </h2>
                    <h2 className="text-white text-lg sm:text-xl underline">
                        <a href="#projetos" onClick={() => setMenu(false)}>Projetos</a>
                    </h2>
                    <h2 className="text-white text-lg sm:text-xl underline">
                        <a href="#certificacao" onClick={() => setMenu(false)}>Certificações</a>
                    </h2>
                    <h2 className="text-white text-lg sm:text-xl underline">
                        <a href="#contato" onClick={() => setMenu(false)}>Contato</a>
                    </h2>
                </div>
            )}
        </>
    )
}