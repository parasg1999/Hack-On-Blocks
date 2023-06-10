import Image from "next/image";
import Heading from "../Heading";
import styles from "./partners.module.scss";

import dummySpeaker from "../../assets/images/speakers/dummy.svg";
import linkedIn from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";

import img1 from "../../assets/images/sponsors/1.svg";
import img2 from "../../assets/images/sponsors/2.svg";
import img3 from "../../assets/images/sponsors/3.svg";
import img4 from "../../assets/images/sponsors/4.svg";
import img5 from "../../assets/images/sponsors/5.svg";
import img6 from "../../assets/images/sponsors/6.svg";
import img7 from "../../assets/images/sponsors/7.svg";
import SectionSeparator from "../SectionSeparator";

export default function Partners() {
  return (
    <div
      className={`${styles.partners} flex flex-col justify-center items-center`}
    >
      <SectionSeparator name="partners" />
      <h1 className="text-6xl text-center font-quinque">PARTNERS</h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-12 gap-x-4 gap-y-4 w-full mt-20"
      >
        {[img1, img2, img3, img4, img5, img6, img7].map((img, idx) => (
          <div
            className={`${styles.card} ${
              idx > 2 ? "col-span-3 py-10" : "col-span-4 py-14"
            } flex flex-col rounded-2xl overflow-hidden justify-center items-center`}
            key={idx}
          >
            <Image
              src={img}
              alt="filecoin"
              width={500}
              className={`${
                idx > 2 ? "max-w-[14rem] max-h-[10rem]" : "max-w-[16rem]"
              } `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
