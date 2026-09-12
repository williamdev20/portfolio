'use client';

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    image: "images/projects/passaaqui.webp",
    title: "PASSAAQUI",
    category: "TURISMO E COMÉRCIO LOCAL",
    description:
      "Aplicativo mobile que conecta turistas a comércios locais por meio de geolocalização e gamificação.",
    technologies: ["React Native", "Expo", "TypeScript"],
    repositoryUrl:
      "https://github.com/PassaAqui/passaaqui-mobile/tree/develop",
  },
  {
    id: 2,
    image: "images/projects/checai.webp",
    title: "CHECAI",
    category: "COMBATE À DESINFORMAÇÃO",
    description:
      "Backend para uma extensão de navegador que verifica informações presentes em cartazes e imagens utilizando OCR, busca semântica e IA.",
    technologies: ["FastAPI", "IA", "Docker"],
    repositoryUrl: "https://github.com/williamdev20/chec-ai-backend",
  },
  {
    id: 3,
    image: "images/projects/flashcard-ai.webp",
    title: "FLASHCARD AI",
    category: "GERAÇÃO INTELIGENTE DE FLASHCARDS",
    description:
      "API REST para geração automática de flashcards a partir de conteúdos encontrados na web.",
    technologies: ["Django", "DRF", "IA"],
    repositoryUrl: "https://github.com/Flashcard-ai/flashcard-ai",
  },
  {
    id: 4,
    title: "TEACOLHE",
    image: "images/projects/teacolhe.webp",
    category: "TECNOLOGIA E SAÚDE",
    description:
      "Aplicativo mobile desenvolvido para apoiar profissionais de enfermagem no atendimento a pacientes com TEA.",
    technologies: ["React Native", "Mobile", "Equipe"],
    repositoryUrl:
      "https://github.com/teacolhe-enfermagem/teacolhe-mobile",
  },
  {
    id: 5,
    title: "TOMAS",
    image: "images/projects/tomas.webp",
    category: "APOIO À NEURODIVERSIDADE",
    description:
      "Aplicação web para apoio a pessoas neurodivergentes, integrada a um modelo de IA de classificação desenvolvido pela equipe.",
    technologies: ["React", "IA", "UX/UI"],
    repositoryUrl: "https://github.com/harisoncleytondev/tomas",
  },
  {
    id: 6,
    title: "IARA",
    image: "images/projects/iara-web.webp",
    category: "COMUNICAÇÃO ACESSÍVEL",
    description:
      "Sistema integrado de visão computacional que traduz sinais em libras em voz, aplicação web em Django e protótipo de firmware utilizando ESP32.",
    technologies: ["Django", "ESP32", "Visão Computacional"],
    repositoryUrl: "https://github.com/williamdev20/iara-web",
  },
];

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const visibleProjects = [
    projects[currentProject],
    projects[(currentProject + 1) % projects.length],
  ];

  function handlePreviousProject() {
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  }

  function handleNextProject() {
    setCurrentProject((current) => (current + 1) % projects.length);
  }

  return (
    <section
      id="projects"
      className="border-t border-[#344A3B] bg-[#0C1010] px-6 py-16 text-[#E5E2D9] sm:px-10 md:px-16 lg:px-24 lg:py-24"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="projects-title"
            className="max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            Projetos
            <br />
            <span className="text-[#B87852]">em prática.</span>
          </h2>

          <p className="max-w-xs text-sm leading-6 text-[#9BA394] sm:text-base">
            Projetos desenvolvidos na prática, com diferentes tecnologias e experiências de trabalho em equipe.
          </p>
        </header>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className="group flex min-h-[460px] flex-col border border-[#687565]/50 bg-[#151A18] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#B87852] sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-[#B87852]">
                  {String(
                    ((currentProject + index) % projects.length) + 1,
                  ).padStart(2, "0")}{" "}
                  / Projeto
                </span>

                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir repositório do projeto ${project.title}`}
                  className="flex size-8 items-center justify-center text-[#B87852] transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                >
                  <span className="text-2xl leading-none">↗</span>
                </a>
              </div>

              <div className="mt-10 aspect-[16/8] overflow-hidden bg-[#344A3B]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    className="size-full object-cover"
                  />
                ) : (
                  <div
                    className="flex size-full items-center justify-center border border-dashed border-[#687565]/40"
                    aria-label={`Placeholder para imagem do projeto ${project.title}`}
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-[#687565]">
                      Imagem do projeto
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-10">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#B87852]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  {project.title}
                </h3>

                <div className="mt-5 h-px w-12 bg-[#B87852]" />

                <p className="mt-5 max-w-md text-sm leading-6 text-[#9BA394] sm:text-base">
                  {project.description}
                </p>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`Tecnologias utilizadas em ${project.title}`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="bg-[#E5E2D9] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide text-[#151A18]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <nav
          className="mt-8 flex items-center justify-between border-t border-[#344A3B] pt-6"
          aria-label="Navegação entre projetos"
        >
          <span className="font-mono text-xs text-[#687565]">
            {String(currentProject + 1).padStart(2, "0")} —{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePreviousProject}
              aria-label="Projeto anterior"
              className="flex size-11 items-center justify-center border border-[#687565] text-xl text-[#E5E2D9] transition hover:border-[#B87852] hover:bg-[#344A3B] hover:text-[#B87852]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={handleNextProject}
              aria-label="Próximo projeto"
              className="flex size-11 items-center justify-center border border-[#B87852] bg-[#B87852] text-xl text-[#0C1010] transition hover:-translate-y-1 hover:bg-[#E5E2D9]"
            >
              →
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}