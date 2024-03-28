import Link from 'next/link';

export default function Chapters() {
    return (
        <div className='w-full overflow-auto p-10 bg-sea'>
            <ul className='flex flex-col gap-4 text-2xl'>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 1 - Introdução.pdf" target="blank">
                        Capitulo 1 - Introdução
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 2 - Mecanismos reativos básicos da corrosão de materiais metálicos.pdf" target="blank">
                        Capítulo 2 - Mecanismos reativos básicos da corrosão de materiais metálicos
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 3 - Potencial elétrico.pdf" target="blank">
                        Capítulo 3 - Potencial elétrico
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 4 - Polarização.pdf" target="blank">
                        Capítulo 4 - Polarização
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 5 - Ensaios de polarização.pdf" target="blank">
                        Capítulo 5 - Ensaios de polarização
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 6 - Passivação.pdf" target="blank">
                        Capítulo 6 - Passivação
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 7 - Ensaios de impedância eletroquímica.pdf" target="blank">
                        Capítulo 7 - Ensaios de impedância eletroquímica
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 8 - Taxa de corrosão.pdf" target="blank">
                        Capítulo 8 - Taxa de corrosão
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 9 - Corrosão seletiva e localizada.pdf" target="blank">
                        Capítulo 9 - Corrosão seletiva e localizada
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 10 - Corrosão sob tensão e corrosão-fadiga em meios aquosos.pdf" target="blank">
                        Capítulo 10 - Corrosão sob tensão e corrosão-fadiga em meios aquosos
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 11 - Corrosão atmosférica.pdf" target="blank">
                        Capítulo 11 - Corrosão atmosférica
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 12 - Corrosão em solos e em águas naturais.pdf" target="blank">
                        Capítulo 12 - Corrosão em solos e em águas naturais
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 13 - Corrosão induzida por microrganismos.pdf" target="blank">
                        Capítulo 13 - Corrosão induzida por microrganismos
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 14  - Corrosão por gases ou vapores.pdf" target="blank">
                        Capítulo 14  - Corrosão por gases ou vapores
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-blue-900' href="/pdf/Capítulo 15 - Corrosão ou degradação química de materiais não metálicos.pdf" target="blank">
                        Capítulo 15 - Corrosão ou degradação química de materiais não metálicos
                    </Link>
                </li>
            </ul>
        </div>
    )
}