import Image from "next/image";
import moon from "../../assets/images/moon-cut.svg";
import logo from "../../assets/images/logo/logo.svg";
import beeper from "@/app/assets/images/beeper.svg";

import instagram from "@/app/assets/images/socials/instagram.svg";
import discord from "@/app/assets/images/socials/discord.svg";
import linkedin from "@/app/assets/images/socials/linkedin.svg";
import medium from "@/app/assets/images/socials/medium.svg";
import twitter from "@/app/assets/images/socials/twitter.svg";
import youtube from "@/app/assets/images/socials/youtube.svg";
import telegram from "@/app/assets/images/socials/telegram.svg";
import vercel from "@/app/assets/images/vercel.svg";
import dottech from "@/app/assets/images/dottech.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col m-auto items-center w-full mx-[-10] mt-20 relative max-w-[95%] max-w-[1440px]">
      <div className="absolute w-screen green-gradient h-full z-10">
        <div className="w-screen h-full trans-gradient z-20 flex flex-col justify-end font-quinque text-5xl leading-relaxed text-[#46424D]">
          <div className="text-nowrap overflow-hidden w-content whitespace-nowrap	gap-x-10 flex opacity-10 -ml-60">
            <span>INDIA&apos;S LARGEST</span>
            <span>INDIA&apos;S LARGEST</span>
            <span>INDIA&apos;S LARGEST</span>
          </div>
          <div className="text-nowrap overflow-hidden w-content whitespace-nowrap	gap-x-10 flex opacity-[15%] -ml-20">
            <span>MULTICHAIN</span>
            <span>MULTICHAIN</span>
            <span>MULTICHAIN</span>
            <span>MULTICHAIN</span>
            <span>MULTICHAIN</span>
          </div>
          <div className="text-nowrap overflow-hidden w-content whitespace-nowrap	gap-x-10 flex opacity-20 -ml-72">
            <span>HACKATHON</span>
            <span>HACKATHON</span>
            <span>HACKATHON</span>
            <span>HACKATHON</span>
            <span>HACKATHON</span>
            <span>HACKATHON</span>
          </div>
        </div>
      </div>
      <Image
        src={beeper}
        className="w-[34rem] mb-[-4rem] md:mb-[-8rem] transition-all z-30"
        alt="arrow"
      />
      <div className="bg-white flex flex-col w-full mt-12 md:mt-32 z-30 mb-12 rounded-xl">
        <div className="bg-[#fcfcfc] flex flex-col md:flex-row justify-between w-full footer-shadow py-8 rounded-xl gap-y-8 px-8">
          <div className="flex flex-col font-quinque text-xl md:text-3xl ">
            <span>BREAK.</span>
            <span>ALL.</span>
            <span>BARRIERS.</span>
          </div>
          <div className="flex flex-col  items-start md:items-end">
            <div className="flex flex-row gap-x-4">
              <Link href="https://www.linkedin.com/company/hackonhq">
                <Image src={linkedin} alt="linkedin" />
              </Link>
              <Link href="https://twitter.com/HackOnHQ">
                <Image src={twitter} alt="twitter" />
              </Link>
              {/* <Link href="#">
                <Image src={instagram} alt="instagram" />
              </Link> */}
              <Link href="https://www.youtube.com/@HackOnHQ">
                <Image src={youtube} alt="youtube" />
              </Link>
              <Link href="https://medium.com/hackonhackathon">
                <Image src={medium} alt="medium" />
              </Link>
              <Link href="https://discord.hackon.tech">
                <Image src={discord} alt="discord" />
              </Link>
              <Link href="https://t.me/HackOnHQ">
                <Image src={telegram} alt="telegram" />
              </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-x-4 font-satoshi mt-4 pb-4 border-b-[#34393580] border-b">
              <span className="w-fit">+91 95606 78655</span>
              <span className="w-fit">|</span>
              <span className="w-fit"> contact@hackon.tech</span>
              <span className="hidden md:block">|</span>
              <span className="hidden md:block">Code of Conduct ↗ </span>
            </div>
            <div className="flex items-center gap-x-2 mt-4">
              ❤️
              <Image src={vercel} alt="vercel" height={15} />
              and
              <Image src={dottech} alt="dottech" height={15} />
            </div>
          </div>
        </div>
        <div className="text-center py-2 font-satoshi ">
          designed by{" "}
          <span className="font-semibold underline underline-offset-4		">
            {" "}
            misfits club
          </span>
        </div>
      </div>
    </div>
  );
}
