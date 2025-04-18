import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Chapters from "./components/chapter";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [chapterOpen, setChapterOpen] = useState<boolean>(false)
  
  useEffect(() => {
    console.log(chapterOpen);
  }, [chapterOpen]);

  function handleChapterOpen(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setChapterOpen(!chapterOpen)
  }

  return (
    <div className="
      flex
      md:max-h-[700px]
      min-h-screen
      min-w-[540px] 
      flex-col items-center 
      justify-between mr-0">
      
      <Head>
        <title>Livro Corrosão: Introdução e Avaliação - Enori Gemelli, 2024 - PDF Download</title>
        <meta name="description" content="Corrosão de materiais metálicos, corrosão induzida por microrganismos, corrosão de materiais cimentícios, degradação química de polímeros." key="desc" />
        <meta name="robots" content="INDEX, FOLLOW" />
      </Head>
      
      <Header />
      
      {chapterOpen
        ? <Chapters />
        : <Content />
      }

      <Footer onLinkClick={e => handleChapterOpen(e)} />
    </div>
  );
}
