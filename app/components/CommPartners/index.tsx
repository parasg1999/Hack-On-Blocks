"use client";

import Image from "next/image";
import disk from "@/app/assets/images/partners.svg";

import _1 from "../../assets/images/comm/1.png";
import _2 from "../../assets/images/comm/2.png";
import _3 from "../../assets/images/comm/3.png";
import _4 from "../../assets/images/comm/4.png";
import _5 from "../../assets/images/comm/5.png";
import _6 from "../../assets/images/comm/6.png";
import _7 from "../../assets/images/comm/7.png";
import _8 from "../../assets/images/comm/8.png";
import _9 from "../../assets/images/comm/9.png";
import _10 from "../../assets/images/comm/10.png";
import _11 from "../../assets/images/comm/11.png";
import _12 from "../../assets/images/comm/12.png";
import _13 from "../../assets/images/comm/13.png";
import _14 from "../../assets/images/comm/14.png";
import { useEffect, useState } from "react";

export default function CommPartners() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    setPartners([_1, _2, _3, _5, _6, _7, _9, _10, _11, _14, _12, _13, _4, _8]);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center mt-8 md:mt-2 max-w-[1280px] m-auto w-[90%] mt-[4rem]`}
      id="partners"
    >
      <h1 className="text-xl md:text-6xl text-center font-quinque z-10 pointer-events-none !leading-relaxed mt-[2rem] md:mt-[6rem]">
        COMMUNITY PARTNERS
      </h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-4 w-full mt-8 md:mt-20 z-10"
      >
        {partners.map((img, idx) => (
          <div
            className={`bg-[#ffffffA6] ${"col-span-2 py-4 md:col-span-3 p-4"} flex flex-col rounded-lg md:rounded-2xl overflow-hidden justify-center items-center`}
            key={idx}
          >
            <Image
              src={img}
              alt="filecoin"
              width={500}
              className={`${"max-h-[4rem] md:max-h-[5rem] max-w-[100%] md:max-w-[100%] w-auto"} `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
