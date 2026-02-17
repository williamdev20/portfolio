import perfil from '../assets/perfil/perfil.jpg'

export default function About() {
    return (
        <section id="sobre" className="bg-[#789048] flex flex-col lg:flex-row min-h-screen bg-cover bg-center justify-center items-center gap-10 p-6 sm:p-10 lg:p-20 xl:p-50">
            <img className="w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-2xl border-white border-5 object-cover shrink-0" src={perfil} alt="perfil photo" />
            <div className='flex flex-col gap-7 items-center lg:items-baseline w-full lg:max-w-xl'>
                <h2 className='text-white font-bold text-3xl sm:text-4xl'>Sobre mim</h2>
                <p className='text-white text-sm sm:text-base text-justify w-full'>
                    Olá, me chamo William Alves, tenho 16 anos, sou desenvolvedor backend com experiência em Python/Django e programo desde os 13 anos. Fiz parte da equipe de desenvolvimento do sistema RAG TOMAS (Tecnologia Orientada Mediante a Apoio e Sensibilidade) na minha formação técnica na escola Senac Paulista (PE) e atualmente atuo como um dos desenvolvedores de um colar inteligente chamado IARA (Inteligência Assistiva de Reconhecimento Auditivo e gestual).
                </p>
                <div className='flex flex-row gap-3 bg-[#4b6234] scrollbar-hide rounded-xl min-h-16 overflow-x-auto w-full items-center px-2 md:justify-center'>
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />              
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-line-wordmark.svg" />
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />          
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" />
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <img className='w-12 h-12 sm:w-14 sm:h-14 p-2 shrink-0 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
                </div>
                <a className='bg-[#2a221f] hover:bg-[#3d1c33] text-white text-center transition hover:-translate-y-1 duration-200 ease-in-out cursor-pointer w-40 h-15 text-2xl md:text-base content-center md:w-30 md:h-10 p-2 rounded-lg' href="/curriculo/cv.docx.pdf">CV</a>
            </div>
        </section>
    )
}