"use client";

import React from 'react';
import Image from "next/image";
import translations from "@/app/commons/translations";

const AboutPage = () => {
  return (
    <div className="text-white flex flex-col items-center mt-[120px] pl-[240px] lg:pl-[300px]">
      <h1 className="text-2xl lg:text-3xl text-center px-[30px] lg:px-[90px] pb-6 font-bold">{translations.hy.about_title.toUpperCase()} </h1>
      <div className="flex justify-end w-full">
        <div className="w-[60%] flex flex-col justify-end mb-10">
          <p className="text-sm lg:text-base xl:text-lg text-center">{translations.hy.description_1.toUpperCase()} </p>
          <p className="text-sm lg:text-base xl:text-lg text-center">{translations.hy.description_2.toUpperCase()} </p>
        </div>
        <div><Image src="/images/image-3.png" alt={6} width={480} height={360}/></div>
      </div>
    </div>
  );
};

export default AboutPage;

