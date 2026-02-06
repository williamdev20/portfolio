import background from '../assets/background/background.svg'
import perfil from '../assets/perfil/perfil.jpg'
import Header from './Header'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
            <div className="absolute inset-0 bg-black/15 z-10" />
            

            <div className='flex flex-col justify-center items-center h-screen gap-3'>
                <img className="w-45 h-45 rounded-full border-white border-5 z-11" src={perfil} alt="perfil photo" />
                <h1 className="text-white text-3xl font-bold z-11">William Alves</h1>
                <p className="text-white text-base z-11">Desenvolvedor Backend</p>
            </div>

        </section>
    )
}