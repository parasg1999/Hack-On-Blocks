"use client";

import { useState } from "react";
import validateEmail from "../utils/validateEmail";

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
    <div className="flex flex-col md:flex-row bg-[#343935] font-satoshi rounded-md overflow-hidden w-fit ">
      <div className="bg-white text-black font-bold px-[1.5rem] py-[1rem] rounded-md text-[1.25rem]">
        stay updated
      </div>
      <div className="flex">
        <input
          className="bg-[#00000029] placeholder-[#FFFFFF40] font-semibold px-[1rem] text-[1.25rem] focus-outline-0 focus-outline-none text-white"
          placeholder="john@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          className="bg-[#FFFFFF33] text-white font-bold px-[1.5rem] py-[1rem] cursor-pointer text-[1.25rem]"
          onClick={handleSubmit}
        >
          →
        </div>
      </div>
    </div>
  );
}
