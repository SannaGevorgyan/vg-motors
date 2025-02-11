"use client";

import React from 'react';
import Image from "next/image";
import translations from "@/app/commons/translations";

const ContactPage = () => {
  return (
    <div className="text-white flex flex-col justify-end mt-[150px] pl-[240px] lg:pl-[300px]">
      <h1 className="text-2xl lg:text-6xl pb-6 font-bold">{translations.hy.contact_title.toUpperCase()} </h1>
      <div className="flex justify-center">
      <div className="flex flex-col gap-10 w-[60%]">
        <div className="flex flex-col">
          <div className="flex justify-between justify-end">
            <div className="w-3/4 flex flex-col gap-4">
              <p
                className="w-[60%]text-sm lg:text-base xl:text-xl">{translations.hy.contact_description.toUpperCase()} </p>
              <div className="flex justify-between mt-5">
                <div className="flex gap-4 items-center">
                  <div>
                    <Image className="w-10 border border-white" src="/icons/phone1.png" width={40} height={40}
                           alt="email"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>{translations.hy.phone.toUpperCase()}</p>
                    <p>010 50 00 07</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <Image className="border border-white" src="/icons/email1.png" width={40} height={40} alt="phone"/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>{translations.hy.email.toUpperCase()}</p>
                    <p>info.vgmotors.am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="pl-5 text-2xl lg:text-6xl pb-6 font-bold">{translations.hy.address.toUpperCase()} </h1>
          <div className="flex justify-between justify-end w-full">
            <div className="w-3/4 flex flex-col gap-4">
              <p
                className="text-sm lg:text-base xl:text-xl">
               <i> {translations.hy.vg_motors} </i>
                {translations.hy.address_text.toUpperCase()} </p>
              <div className="flex gap-4 items-center">
                <div>
                  <Image className="w-10 border border-white" src="/icons/location1.png" width={40} height={40}
                         alt="location"/>
                </div>
                <div className="flex flex-col gap-2">
                  <p>{translations.hy.address.toUpperCase()}</p>
                  <p>{translations.hy.loaction.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex items-center"><Image src="/images/contact.png" alt="contact image" width={480} height={360}/></div>
      </div>
    </div>
  );
};

export default ContactPage;

