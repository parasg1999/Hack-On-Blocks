"use client";

import Image from "next/image";
import disk from "@/app/assets/images/partners.svg";

import googleCloud from "../../assets/images/prev-partners/google-cloud.svg";
import microsoft from "../../assets/images/prev-partners/microsoft.svg";
import polygon from "../../assets/images/prev-partners/polygon.svg";
import solana from "../../assets/images/prev-partners/solana.svg";
import aptos from "../../assets/images/prev-partners/aptos.svg";
import github from "../../assets/images/prev-partners/github.svg";
import sui from "../../assets/images/prev-partners/sui.svg";
import SectionSeparator from "../SectionSeparator";
import { useEffect, useState } from "react";

export default function Partners() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    setPartners([googleCloud, microsoft, polygon, solana, aptos, github, sui]);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center mt-8 md:mt-2 max-w-[1280px] m-auto w-[90%]`}
    >
      <Image
        src={disk}
        className="w-[34rem] mb-[-8rem] saturate-0 hover:saturate-100 transition-all"
        alt="arrow"
      />
      <h1 className="text-xl md:text-6xl text-center font-quinque z-10 pointer-events-none">
        PREVIOUS PARTNERS
      </h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-4 w-full mt-8 md:mt-20 z-10"
      >
        {partners.map((img, idx) => (
          <div
            className={`bg-[#ffffffA6] ${
              idx > 2
                ? "col-span-1 py-3 md:col-span-3 md:py-10"
                : "col-span-2 py-4 md:col-span-4 md:py-14"
            } flex flex-col rounded-lg md:rounded-2xl overflow-hidden justify-center items-center`}
            key={idx}
          >
            <Image
              src={img}
              alt="filecoin"
              width={500}
              className={`${
                idx > 2
                  ? "max-w-[7rem] max-h-[5rem] md:max-w-[14rem] md:max-h-[10rem]"
                  : " max-w-[10rem]  md:max-w-[16rem]"
              } `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
