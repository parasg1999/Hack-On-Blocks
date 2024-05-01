"use client";

import Image from "next/image";
import logo from "../../assets/images/logo/logo-new.svg";

import menuOpen from "@/app/assets/images/icons/menu-open.svg";
import menuClose from "@/app/assets/images/icons/menu-close.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between w-[100%] sticky top-0 z-20 m-auto w-[95%]">
      <nav className="font-mono uppercase flex justify-between mt-4 md:mt-8 items-center w-full max-w-[90%] md:max-w-[1440px] bg-[#80E93D] rounded-lg pl-8 h-12 font-bold m-auto items-center">
        <div className="flex items-center">
          <a href="/" className="text-grey-darkest hover:text-blue-dark">
            <Image src={logo} alt="filecoin" width={140} />
          </a>
        </div>
        <div className="text-black hidden md:flex h-full flex-row items-center">
          <a
            href="#partners"
            className="text-lg no-underline  hover:text-blue-dark h-full flex items-center"
          >
            PARTNERS
          </a>
          <a
            href="#speakers"
            className="text-lg no-underline  hover:text-blue-dark ml-8  h-full flex items-center"
          >
            Speakers
          </a>
          <a
            href="#faqs"
            className="text-lg no-underline  hover:text-blue-dark ml-8  h-full flex items-center"
          >
            FAQ
          </a>

          <a
            href="https://hackonblocks.devfolio.co/overview"
            className="text-lg no-underline bg-white hover:text-blue-dark ml-8 px-8 h-full flex items-center rounded-r-lg"
          >
            Register
            <span className="text-2xl font-regular mt-[-0.4rem] ml-[0.25rem]">
              ↗
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
