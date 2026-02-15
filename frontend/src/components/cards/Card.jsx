import external_link from "../../assets/links/external-link.svg"

export default function Card({ img, title, stack, desc, github, site }) {
    return (
        <div className="border-2 border-white rounded-xl bg-gray-200 w-100 min-h-113 transition hover:-translate-y-2 hover:shadow-2xl hover:border-[#2a221f] relative">
            <img className="rounded-t-xl w-full h-48 object-cover" src={img} />
            <div className="flex flex-col p-4 gap-2 text-justify pb-12">
                <h3 className="text-2xl">{title}</h3>

                <div className="flex flex-row flex-wrap gap-3">
                    {stack.map((s, index) => (
                        <span className="border-2 border-[#3d1c33] transition hover:-translate-y-1 min-w-11  px-3 p-1 text-sm text-center rounded-2xl cursor-default" key={index}>
                            {s}
                        </span>
                    ))}
                </div>

                <p className="text-sm">{desc}</p>
                
                <div className="flex flex-row absolute bottom-4 gap-3 items-center">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <img 
                            className="rounded-2xl w-8 h-8 transition hover:-translate-y-2" 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                            alt="GitHub"
                        />
                    </a>
                    <a href={site} target="_blank" rel="noopener noreferrer">
                        <img className="w-7 h-7 transition hover:-translate-y-2" src={external_link} alt="Link do projeto" />
                    </a>
                </div>
               
            </div>
        </div>
    )
}