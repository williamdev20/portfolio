import { useState, useEffect } from "react"
import api from "../api/api"
import Card from "./cards/Card"

export default function Projects() {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await api.get("/projects/");
        setProjects(response.data);
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
            </div>
        </section>
    )
}