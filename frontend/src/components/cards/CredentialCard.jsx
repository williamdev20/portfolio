export default function CredentialCard({ img, title, desc, credential, cardWidth }) {
    return (
        <div className="shrink-0 border-2 border-white rounded-xl bg-gray-200 h-101 sm:h-96 transition hover:-translate-y-2 hover:shadow-2xl hover:border-[#2a221f] overflow-hidden" style={{ width: `${cardWidth}px` }}>
            <img className="bg-white w-full h-48 object-contain" src={img} />   
            <div className="flex flex-col p-4 gap-2 ">
                <h3 className="text-xl">{title}</h3>
                <p className="text-sm">{desc}</p>
                <a className="bg-[#2a221f] hover:bg-[#3d1c33] text-white  content-center text-center rounded-md w-40 h-10 cursor-pointer absolute bottom-3">{credential}</a>
            </div>
        </div>
    )
}