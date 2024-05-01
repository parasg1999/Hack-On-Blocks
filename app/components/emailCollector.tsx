"use client";

import { useState } from "react";
import validateEmail from "../utils/validateEmail";
import Image from "next/image";
import arrowImage from "@/app/assets/images/icons/arrow-right.svg";

export default function EmailCollector() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    console.log(email);
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) return;

    try {
      const response = await fetch("/api/save_email", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          email,
        }),
      });

      await response.json();

      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-[1rem] w-[90%]">
      <div className="flex flex-col md:flex-row gap-x-[2rem] items-center gap-y-10">
        <div className="flex flex-row bg-[#343935] font-satoshi rounded-md overflow-hidden w-fit z-10">
          <div className="bg-white text-black font-bold px-[1.5rem] py-[1rem] rounded-md text-[1.25]rem md:text-[1.5rem] flex flex items-center ">
            <div className="h-[2rem] w-[2rem] bg-[#45DB5D40] rounded-full flex items-center justify-center">
              <span className="h-[0.9rem] w-[0.9rem] bg-[#45DB5D] border rounded-full"></span>
            </div>
            <span className="ml-[0.2rem]">online</span>
          </div>
          <div className="font-mono px-[1rem] text-[1.25]rem md:text-[1.25rem] text-white flex items-center">
            24 JUN - 24 JUL ‘24
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#80E93D] font-satoshi rounded-md overflow-hidden w-fit z-10">
          <div className="text-black font-bold px-[1.5rem] py-[1rem] rounded-md text-[1.25]rem md:text-[1.5rem] flex items-center ">
            register
            <Image
              src={arrowImage}
              width={12}
              alt="arrow"
              className="ml-[0.75rem]"
            />
          </div>
        </div>
      </div>
      <div className="font-satoshi font-medium text-[1.25]rem md:text-[1.5rem] text-[#242424] text-center">
        Interested in Partnering?
        <span className="ml-1 font-bold underline underline-offset-4	">
          <span>Reach out</span>
          <span>↗</span>
        </span>
      </div>
    </div>
  );
}
