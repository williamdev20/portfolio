export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="bg-[#0C1010] px-5 py-16 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        <div className="relative w-full max-w-sm md:max-w-md">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-2 border-[#B87852]" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#151A18]">
            <img
              src="/images/about/photo-about.webp"
              alt="Foto de William Alves de Freitas"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 right-6 flex items-center gap-2 rounded-md bg-[#B87852] px-4 py-2 text-sm font-semibold text-[#0C1010]">
            WA
          </div>
        </div>

        <div className="flex w-full flex-col text-center md:text-left">
          <h2
            id="about-heading"
            className="text-4xl font-bold leading-tight text-[#E5E2D9] sm:text-5xl"
          >
            Introdução
            <br />
            <span className="text-[#B87852]">sobre mim.</span>
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-[#9BA394] sm:text-lg">
            <p>
              Olá, me chamo William Alves. Programo desde os 13 anos e hoje curso o Técnico em
              Análise e Desenvolvimento de Sistemas no Senac Pernambuco, sempre buscando aprender
              construindo projetos reais.
            </p>
            <p>
              Tenho experiência prática com Python, Django, FastAPI, React Native e TypeScript, e
              gosto especialmente de aplicar inteligência artificial na resolução de problemas,
              seja com agentes de IA, busca semântica, OCR ou visão computacional.
            </p>
            <p>
              Já atuei em projetos colaborativos como o PassaAqui, o ChecAI e o IARA, integrando
              frontend, backend e serviços de IA em equipe. Ao longo desses projetos, venho desenvolvendo experiência tanto na construção de sistemas quanto no trabalho colaborativo em diferentes etapas do desenvolvimento.
            </p>
          </div>

          <a
            href="#contato"
            className="mt-8 inline-flex items-center justify-center gap-2 self-center text-sm font-semibold uppercase tracking-wide text-[#B87852] transition-opacity hover:opacity-80 md:self-start"
          >
            Vamos conversar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 12.5L12.5 3.5M12.5 3.5H5M12.5 3.5V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}