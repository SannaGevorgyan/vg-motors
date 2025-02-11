"use client";

import React from 'react';
import Image from "next/image";
import translations from "@/app/commons/translations";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-[url('/images/logo.png')] bg-50 bg-no-repeat bg-center h-[150px] md:h-0 md:invisible relative">
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
      </div>
      <div className="text-white flex flex-col items-center mt-5 md:mt-[120px] md:pl-[240px] lg:pl-[270px] md:pt-0 px-2">
        <h1
          className="text-[14px] md:text-2xl lg:text-3xl text-center px-2 md:px-[30px] lg:px-[90px] pb-6 font-bold">{translations.hy.about_title.toUpperCase()} </h1>
        <div className="flex flex-col md:flex-row justify-end items-end w-full px-1">
          <div className="md:w-[60%] flex flex-col justify-end mb-10 md:m-4">
            <p
              className="text-[11px] md:text-sm lg:text-base xl:text-lg text-center">{translations.hy.description_1.toUpperCase()} </p>
            <p
              className="text-[11px] md:text-sm lg:text-base xl:text-lg text-center">{translations.hy.description_2.toUpperCase()} </p>
          </div>
          <div className="bg-[url('/images/about-bg.png')] bg-100 md:bg-none bg-no-repeat">
            <div className="w-[70%] md:w-auto m-auto">
              <Image src="/images/image-3.png" alt={6} width={480} height={360}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

