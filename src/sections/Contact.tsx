export function Contact() {
  return (
    <footer
      id="contato"
      className="border-t border-[#344A3B] bg-[#151A18] px-6 py-16 text-[#E5E2D9] sm:px-10 md:px-16 lg:px-24 lg:py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <section>
            <h2
              id="contact-title"
              className="max-w-xl text-5xl font-semibold leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-7xl"
            >
              Tem uma ideia?
              <br />
              <span className="text-[#B87852]">Me chama.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-6 text-[#9BA394] sm:text-base">
              Se você tem um problema interessante, uma pergunta ou quer
              trocar uma ideia sobre tecnologia, minha caixa de entrada está
              aberta.
            </p>

            <a
              href="mailto:william.alves.developer@gmail.com"
              className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] font-semibold tracking-wide text-[#E5E2D9] transition-colors hover:text-[#B87852] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87852] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151A18]"
            >
              <span
                aria-hidden="true"
                className="text-base text-[#9BA394]"
              >
                ✉
              </span>
              william.alves.developer@gmail.com
              <span aria-hidden="true">↗</span>
            </a>

            <nav
              className="mt-10 flex items-center gap-6"
              aria-label="Redes sociais"
            >
              <a
                href="https://github.com/williamdev20"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-wider text-[#687565] transition-colors hover:text-[#B87852] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87852]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/williamalves20"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-wider text-[#687565] transition-colors hover:text-[#B87852] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87852]"
              >
                LinkedIn
              </a>
            </nav>
          </section>

          <section aria-labelledby="contact-form-title">
            <form
              className="border-t-2 border-[#B87852] bg-[#E5E2D9] p-5 text-[#151A18] shadow-[12px_12px_0_#0C1010] sm:p-6"
              action="#"
              method="POST"
            >
              <div className="flex items-start justify-between gap-6">
                <h3
                  id="contact-form-title"
                  className="font-mono text-[11px] font-bold uppercase tracking-wider"
                >
                  Mensagem rápida
                </h3>

                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-[#B87852]"
                >
                  ↗
                </span>
              </div>

              <fieldset className="mt-7 space-y-6">
                <legend className="sr-only">Informações de contato</legend>

                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-[12px] uppercase tracking-wider text-[#687565]"
                  >
                    Nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    required
                    className="mt-2 w-full border-0 border-b border-[#687565]/50 bg-transparent px-0 pb-3 text-sm text-[#151A18] outline-none placeholder:text-[#9BA394] focus:border-[#B87852] focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-[12px] uppercase tracking-wider text-[#687565]"
                  >
                    E-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@exemplo.com"
                    required
                    className="mt-2 w-full border-0 border-b border-[#687565]/50 bg-transparent px-0 pb-3 text-sm text-[#151A18] outline-none placeholder:text-[#9BA394] focus:border-[#B87852] focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[12px] uppercase tracking-wider text-[#687565]"
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Conte um pouco sobre a ideia..."
                    required
                    className="mt-2 w-full resize-y border-0 border-b border-[#687565]/50 bg-transparent px-0 pb-3 text-sm text-[#151A18] outline-none placeholder:text-[#9BA394] focus:border-[#B87852] focus:ring-0"
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-3 bg-[#B87852] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#E5E2D9] transition-colors hover:bg-[#76513D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B87852] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E5E2D9]"
              >
                Enviar mensagem
              </button>
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
}