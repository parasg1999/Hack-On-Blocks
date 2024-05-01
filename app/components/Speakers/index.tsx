import Image from "next/image";
import Heading from "../Heading";

import dummySpeaker from "../../assets/images/speakers/dummy.svg";
import dummySpeaker0 from "../../assets/images/speakers/Rectangle 37-0.png";
import dummySpeaker1 from "../../assets/images/speakers/Rectangle 37-1.png";
import dummySpeaker2 from "../../assets/images/speakers/Rectangle 37-2.png";
import dummySpeaker3 from "../../assets/images/speakers/Rectangle 37-3.png";
import dummySpeaker4 from "../../assets/images/speakers/Rectangle 37-4.png";
import dummySpeaker5 from "../../assets/images/speakers/Rectangle 37-5.png";
import dummySpeaker6 from "../../assets/images/speakers/Rectangle 37-6.png";
import dummySpeaker7 from "../../assets/images/speakers/Rectangle 37-7.png";
import dummySpeaker8 from "../../assets/images/speakers/Rectangle 37-8.png";
import linkedIn from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import pokedex from "@/app/assets/images/pokedex.svg";

import coinbase from "@/app/assets/images/sponsors/coinbase.svg";
import polygon from "@/app/assets/images/sponsors/polygon.svg";
import aptos from "@/app/assets/images/sponsors/aptos.svg";
import coindcx from "@/app/assets/images/sponsors/coindcx.svg";
import avalanche from "@/app/assets/images/sponsors/avalanche.svg";
import ripple from "@/app/assets/images/sponsors/ripple.svg";
import push from "@/app/assets/images/sponsors/push.svg";
import huddle from "@/app/assets/images/sponsors/huddle.svg";

const speakers = [
  {
    image: dummySpeaker0,
    name: "balaji s",
    company: coinbase,
  },
  {
    image: dummySpeaker1,
    name: "sandeep nailiwal",
    company: polygon,
  },
  {
    image: dummySpeaker2,
    name: "Mohammad shaikh",
    company: aptos,
  },
  {
    image: dummySpeaker3,
    name: "sumit gupta",
    company: coindcx,
  },
  {
    image: dummySpeaker4,
    name: "devika mittal",
    company: avalanche,
  },
  {
    image: dummySpeaker5,
    name: "navin gupta",
    company: ripple,
  },
  {
    image: dummySpeaker6,
    name: "harsh",
    company: push,
  },
  {
    image: dummySpeaker7,
    name: "ayush",
    company: huddle,
  },
];

export default function Speakers() {
  return (
    <div
      className={`flex flex-col justify-center items-center mt-8 md:mt-20 max-w-[1280px] m-auto w-[90%]`}
    >
      <Image
        src={pokedex}
        className="w-[34rem] mb-[-9rem] saturate-0 hover:saturate-100 transition-all"
        alt="arrow"
      />
      <h1 className="text-xl md:text-6xl text-center font-quinque font-bold leading-relaxed z-10 pointer-events-none	">
        <div>
          <span className="hidden md:inline-block">PREVIOUS</span> SPEAKERS{" "}
        </div>
        <div className="mt-2 md:mt-4">&amp; MENTORS</div>
      </h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:w-full mt-8 md:mt-20 z-10"
      >
        {speakers.map((speaker, idx) => (
          <div
            className={`bg-[#FFFFFFA6] flex flex-col rounded-lg md:rounded-2xl overflow-hidden p-[0.875rem]`}
            key={idx}
          >
            <Image
              src={speaker.image}
              alt="filecoin"
              object-fit="cover"
              className="rounded-xl"
            />
            <div className="px-1 md:px-1 font-satoshi color-[#46424D]">
              <div className={`font-bold text-lg md:text-2xl mt-2 uppercase`}>
                {speaker.name}
              </div>
              <Image src={speaker.company} alt="" className="h-8 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
