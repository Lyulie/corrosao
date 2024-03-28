import { useState } from "react";

interface FooterProps {
    onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {

    return (
        <footer className="
            flex 
            w-full 
            h-40 
            flex-col
            bg-blue-50
        ">
            <div className='
                flex 
                w-full 
                h-20 
                justify-between 
                items-center 
                pl-20 
                pr-20 
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
                w-full 
                h-20 
                border-t-2
                border-blue-100
            '>
                <p className='
                    flex 
                    self-center  
                    w-full 
                    justify-center
                '>
                    Centro de Ciências Tecnológicas (CCT) - Rua Paulo Malschitzki, 200 - Zona Industrial Norte - 89219-710 – Joinville/SC
                </p>
            </div>
        </footer>
    )
}