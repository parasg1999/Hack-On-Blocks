import Image from "next/image";
import Heading from "../Heading";
import styles from "./speakers.module.scss";

import dummySpeaker from "../../assets/images/speakers/dummy.svg";
import linkedIn from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import SectionSeparator from "../SectionSeparator";

export default function Speakers() {
  return (
    <div
      className={`${styles.speakers} flex flex-col justify-center items-center`}
    >
      <SectionSeparator name="speakers" />
      <h1 className="text-6xl text-center font-quinque font-bold leading-relaxed">
        SPEAKERS &amp;
        <br />
        MENTORS
      </h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-4 gap-x-4 gap-y-4 w-full mt-20"
      >
        {[...Array(12).keys()].map((_, idx) => (
          <div
            className={`${styles.card} flex flex-col rounded-2xl overflow-hidden pb-4`}
            key={idx}
          >
            <Image src={dummySpeaker} alt="filecoin" object-fit="cover" />
            <div className="px-6 font-satoshi">
              <div className={`${styles.name} font-bold  text-2xl mt-2`}>
                Andrew Hill
              </div>
              <div
                className={`${styles.title} font-mono font-w-500 opacity-80 text-md  mt-1`}
              >
                TEXTILE
              </div>
              <div className="flex mt-2">
                <Image src={linkedIn} alt="" width={24} />
                <Image src={twitter} alt="" width={24} className="ml-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
