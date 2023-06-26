"use client";

import Image from "next/image";
import Heading from "../Heading";
import styles from "./partners.module.scss";

import dummySpeaker from "../../assets/images/speakers/dummy.svg";
import linkedIn from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";

import img1 from "../../assets/images/sponsors/1.svg";
import img2 from "../../assets/images/sponsors/2.svg";
import img3 from "../../assets/images/sponsors/3.svg";
import img4 from "../../assets/images/sponsors/4.svg";
import img5 from "../../assets/images/sponsors/5.svg";
import img6 from "../../assets/images/sponsors/6.svg";
import img7 from "../../assets/images/sponsors/7.svg";
import SectionSeparator from "../SectionSeparator";
import { useEffect, useState } from "react";

export default function Partners() {
  const [partners, setPartners] = useState<any[]>([]);

  useEffect(() => {
    setPartners([img1, img2, img3, img4, img5, img6, img7]);
  }, []);

  return (
    <div
      className={`${styles.partners} flex flex-col justify-center items-center mt-8 md:mt-20`}
    >
      <SectionSeparator name="partners" />
      <h1 className="text-xl md:text-6xl text-center font-quinque">PARTNERS</h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-4 w-full mt-8 md:mt-20"
      >
        {partners.map((img, idx) => (
          <div
            className={`${styles.card} ${
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
