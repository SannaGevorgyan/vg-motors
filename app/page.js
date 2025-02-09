"use client";

import {useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import translations from "@/app/commons/translations";
import Image from "next/image";

export default function Home() {
  // const position = [40.1594599, 44.3261934];

  const [lang, setLang] = useState('en');

  return (
    <div className="h-full flex flex-col justify-between bg-white text-gray-800">
      <Navbar/>
      <main className="flex flex-col items-center justify-center text-center p-10 xl:px-[200px]">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">VG Motors</h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{translations[lang].title}</h1>
          <p className="text-lg text-gray-700 mb-8 text-gray-800" dangerouslySetInnerHTML={{ __html: translations[lang].description }}></p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-10">
          <Image src='/images/image-1.png' width={400} height={500} alt=""/>
          <Image src='/images/image-2.png' width={400} height={500} alt=""/>
        </div>

        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{translations[lang].get_in_touch}</h1>
          <p className="text-lg text-gray-700 mb-4">
            {translations[lang].address_text} {translations[lang].address}
          </p>

          <p className="text-xl font-semibold mb-2">
            📞 <a href="tel:+1234567890" className="text-gray-600">010 50-00-07</a>
          </p>
        </div>

        <div className="w-full justify-end flex items-center gap-4 mt-10">
          <p
            className={`cursor-pointer px-2 py-1 rounded-md ${lang === 'en' ? "bg-gray-100" : ""}`}
            onClick={() => setLang('en')}
          >
            Eng
          </p>
          <p
            className={`cursor-pointer px-2 py-1 rounded-md ${lang === 'hy' ? "bg-gray-100" : ""}`}
            onClick={() => setLang('hy')}
          >
            Հայ
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}