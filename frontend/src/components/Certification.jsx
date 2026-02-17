import { useState, useEffect } from "react";
import api from "../api/api";
import CredentialCard from "./cards/CredentialCard";
import arrow from "../assets/arrows/arrow.png";

const certificados = [
    {
        img: "https://portoalegre.wordcamp.org/2017/files/2017/03/senac-logo.png?w=640",
        title: "Análise e Desenvolvimento de Sistemas",
        desc: "Iniciado em Fev. de 2025 (Em andamento)",
        credential: "Ver credencial"
    },
    {
        img: "https://cdn.freebiesupply.com/images/thumbs/2x/cisco-logo.png",
        title: "Fundamentos do Python 1",
        desc: "Concluído em Jan. de 2026",
        credential: "Ver credencial"
    },
    {
        img: "https://cdn.freebiesupply.com/images/thumbs/2x/cisco-logo.png",
        title: "Defesa de Rede",
        desc: "Concluído em Mar. de 2025",
        credential: "Ver credencial"
    },
    {
        img: "https://cdn.freebiesupply.com/images/thumbs/2x/cisco-logo.png",
        title: "Gerenciamento de Ameaças Cibernéticas",
        desc: "Concluído em Sep. de 2025",
        credential: "Ver credencial"
    },
    {
        img: "https://portoalegre.wordcamp.org/2017/files/2017/03/senac-logo.png?w=640",
        title: "Análise e Desenvolvimento de Sistemas",
        desc: "Iniciado em Fev. de 2025 (Em andamento)",
        credential: "Ver credencial"
    },
    {
        img: "https://portoalegre.wordcamp.org/2017/files/2017/03/senac-logo.png?w=640",
        title: "Análise e Desenvolvimento de Sistemas",
        desc: "Iniciado em Fev. de 2025 (Em andamento)",
        credential: "Ver credencial"
    },
]

export default function Certification() {
    const [certifications, setCertifications] = useState([]);

    const getCertifications = async () => {
        const response = await api.get("/certifications/");
        setCertifications(response.data);
    }

    useEffect(() => {
        getCertifications();
    }, []);

    const [index, setIndex] = useState(0);
    const [visibles, setVisibles] = useState(4);

    const cardWidth = visibles === 1 ? Math.min(280, window.innerWidth - 120) : 312;
    const gap = 20;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibles(1)
            else if (window.innerWidth < 1024) setVisibles(2)
            else if (window.innerWidth < 1280) setVisibles(3)
            else setVisibles(4)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (index + visibles > certifications.length) {
            setIndex(Math.max(0, certifications.length - visibles))
        }
    }, [visibles, certifications.length])

    const next = () => {
        setIndex((prev) => {
            if (prev + visibles >= certifications.length) return prev;
            return prev + 1;
        });
    };

    const previous = () => {
       setIndex((prev) => {
        if (prev === 0) return prev;
            return prev - 1;
       })
    }

    return (
       <section id="certificacao" className="bg-[#789048] flex flex-col bg-cover min-h-screen bg-center items-center">
            <h2 className="text-center text-white text-5xl mt-10 mb-auto font-bold">Certificações</h2>

            <div className="flex flex-row gap-5 items-center mb-auto">
                <button className="cursor-pointer md:m-2" type="button" onClick={previous}>
                    <img className="w-10 h-10 bg-white hover:bg-gray-100 rounded-4xl" src={arrow} alt="arrow" />
                </button>

                <div className="overflow-hidden py-2" style={{ width: `${visibles * cardWidth + (visibles - 1) * gap}px` }}>
                    <div
                        className="flex flex-row gap-5 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * (cardWidth + gap)}px)` }}
                    >
                        {certifications &&
                            certifications.map((certification) => (
                                <CredentialCard key={certification.id}
                                    img={certification.image}
                                    title={certification.title}
                                    period={certification.period}
                                    credential={certification.credential_link}
                                    cardWidth={cardWidth}
                                />
                            ))
                        }
                    </div>
                </div>

                <button className="cursor-pointer md:m-2" type="button" onClick={next}>
                    <img className="w-10 h-10 rotate-180 bg-white hover:bg-gray-100 rounded-4xl" src={arrow} alt="arrow" />
                </button>
            </div>
        </section>
    )
}