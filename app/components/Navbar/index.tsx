"use client";

import Image from "next/image";
import logo from "../../assets/images/logo/logo.svg";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="absolute font-mono uppercase flex justify-between mt-4 md:mt-8 items-center w-full max-w-[90%] md:max-w-[1440px]">
        <div className="mb-2 sm:mb-0">
          <a href="/home" className="text-grey-darkest hover:text-blue-dark">
            <Image src={logo} alt="filecoin" width={100} />
          </a>
        </div>
        <div className="border-2 border-[#414141] rounded-lg px-4 py-2 text-white opacity-50  hidden md:inline-block">
          <a
            href="#prizes"
            className="text-lg no-underline  hover:text-blue-dark"
          >
            Prizes
          </a>
          <a
            href="#documentation"
            className="text-lg no-underline  hover:text-blue-dark ml-6"
          >
            Documentation
          </a>
          <a
            href="#schedule"
            className="text-lg no-underline  hover:text-blue-dark ml-6"
          >
            Schedule
          </a>
          <a
            href="#mentors"
            className="text-lg no-underline  hover:text-blue-dark ml-6"
          >
            Mentors
          </a>
        </div>
      </nav>
    </div>
  );
}
