import Image from 'next/image';


export default function Content() {
  return (
    <main className="relative flex flex-col h-fit w-full bg-sea">
      <div className="absolute top-0 left-0 w-full h-28 overflow-visible">
        <Image
          src="/curva-top.svg"
          alt="Curva superior"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>

      <div className="flex flex-grow justify-center items-center flex-col text-center z-10 py-20">
        <h1 className="text-6xl text-black">Corrosão:</h1>
        <p className="text-4xl">Introdução e Avaliação</p>
      </div>
      
      <div className="flex flex-grow justify-start items-center flex-col text-start z-10 pb-32">
        <p className="text-4xl mt-12">2024</p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-28 overflow-visible">
        <Image
          src="/curva-bottom.svg"
          alt="Curva inferior"
          layout="fill"
          objectFit="fill"
        />
      </div>
    </main>
  );
}