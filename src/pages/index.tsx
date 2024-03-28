import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Chapters from "./components/chapter";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
        <title>Corrosão - Introdução e Avaliação - Enori Gemelli</title>
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
