"use client";

import {useState} from "react";
import translations from "@/app/commons/translations";
import Image from "next/image";

export default function Home() {

  const [lang, setLang] = useState('hy');

  return (
    <div className={`text-white bg-black bg-[url('/images/8.svg')] bg-120 md:bg-95 bg-[center_bottom_6rem] md:bg-[center_top_2rem] bg-no-repeat h-full flex pt-10`}>
      <div className="bg-black opacity-60 w-full h-full"></div>
      <div className="flex flex-col items-center absolute top-[150px] pt-12 md:pt-0 md:top-[90px] inset-0 z-20">
        <div className="w-[60%] flex justify-center">
          <Image src='/images/logo.png' width={360} height={100} alt="logo"/>
        </div>
        <h1 className="text-base md:text-2xl font-bold mt-4 md:mt-9 text-center">{translations[lang].title.toUpperCase()}</h1>
      </div>
    </div>
  );
}