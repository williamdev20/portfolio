const ferramentas = [
  { numero: "01", nome: "Python", categoria: "Linguagem" },
  { numero: "02", nome: "Django", categoria: "Framework" },
  { numero: "03", nome: "Django REST", categoria: "APIs" },
  { numero: "04", nome: "React", categoria: "Frontend" },
  { numero: "05", nome: "React Native", categoria: "Mobile" },
  { numero: "06", nome: "FastAPI", categoria: "Backend" },
  { numero: "07", nome: "Docker", categoria: "Infraestrutura" },
];

export default function ToolKit() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-heading"
      className="bg-[#344A3B] px-5 py-16 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center md:gap-16">
        <div className="flex flex-col text-center md:max-w-xs md:text-left">
          <h2
            id="tecnologias-heading"
            className="text-4xl font-bold leading-tight text-[#E5E2D9] sm:text-5xl"
          >
            Minha <span className="text-[#B87852]">Stack.</span>
            <br />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#9BA394]">
            Tecnologias que fazem parte do meu dia a dia e que venho aprimorando na prática, através de projetos reais.
          </p>
        </div>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {ferramentas.map((item) => (
            <li
              key={item.numero}
              className="flex items-center justify-between rounded-md bg-[#0C1010] px-6 py-5"
            >
              <div>
                <p className="text-lg font-bold text-[#E5E2D9]">{item.nome}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#687565]">
                  {item.categoria}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#B87852]">{item.numero}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="text-[#B87852]"
                >
                  <path
                    d="M3.5 12.5L12.5 3.5M12.5 3.5H5M12.5 3.5V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}