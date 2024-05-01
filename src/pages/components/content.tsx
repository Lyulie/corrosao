export default function Content() {
    return (
        <main className="
            flex
            h-[540px] 
            w-full 
            justify-between 
            flex-col 
            bg-sea"
        >
            <div className="flex w-full oval self-center bg-blue-300 mb-4 rotate-180"></div>

            <div className="flex justify-center flex-col items-center">
                <h1 className='
                  text-6xl 
                  text-black
                '>Livro Corrosão:</h1>

                <p className='text-4xl'>Introdução e Avaliação</p>

                <p className='
                  text-4xl 
                  mt-12
                '>2024</p>
            </div>

            <div className="flex w-full oval self-center bg-blue-300 mt-4"></div>
        </main>
    )
}