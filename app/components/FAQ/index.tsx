"use client";

import { useState } from "react";
import faqArrow from "@/app/assets/images/icons/faq-arrow.svg";
import Image from "next/image";

const faqs = [
  {
    q: "Who can participate?",
    a: "Everyone is welcome to participate, be they, developers or designers. Acceptance of applications is based on their interest in blockchain and proven ability to #BUIDL - whether it’s writing software, designing beautiful UX, or something entirely else.    ",
  },
  {
    q: "When will the applications close?",
    a: "The application period will close one week before the end of the hackathon period, i.e., June 15, 2024, at 11:59 PM IST. We evaluate applications on a rolling basis and will notify you of acceptance via email.",
  },
  {
    q: "How does the application process work?",
    a: 'We’re looking for people who "do". Folks who are passionate enough to work on crazy world-changing ideas. We can get to know you better from your past projects, open source contributions, GitHub/Devfolio profile, and participation in hackathons.    ',
  },

  {
    q: "How much does it cost?",
    a: "The hackathon is completely free for participants, thanks to our sponsors, which include schwag, prizes, and more.   ",
  },
  {
    q: "Can we apply as a team?",
    a: "Yes, you can participate in a team with up to 4 members.    ",
  },
  {
    q: "What if I don't have a team or an idea?",
    a: "Fret not; most people don’t! We’ll have team formation and ideation events geared towards helping you find people to work with.",
  },
  {
    q: "Once I am accepted, what do I need to bring?",
    a: `You can join our <a href="https://t.me/HackOnHQ" style="text-decoration: underline;" target="_blank">Telegram</a> or <a href="https://discord.hackon.tech" style="text-decoration: underline;" target="_blank">Discord</a> Server to meet other hackers, mentors, and start building your project.    `,
  },
  {
    q: "How does judging work?",
    a: `A panel of builders will evaluate hacks based on creativity, technical difficulty, design, and usefulness. New judges will be announced on a rolling basis on <a href="https://twitter.com/HackOnHQ" style="text-decoration: underline;" target="_blank">Twitter/X</a>, so make sure that you follow us!    `,
  },
  {
    q: "Did we miss something?",
    a: `Send us a DM at @rishabhbansal on <a href="https://t.me/rishabhbansal" style="text-decoration: underline;" target="_blank">Telegram</a> or reach out to us at <a href="mailto:rishabh@hackon.tech" style="text-decoration: underline;" target="_blank">rishabh@hackon.tech</a>`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 pt-24 max-w-[1280px] m-auto gap-y-8 w-[90%]"
      id="faqs"
    >
      <h1 className="text-xl md:text-4xl lg:text-5xl font-quinque font-bold leading-relaxed z-10 pointer-events-none text-center md:text-left !leading-relaxed">
        <div>FREQUENTLY </div>
        <div>ASKED</div>
        <div>QUESTIONS</div>
      </h1>
      <div className="flex flex-col gap-y-6 font-satoshi">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={
              openIndex === i
                ? "px-6 bg-[#46424D14] rounded-lg"
                : "px-6 bg-[#ffffff] rounded-lg"
            }
          >
            <div
              className="py-4 flex font-bold text-xl justify-between items-center cursor-pointer gap-x-4"
              onClick={() => toggleFaq(i)}
            >
              <span>{f.q}</span>
              <Image src={faqArrow} className="w-[1rem] " alt="arrow" />
            </div>
            <div
              className={
                openIndex === i
                  ? "pb-4  text-xl  overflow-hidden transition-all"
                  : " text-xl h-[0px] overflow-hidden transition-all"
              }
              dangerouslySetInnerHTML={{ __html: f.a }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
