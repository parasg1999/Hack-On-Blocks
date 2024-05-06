"use client";

import Image from "next/image";
import logo from "../../assets/images/logo/logo-new.svg";

import menuOpen from "@/app/assets/images/icons/menu-open.svg";
import menuClose from "@/app/assets/images/icons/menu-close.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (document)
      document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-mono flex justify-between w-[100%] sticky top-0 z-20 m-auto w-[95%]">
      <div
        className="flex flex-col justify-between mt-4 md:mt-8 w-full max-w-[90%] md:max-w-[1440px] 
        bg-[#80E93D] rounded-lg font-bold m-auto items-start md:items-center bg-white relative"
      >
        <nav className="uppercase flex justify-between items-center w-full bg-[#80E93D] pl-4 md:pl-8 rounded-lg h-12 font-bold m-auto items-center">
          <div className="flex items-center">
            <a href="/" className="text-grey-darkest hover:text-blue-dark">
              <Image src={logo} alt="logo" width={140} />
            </a>
          </div>
          <div className="inline-block md:hidden pr-4">
            {isOpen ? (
              <Image src={menuClose} alt="close" onClick={toggleMenu} />
            ) : (
              <Image src={menuOpen} alt="close" onClick={toggleMenu} />
            )}
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
        {isOpen && (
          <div className="absolute bg-white w-full mt-12 z-30 rounded-md">
            <div className="pl-4 py-2" onClick={toggleMenu}>
              <a href="#partners" className="even">
                PARTNERS
              </a>
            </div>
            <div className="pl-4 py-2" onClick={toggleMenu}>
              <a href="#speakers">SPEAKERS</a>
            </div>{" "}
            <div className="pl-4 py-2" onClick={toggleMenu}>
              <a href="#faqs">FAQ</a>
            </div>
            <div className="px-4 mb-4">
              <div
                className="px-4 py-2 bg-black text-white rounded"
                onClick={toggleMenu}
              >
                <a href="https://hackonblocks.devfolio.co/overview">REGISTER</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
