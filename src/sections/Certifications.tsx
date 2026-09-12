"use client";

import { useState } from "react";

type Certification = {
  id: number;
  type: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  institutionImage?: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    type: "Ensino Médio + Curso Técnico",
    institutionImage: "images/certifications/senac.webp",
    title: "Desenvolvimento de sistemas",
    institution: "Senac Paulista · Pernambuco",
    period: "2025 — 2027",
    description:
      "Formação técnica voltada ao desenvolvimento de sistemas, programação, bancos de dados e desenvolvimento de aplicações.",
  },
  {
    id: 2,
    type: "CERTIFICAÇÃO",
    title: "Fundamentos do Python 1",
    institution: "Cisco Networking Academy",
    period: "Jan/2026 · 30h",
    description:
      "Curso introdutório de programação em Python, abordando fundamentos da linguagem, estruturas de controle, tipos de dados e conceitos básicos de desenvolvimento.",
    institutionImage: "images/certifications/cisco.webp",
  },
  {
    id: 3,
    type: "CERTIFICAÇÃO",
    title: "Gerenciamento de Ameaças Cibernéticas",
    institution: "Cisco Networking Academy",
    period: "Set/2025 · 16h",
    description:
      "Formação voltada à identificação, análise e gerenciamento de ameaças cibernéticas, com fundamentos de segurança da informação.",
    institutionImage: "images/certifications/cisco.webp",
  },
  {
    id: 4,
    type: "CERTIFICAÇÃO",
    title: "Defesa de Redes",
    institution: "Cisco Networking Academy",
    period: "Mar/2025 · 27h",
    description:
      "Curso focado em fundamentos de defesa de redes, identificação de vulnerabilidades e aplicação de conceitos de segurança em ambientes de rede.",
    institutionImage: "images/certifications/cisco.webp",
  },
];

export function Certifications() {
  const [currentCertification, setCurrentCertification] = useState(0);

  const certification = certifications[currentCertification];

  function handlePreviousCertification() {
    setCurrentCertification((current) =>
      current === 0 ? certifications.length - 1 : current - 1,
    );
  }

  function handleNextCertification() {
    setCurrentCertification(
      (current) => (current + 1) % certifications.length,
    );
  }

  return (
    <section
      id="formacao"
      aria-labelledby="certifications-title"
      className="border-t border-[#344A3B] bg-[#344A3B] px-6 py-16 text-[#E5E2D9] sm:px-10 md:px-16 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <header>
            <h2
              id="certifications-title"
              className="max-w-sm text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl"
            >
              Minhas certificações e
              <br />
              <span className="text-[#B87852]">formação</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#9BA394] sm:text-base">
              Minha formação técnica e os cursos que venho realizando ao longo da minha trajetória.
            </p>
          </header>

          <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
            <article className="flex min-h-[360px] flex-col justify-between bg-[#151A18] p-6 sm:min-h-[390px] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#B87852]">
                  {certification.type}
                </span>

                <span className="font-mono text-[9px] text-[#687565]">
                  {String(certification.id).padStart(2, "0")} /{" "}
                  {String(certifications.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-12">
                <div className="mb-6 flex size-14 items-center justify-center overflow-hidden border border-[#687565]/50 bg-[#344A3B]">
                  {certification.institutionImage ? (
                    <img
                      src={certification.institutionImage}
                      alt={`Logo da instituição ${certification.institution}`}
                      className="h-full w-full object-contain p-1"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="font-mono text-[8px] uppercase text-[#687565]"
                    >
                      LOGO
                    </span>
                  )}
                </div>


                <h3 className="max-w-md text-3xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                  {certification.title}
                </h3>

                <p className="mt-4 font-mono text-[9px] uppercase tracking-wider text-[#B87852]">
                  {certification.institution}
                </p>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-[#687565]">
                  {certification.period}
                </p>
              </div>

              <div className="mt-8 h-px w-12 bg-[#B87852]" />
            </article>

            <aside className="flex min-h-[260px] flex-col justify-between bg-[#C87249] p-6 text-[#0C1010] sm:min-h-[390px] sm:p-8">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-wider">
                  Certificações
                </span>

                <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.04em]">
                  Em atualização
                </h3>

                <p className="mt-5 max-w-xs text-xs leading-5 text-[#344A3B]">
                  Espaço reservado para certificações oficiais, cursos e
                  trilhas que serão adicionados ao portfólio.
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-[#344A3B]/40 pt-5">
                <span className="font-mono text-[8px] uppercase tracking-wider">
                  Navegação
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePreviousCertification}
                    aria-label="Certificação anterior"
                    className="flex size-10 items-center justify-center border border-[#344A3B] text-lg transition-colors hover:bg-[#344A3B] hover:text-[#E5E2D9]"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={handleNextCertification}
                    aria-label="Próxima certificação"
                    className="flex size-10 items-center justify-center border border-[#344A3B] bg-[#344A3B] text-lg text-[#E5E2D9] transition-colors hover:bg-[#E5E2D9] hover:text-[#0C1010]"
                  >
                    →
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <nav
          aria-label="Navegação entre certificações"
          className="mt-8 flex items-center justify-between border-t border-[#687565]/50 pt-5"
        >
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#9BA394]">
            Formação e certificações
          </span>

          <span className="font-mono text-xs text-[#9BA394]">
            {String(currentCertification + 1).padStart(2, "0")} —{" "}
            {String(certifications.length).padStart(2, "0")}
          </span>
        </nav>
      </div>
    </section>
  );
}