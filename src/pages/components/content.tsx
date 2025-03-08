import Image from 'next/image';


export default function Content() {
    return (
        <main className="relative flex flex-col h-fit w-full bg-sea">

            <div className="absolute top-0 left-0 w-full h-20">
                <Image src="/curva.svg" alt="Curva Topo" layout="fill" objectFit="cover" />
            </div>
    
            <div className="flex flex-grow justify-center items-center flex-col text-center z-10 py-20">
                <h1 className="text-6xl text-black">Corrosão:</h1>
                <p className="text-4xl">Introdução e Avaliação</p>
                <p className="text-4xl mt-12">2024</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 rotate-180">
                <Image src="/curva.svg" alt="Curva Fundo" layout="fill" objectFit="cover" />
            </div>
        </main>
    );
}