"use client";

import {useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import translations from "@/app/commons/translations";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  // const position = [40.1594599, 44.3261934];

  const [lang, setLang] = useState('hy');

  return (
    <div className={`text-white bg-black bg-[url('/images/8.svg')] bg-100 bg-center bg-no-repeat h-full mt-20 flex pt-10`}>
      <div className="bg-black opacity-60 w-full h-full"></div>
      <div className="flex w-full flex-col items-center absolute top-[150px]  md:top-[90px] inset-0 z-20">
        <div>
          <Image src='/images/logo.png' width={360} height={100} alt="logo"/>
        </div>
        <h1 className="md:text-2xl font-bold mt-9">{translations[lang].title.toUpperCase()}</h1>
      </div>
    </div>
  );
}