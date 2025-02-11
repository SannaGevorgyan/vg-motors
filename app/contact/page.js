"use client";

import React from 'react';
import Image from "next/image";
import translations from "@/app/commons/translations";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-[url('/images/logo.png')] bg-50 bg-no-repeat bg-center h-[150px] md:h-0 md:invisible relative">
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
      </div>
      <div className="text-white flex flex-col justify-end md:mt-[150px] px-4 md:pl-[240px] lg:pl-[300px]">
        <h1
          className="text-2xl lg:text-6xl pt-2 md:pt-0 pb-1 md:pb-6 pl-1 md:pl-3 font-bold">{translations.hy.contact_title.toUpperCase()} </h1>
        <div className="flex justify-center flex-col md:flex-row">
          <div className="flex flex-col gap-10 xl:w-[60%]">
            <div className="flex flex-col">
              <div className="flex justify-between justify-end">
                <div className="xl:w-3/4 flex flex-col gap-4">
                  <p
                    className="w-auto text-xs lg:text-base xl:text-xl">{translations.hy.contact_description.toUpperCase()} </p>
                  <div className="flex justify-between mt-5 gap-5">
                    <div className="flex gap-4 items-center">
                      <div>
                        <Image className="min-w-6 w-6 md:w-10 border border-white" src="/icons/phone1.png" width={40}
                               height={40} alt="email"/>
                      </div>
                      <div className="flex flex-col gap-1 md:gap-2 text-[12px] md:text-base">
                        <p>{translations.hy.phone.toUpperCase()}</p>
                        <p>010 50 00 07</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div>
                        <Image className="min-w-6 w-6 md:w-10 border border-white" src="/icons/email1.png" width={40}
                               height={40} alt="phone"/>
                      </div>
                      <div className="flex flex-col gap-1 md:gap-2 text-[12px] md:text-base">
                        <p>{translations.hy.email.toUpperCase()}</p>
                        <p>info.vgmotors.am</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1
                className="pl-2 md:pl-5 text-2xl lg:text-6xl pb-1 md:pb-6 font-bold">{translations.hy.address.toUpperCase()} </h1>
              <div className="flex justify-between justify-end w-full">
                <div className="w-auto md:w-3/4 flex flex-col gap-4">
                  <p
                    className="text-xs lg:text-base xl:text-xl">
                    <i> {translations.hy.vg_motors} </i>
                    {translations.hy.address_text.toUpperCase()} </p>
                  <div className="flex gap-4 items-center">
                    <div>
                      <Image className="min-w-6 w-6 md:w-10 border border-white" src="/icons/location1.png" width={40}
                             height={40}
                             alt="location"/>
                    </div>
                    <div className="flex flex-col gap-2 text-[12px] md:text-base">
                      <p>{translations.hy.loaction.toUpperCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/about-bg.png')] bg-100 md:bg-none bg-no-repeat mt-8 md:mt-0">
            <div className="w-[70%] md:w-auto m-auto">
              <Image src="/images/contact.png" alt={6} width={480} height={360}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

