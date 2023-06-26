"use client";

import Image from "next/image";

import styles from "./hero.module.scss";
import heroImage from "../../assets/images/computer.svg";
import angledArrowImage from "../../assets/images/icons/angled-arrow.svg";
import arrowImage from "../../assets/images/icons/arrow.svg";
import logo from "../../assets/images/logo/duotone.svg";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <div className="w-screen ">
      <div className="relative">
        <Navbar />
        <div className={`${styles.hero}`}>
          <div className="flex justify-between items-center h-screen max-w-[90%] md:max-w-[1440px] w-[100%] margin-auto">
            <div className="relative flex flex-col align-center justify-center">
              <div className="absolute text-white bg-[#414141] font-mono px-3 py-2 -top-16 rounded-md text-xs">
                GLOBAL-VIRTUAL-HACKATHON
              </div>
              <Image
                src={logo}
                alt="filecoin"
                width={1000}
                className={`${"max-w-[90%] md:max-w-[min(40vw,600px)] max-h-[50vh]"} `}
              />
              <div className={`absolute flex flex-col ${styles.details}`}>
                <div className="text-black bg-[rgb(0,0,0,0.08)] font-mono rounded-md flex flex-col md:flex-row md:items-center md:justify-center md:align-middle ">
                  <span className="font-satoshi bg-[#F36868] px-4 py-2 rounded-md flex items-center justify-center align-middle font-bold">
                    register now
                    <Image
                      src={angledArrowImage}
                      width={8}
                      alt="arrow"
                      className="inline ml-2"
                    />
                  </span>
                  <span className="mx-4 flex items-center justify-center align-middle mt-2 mb-2 md:mt-0 md:mb-0">
                    12-22 AUG &lsquo;23
                  </span>
                </div>
                <div className="flex mt-4 items-center ">
                  Interested in Partnering?
                  <span className="font-bold ml-2 ">Reach out</span>
                  <span className="text-2xl">↗</span>
                </div>
              </div>
            </div>
            <Image
              src={heroImage}
              alt="filecoin"
              width={1000}
              className={`${"max-w-[min(40vw,550px)] max-h-[100vh] hidden md:inline-flex"} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
