"use client";

import { useState } from "react";

const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((current) => !current);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="relative flex min-h-screen w-full flex-col bg-[#0C1010] text-[#E5E2D9]"
      style={{
        backgroundImage: "url('/images/hero/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav
        aria-label="Navegação principal"
        className="fixed inset-x-0 top-0 z-50 border-b border-[#344A3B]/40 bg-[#0C1010]/80 backdrop-blur-md"
      >
        <div className="flex h-16 items-center justify-between px-5 sm:px-8 md:px-12">
          <a
            href="#inicio"
            onClick={handleMenuClose}
            className="text-base font-semibold tracking-tight text-[#E5E2D9]"
          >
            William<span className="text-[#B87852]">Alves</span>
          </a>

          <ul className="hidden items-center gap-6 text-sm text-[#9BA394] md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-[#E5E2D9]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://github.com/williamdev20"
              aria-label="GitHub"
              className="text-[#9BA394] transition-colors hover:text-[#E5E2D9]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/williamalves20"
              aria-label="LinkedIn"
              className="text-[#9BA394] transition-colors hover:text-[#E5E2D9]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#344A3B] text-[#E5E2D9] transition-colors hover:bg-[#344A3B] md:hidden"
          >
            {isMenuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4.5H16M2 9H16M2 13.5H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-[#344A3B]/40 bg-[#0C1010]/95 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
            }`}
        >
          <ul className="flex flex-col px-5 py-4 sm:px-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleMenuClose}
                  className="block border-b border-[#344A3B]/30 py-3 text-sm text-[#9BA394] transition-colors hover:text-[#E5E2D9]"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="flex gap-5 pt-5">
              <a
                href="#"
                aria-label="GitHub"
                onClick={handleMenuClose}
                className="text-[#9BA394] transition-colors hover:text-[#B87852]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                onClick={handleMenuClose}
                className="text-[#9BA394] transition-colors hover:text-[#B87852]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="inicio"
        aria-labelledby="hero-heading"
        className="flex flex-1 flex-col items-center justify-center gap-8 px-5 pb-10 pt-24 sm:px-8 md:flex-row md:gap-10 md:px-12 md:pt-24 lg:px-20"
      >
        <div className="order-2 flex max-w-xl flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <p className="mb-3 text-sm text-[#9BA394]">
            Olá, me chamo William Alves
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-tight text-[#E5E2D9] sm:text-6xl md:text-7xl"
          >
            Desenvolvedor
            <br />
            <span className="text-[#B87852]">Backend & Mobile</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#9BA394] sm:text-lg">
            Desenvolvedor focado em backend e mobile, com experiência em APIs,
            integração de serviços, bancos de dados e aplicações
            multiplataforma.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/documents/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#B87852] px-6 py-3 text-center text-sm font-medium text-[#0C1010] transition-opacity hover:opacity-90"
            >
              Ver currículo
            </a>

            <a
              href="#contato"
              className="rounded-full border border-[#687565] px-6 py-3 text-center text-sm font-medium text-[#E5E2D9] transition-colors hover:bg-[#151A18]"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="order-1 relative md:order-2">
          <div className="h-64 w-64 overflow-hidden rounded-full border-2 border-[#344A3B] sm:h-80 sm:w-80 md:h-96 md:w-96">
            <img
              src="/images/hero/profile-photo.webp"
              alt="Foto de perfil de William Alves, desenvolvedor backend e mobile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </header>
  );
}