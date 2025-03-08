import { useState } from "react";

interface FooterProps {
    onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {

    return (
        <footer className="
            flex
            w-full 
            h-60
            lg:h-40
            flex-col
            bg-blue-50
        ">
            <div className='
                flex 
                w-full 
                h-20 
                justify-between 
                items-center 
                lg:px-40
                px-5
                text-2xl
            '>
                <a href="/pdf/Prefácio.pdf" target="_blank">Prefácio</a>
                <a href="/pdf/Sumário.pdf" target="_blank">Sumário</a>
                <a 
                    href="" 
                    onClick={onLinkClick}>Capítulos</a>
            </div>

            <div className='
                flex 
                flex-col
                text-center
                justify-center
                w-full
                lg:h-20
                h-40
                border-t-2
                border-blue-100
            '>
                <p className='
                mt-4
                    flex 
                    self-center  
                    w-full 
                    justify-center
                    lg:px-10
                    px-5
                    font-bold
                    text-center
                '>
                 Livro de corrosão - Enori Gemelli
                </p>
                <p className='
                    flex 
                    self-center
                    w-full
                    h-fit
                    justify-center
                    lg:px-10
                    px-5
                    text-center
                    mb-4
                '>
                    Corrosão de materiais metálicos em meios artificiais ou naturais, corrosão sob tensão e corrosão-fadiga de materiais metálicos, corrosão induzida por microrganismos, corrosão de materiais cimentícios, degradação química de polímeros.
                </p>
            </div>
        </footer>
    )
}