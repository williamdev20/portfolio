import Image from "next/image";

type Achievement = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  rarity: string;
  status: string;
  metadata: string[];
};

const achievements: Achievement[] = [
  {
    id: 1,
    category: "PLATINA PESSOAL",
    title: "Projeto A.L.A.N",
    description:
      "Participei de um Ideathon promovido pela RFEC (Recife Front End Community), onde o desafio era desenvolver uma solução utilizando Inteligência Artificial voltada para a acessibilidade digital.",
    image: "/images/achievements/achievements.webp",
    rarity: "PLATINA",
    status: "DESBLOQUEADA",
    metadata: ["01/08/2026", "TRABALHO EM EQUIPE", "PE / BR"],
  },
];

export function Achievements() {
  return (
    <section
      id="conquistas"
      className="border-t border-[#344A3B] bg-[#0C1010] px-6 py-16 text-[#E5E2D9] sm:px-10 md:px-16 lg:px-24 lg:py-24"
      aria-labelledby="achievements-title"
    >
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2
              id="achievements-title"
              className="text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl"
            >
              Conquistas
              <br />
              <span className="text-[#B87852]">desbloqueadas.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#9BA394] sm:text-base">
              Experiências em hackathons e ideathons, trabalhando em equipe para desenvolver ideias e soluções na prática.
            </p>
          </div>
        </header>

        <div className="mt-14">
          {achievements.map((achievement) => (
            <article
              key={achievement.id}
              className="group grid overflow-hidden transition-transform duration-300 hover:-translate-y-2 lg:grid-cols-[1.6fr_1fr]"
              aria-labelledby={`achievement-${achievement.id}-title`}
            >
              <div className="bg-[#151A18]">
                <header className="flex h-11 items-center justify-between bg-[#E5E2D9] px-4 text-[#151A18]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-medium uppercase">
                      IDEATHON
                    </span>
                  </div>
                </header>

                <figure className="relative aspect-[16/10] overflow-hidden bg-[#344A3B]">
                  <Image
                    src={achievement.image}
                    alt={`Registro da conquista: ${achievement.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </figure>

                <div className="bg-[#E5E2D9] p-5 text-[#151A18] sm:p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#B87852]">
                        Conquista desbloqueada
                      </p>

                      <h3
                        id={`achievement-${achievement.id}-title`}
                        className="mt-3 max-w-lg text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl"
                      >
                        3º lugar no Ideathon RFEC
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-[#687565] sm:text-base">
                    {achievement.description}
                  </p>

                  <footer className="mt-6 border-t border-[#687565]/30 pt-4">
                    <ul
                      className="flex flex-wrap gap-x-4 gap-y-2"
                      aria-label="Informações da conquista"
                    >
                      {achievement.metadata.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[10px] uppercase tracking-wider text-[#687565]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </div>

              <aside className="flex min-h-[460px] flex-col justify-between bg-[#344A3B] p-6 sm:p-8 lg:p-10">
                <div>
                  <span className="block text-right font-mono text-5xl font-medium tracking-[-0.06em] text-[#B87852] sm:text-6xl md:text-7xl">
                    {String(achievement.id).padStart(2, "0")}
                  </span>

                  <p className="mt-10 font-mono text-[10px] uppercase tracking-wider text-[#B87852]">
                    {achievement.category}
                  </p>

                  <h3 className="mt-3 max-w-xs text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-[#E5E2D9] sm:text-5xl">
                    {achievement.title}
                  </h3>

                  <div className="mt-7 h-px w-12 bg-[#B87852]" />

                  <p className="mt-5 max-w-xs text-sm leading-6 text-[#9BA394]">
                    Projeto desenvolvido para Comunicação Aumentativa e Alternativa (CAA). A proposta era utilizar um Modelo de Linguagem de Grande Escala (LLM) para prever, em tempo real, os próximos pictogramas que uma criança não verbal provavelmente desejaria utilizar, considerando o contexto da conversa e o histórico de uso. A ideia é tornar a comunicação mais rápida, intuitiva e personalizada.
                  </p>
                </div>

                <div className="mt-12 border-t border-[#687565] pt-5">
                </div>
              </aside>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}