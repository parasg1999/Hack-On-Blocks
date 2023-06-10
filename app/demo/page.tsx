import Image from "next/image";

import sectionImage from "../assets/images/separators/prizes.svg";
import arrowImage from "./arrow.svg";
import v from "./demo.module.scss";
import Schedule from "../components/Schedule";
import Prizes from "../components/Prizes";
import Speakers from "../components/Speakers";
import Partners from "../components/Partners";
import SectionSeparator from "../components/SectionSeparator";

export default function Home() {
  return (
    <>
      <Prizes />
      <div className={` flex flex-col justify-center items-center`}>
        <SectionSeparator name="ideas" />
        <h1 className="text-6xl text-center font-quinque leading-relaxed">
          What can
          <br />
          you build?
        </h1>
        <div
          id="cards"
          className="font-satoshi grid grid-cols-3 gap-x-4 w-full mt-20 font-bold"
        >
          <div
            className={`${v.card} flex justify-between text-2xl py-6 px-6 rounded-2xl`}
          >
            <div className="">
              <span className="emoji text-4xl align-middle">📙</span>
              <span className={`${v.description} align-middle ml-4`}>
                Documentation
              </span>
            </div>
            <Image
              src={arrowImage}
              width={16}
              alt="arrow"
              className={v.arrow}
            />
          </div>
          <div
            className={`${v.card} flex justify-between text-2xl py-6 px-6 rounded-2xl`}
          >
            <span>
              <span className="emoji text-4xl align-middle">📖</span>
              <span className={`${v.description} align-middle ml-4`}>
                Getting started with FVM
              </span>
            </span>
            <Image
              src={arrowImage}
              width={16}
              alt="arrow"
              className={v.arrow}
            />
          </div>
          <div
            className={`${v.card} flex justify-between text-2xl py-6 px-6 rounded-2xl`}
          >
            <span>
              <span className="emoji text-4xl align-middle">💡</span>
              <span className={`${v.description} align-middle ml-4`}>
                Ideas for what to build
              </span>
            </span>
            <Image
              src={arrowImage}
              width={16}
              alt="arrow"
              className={v.arrow}
            />
          </div>
        </div>
      </div>
      <Schedule />
      <Speakers />
      <Partners />
    </>
  );
}
