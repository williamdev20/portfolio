import perfil from '../assets/perfil/perfil.jpg'

export default function About() {
    return (
        <section id="sobre" className="bg-[#789048] flex flex-col md:flex-row min-h-screen bg-cover bg-center justify-center items-center gap-10 p-6 md:p-50">
            <img className="w-60 h-60 md:w-80 md:h-80 rounded-2xl  border-white border-5" src={perfil} alt="perfil photo" />
            <div className='flex flex-col gap-7 items-center md:items-baseline'>
                <h2 className='text-white font-bold text-4xl'>Sobre mim</h2>
                <p className='text-white text-base md:w-xl text-justify'>Olá, me chamo William Alves, tenho 16 anos, sou desenvolvedor backend com experiência em Python/Django e programo desde os 13 anos. Fiz parte da equipe de desenvolvimento do sistema RAG TOMAS (Tecnologia Orientada Mediante a Apoio e Sensibilidade) na minha formação técnica na escola Senac Paulista (PE) e atualmente atuo como um dos desenvolvedores de um colar inteligente chamado IARA (Inteligência Assistiva de Reconhecimento Auditivo e gestual).</p>
                <div className='flex flex-row gap-3 bg-[#4b6234] scrollbar-hide rounded-xl min-h-16 overflow-x-auto w-full md:w-fit items-center'>
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />              
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-line-wordmark.svg" />
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />          
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" />
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <img className='w-14 h-14 p-2 transition hover:-translate-y-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
                </div>
                <a className='bg-[#2a221f] hover:bg-[#3d1c33] text-white text-center transition hover:-translate-y-1 duration-200 ease-in-out cursor-pointer w-40 h-15 text-2xl md:text-base content-center md:w-30 md:h-10 p-2 rounded-lg' href="/curriculo/cv.docx.pdf">CV</a>
            </div>
        </section>
    )
}