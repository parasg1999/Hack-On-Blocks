"use client";

import Image from "next/image";
import dinero from "@/app/assets/images/dinero.svg";

import googleCloud from "../../assets/images/prev-partners/google-cloud.svg";
import microsoft from "../../assets/images/prev-partners/microsoft.svg";
import polygon from "../../assets/images/partners/polygon.png";
import fbi from "../../assets/images/partners/fbi.png";
import reclaim from "../../assets/images/partners/reclaim.png";
import stackr from "../../assets/images/partners/stackr.svg";
import solana from "../../assets/images/prev-partners/solana.svg";
import wazirx from "../../assets/images/prev-partners/wazirx.svg";
import github from "../../assets/images/prev-partners/github.svg";
import sui from "../../assets/images/prev-partners/sui.svg";
import SectionSeparator from "../SectionSeparator";
import { useEffect, useState } from "react";

export default function Partners() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    setPartners([
      {
        image: polygon,
        amount: "$10,000",
        link: "https://hackonblocks.devfolio.co/prizes?partner=Polygon",
        classes: "bg-[#ffffffA6]",
      },
      {
        image: fbi,
        amount: "$5,000",
        link: "https://hackonblocks.devfolio.co/prizes?partner=Farcaster+Builders+India",
        classes: "bg-[#1A0149] text-white",
      },
      {
        image: stackr,
        amount: "$1,000",
        link: "https://hackonblocks.devfolio.co/prizes?partner=Stackr+Labs",
        classes: "bg-[#1A0149] text-white",
      },
      {
        image: reclaim,
        amount: "$3,000",
        link: "https://hackonblocks.devfolio.co/prizes?partner=Reclaim+Protocol",
        classes: "bg-[#ffffffA6]",
      },
    ]);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center mt-8 md:mt-2 max-w-[1280px] m-auto w-[90%]`}
      id="partners"
    >
      <Image
        src={dinero}
        className="w-[20rem] mb-[-2rem] md:w-[30rem] md:mb-[-4rem] saturate-0 hover:saturate-100 transition-all"
        alt="arrow"
      />
      <h1 className="text-xl md:text-6xl text-center font-quinque z-10 pointer-events-none !leading-relaxed">
        $15,000
      </h1>
      <h1 className="text-xl md:text-[2.5rem] text-center font-quinque z-10 pointer-events-none !leading-relaxed">
        PRIZE POOL
      </h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-4 w-full mt-8 md:mt-20 z-10"
      >
        {partners.map((p, idx) => (
          <div
            className={
              ` cursor-pointer col-span-2 py-4 md:col-span-6 md:py-8 flex flex-col rounded-lg md:rounded-2xl overflow-hidden justify-between items-center gap-y-4 ` +
              p.classes
            }
            key={idx}
            onClick={() => window.open(p.link, "_blank")}
          >
            <Image
              src={p.image}
              alt="filecoin"
              height={80}
              className={`${"max-w-[10rem] max-h-[5rem] md:max-w-[14rem] md:max-h-[10rem]"} `}
            />
            <h1 className="text-xl md:text-4xl text-center font-quinque z-10 pointer-events-none !leading-relaxed">
              {p.amount}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
