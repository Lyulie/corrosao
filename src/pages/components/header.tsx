import Image from "next/image"

export default function Header() {

    return (
        <div className="
            flex 
            w-full 
            h-56
            align-center 
            justify-start 
            flex-col
            bg-blue-50"
        >

            <div className="
            flex 
            w-full 
            flex-col
            ">
                <div className="
                    flex 
                    w-full 
                    h-36 
                    border-b-2
                    border-blue-100
                    justify-center
                    lg:justify-start
                ">
                    <Image
                        className="
                            lg:ml-10
                            object-cover 
                            w-20 
                            h-20 
                            flex 
                            self-center 
                            justify-center
                        "
                        src="/udesc.png"
                        alt="minha imagem"
                        width={140}
                        height={0}
                    />

                    <p className='
                        flex 
                        self-center 
                        font-bold 
                        text-2xl
                    '>Centro de Ciências Tecnológicas</p>


                </div>

                <div className='
                    flex 
                    w-full 
                    h-20
                    lg:px-20
                    px-5
                    justify-between 
                    items-center
                    text-2xl
                '>
                    <a href="/pdf/Autor.pdf" target="_blank">Autor</a>
                    <a href="/pdf/Citação.pdf" target="_blank">Citação</a>
                    <a href="/pdf/Normas%20ABNT%20usadas.pdf" target="_blank">Normas ABNT apresentadas</a>
                </div>
            </div>
        </div>
    )
}