import { useState, useEffect } from "react"
import api from "../api/api"
import Card from "./cards/Card"
import iara_firmware from "../assets/projects/iara-firmware.jpg"
import iara_web from "../assets/projects/iara-web.jpg"
import tomas from "../assets/projects/tomas.jpg"
import flashcard from "../assets/projects/flashcard.jpg"
import portfolio from "../assets/background/background.svg"

export default function Projects() {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await api.get("/projects/");
        setProjects(response.data);
        console.log(response);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <section id="projetos" className="bg-[#607848] bg-cover min-h-screen bg-center items-center">
            <h2 className="text-center pt-10 text-white text-5xl font-bold">Projetos</h2>
            <div className="flex flex-row flex-wrap gap-8 justify-center items-start p-10">
                {projects && 
                    projects.map((project) => (
                        <Card key={project.id}
                            img={project.image}
                            title={project.title}
                            stack={project.stack}
                            desc={project.description}
                            github={project.github}
                            site={project.site}
                        />
                    ))
                }
                
                {/*
                <Card
                    img={iara_firmware}
                    title={"IARA | Firmware"}
                    stack={["C++", "C"]}
                    desc={"Protótipo do firmware de um projeto colaborativo de um colar inteligente para capturar sinais em Libras e enviá-los a um modelo de visão computacional identifica os gestos e os converte em fala em tempo real."}
                    github={"https://github.com/williamdev20/iara"}
                    link={"https://tomasdev-test.vercel.app/"}
                />
                <Card
                    img={iara_web}
                    title={"IARA | Web"}
                    stack={["Python", "Django"]}
                    desc={"Versão Web de um projeto colaborativo de um colar inteligente para capturar sinais em Libras e enviá-los a um modelo de visão computacional identifica os gestos e os converte em fala em tempo real."}
                    github={"https://github.com/williamdev20/iara-web"}
                    link={"https://tomasdev-test.vercel.app/"}
                /> 
                <Card
                    img={tomas}
                    title={"TOMAS | Web"}
                    stack={["JS", "Express", "PostgreSQL", "React"]}
                    desc={"Projeto Integrador desenvolvido por alunos do 1º ano C do Senac Paulista (PE). O projeto é uma RAG projetada para atender às necessidades de pessoas neurodivergentes."}
                    github={"https://github.com/harisoncleytondev/tomas"}
                    link={"https://tomasdev-test.vercel.app/"}
                /> 
                <Card
                    img={portfolio}
                    title={"Portfolio"}
                    stack={["Python", "DRF", "React", "Tailwindcss"]}
                    desc={"Portfolio Web com sistema de CMS e backoffice com o painel admin do Django."}
                    github={"https://github.com/williamdev20/portfolio"}
                    link={"https://tomasdev-test.vercel.app/"}
                />
                <Card
                    img={flashcard}
                    title={"Flashcard AI"}
                    stack={["Python", "DRF", "Docker", "PostgreSQL"]}
                    desc={"O Flashcard AI é um projeto colaborativo de criação de flashcards inteligentes de uso manual ou com Inteligência Artifical para ajudar a vida dos estudantes."}
                    github={"https://github.com/Flashcard-AI/flashcard-ai"}
                    link={"https://tomasdev-test.vercel.app/"}
                />
                */}
            </div>
        </section>
    )
}