import useWindowSize from "../hooks/useWindowSize"

export default function Contact() {
    const { width } = useWindowSize();
    
    return (
        <section id="contato" className="bg-[#2a221f] flex flex-col sm:flex-row justify-center ">

            {width >= 1024 ? (
                <>
                    <form className="flex flex-col p-10 sm:p-20" action="">
                        <label className="text-white text-base">Nome</label>
                        <input className="bg-white w-80 sm:w-90 h-12 mb-5 mt-2 rounded-sm outline-0 focus:border-2 focus:border-gray-500" required placeholder="Digite seu nome" type="text" name="" id="" />
                        <label className="text-white text-base">Email</label>
                        <input className="bg-white w-80 sm:w-90 h-12 mb-5 mt-2 rounded-sm outline-0 focus:border-2 focus:border-gray-500" required placeholder="Digite seu email" type="email" name="" id="" />
                        <label className="text-white text-base">Mensagem</label>
                        <textarea className="bg-white w-80 sm:w-90 h-22 mt-2 rounded-sm outline-0 focus:border-2 focus:border-gray-500" required placeholder="Digite a mensagem" name="" id=""></textarea>
                        <button className="bg-[#887e44] hover:bg-[#675f30] w-80 sm:w-90 h-10 mt-7 rounded-sm cursor-pointer text-lg text-white" type="submit">Enviar</button>
                    </form>

                    <div className="text-white m-10 sm:m-20 flex flex-col gap-5">
                        <h2 className="text-4xl sm:text-5xl">Vamos construir algo juntos?</h2>
                        <h3 className="text-2xl">Email</h3>
                        <a href="https://mailto:william.alves.developer@gmail.com" className="text-lg">william.alves.developer@gmail.com</a>
                        <h3 className="text-2xl">Redes</h3>
                        <div className="flex flex-row gap-5">
                            <a href="">
                                <img className="w-8 h-8 transition hover:-translate-y-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                            </a>
                            <a href="">
                                <img className="bg-white rounded-2xl w-8 h-8 transition hover:-translate-y-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            </a>
                        </div>
                    </div>    
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="text-white m-10 sm:m-20 flex flex-col gap-5">
                        <h2 className="text-4xl sm:text-5xl">Vamos construir algo juntos?</h2>
                        <h3 className="text-2xl">Email</h3>
                        <a href="https://mailto:williamalvs45@gmail.com" className="text-lg">william.alves.developer@gmail.com</a>
                        <h3 className="text-2xl">Redes</h3>
                        <div className="flex flex-row gap-5">
                            <a href="">
                                <img className="w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                            </a>
                            <a href="">
                                <img className="bg-white rounded-2xl w-8 h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            </a>
                        </div>
                    </div>
                    <form className="flex flex-col p-10 sm:p-20" action="">
                        <label className="text-white text-base">Nome</label>
                        <input className="bg-white w-80 sm:w-90 h-12 mb-5 mt-2 rounded-sm" required placeholder="Digite seu nome" type="text" name="" id="" />
                        <label className="text-white text-base">Email</label>
                        <input className="bg-white w-80 sm:w-90 h-12 mb-5 mt-2 rounded-sm" required placeholder="Digite seu email" type="email" name="" id="" />
                        <label className="text-white text-base">Mensagem</label>
                        <textarea className="bg-white w-80 sm:w-90 h-22 mt-2 rounded-sm" required placeholder="Digite a mensagem" name="" id=""></textarea>
                        <button className="bg-[#887e44] hover:bg-[#675f30] w-80 sm:w-90 h-10 mt-7 rounded-sm cursor-pointer text-lg text-white" type="submit">Enviar</button>
                    </form>

                </div>
            )}
            
        </section>
    )
}