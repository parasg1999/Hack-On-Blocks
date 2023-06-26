import Image from "next/image";
import Heading from "../Heading";
import styles from "./prizes.module.scss";

import filecoin from "../../assets/images/sponsors/dummy.svg";
import SectionSeparator from "../SectionSeparator";

export default function Prizes() {
  return (
    <div
      id="prizes"
      className={`${styles.prizes} flex flex-col justify-center items-center`}
    >
      <SectionSeparator name="prizes" />
      <h1 className="text-2xl md:text-7xl text-center font-quinque">
        $125,000
      </h1>
      <h3 className="text-xl mt-4 font-satoshi font-bold md:text-4xl md:mt-8">
        available in prizes{" "}
      </h3>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 w-full mt-8 md:mt-20"
      >
        {[...Array(9).keys()].map((_, idx) => (
          <div
            className={`${styles.card} flex rounded-2xl px-6 py-4`}
            key={idx}
          >
            <Image src={filecoin} width={56} alt="filecoin" />
            <span className="ml-4 flex flex-col justify-evenly">
              <div className={`${styles.description} font-bold text-xl `}>
                Filecoin 🛸 FVM Spaceships
              </div>
              <div className="font-mono font-w-500 text-base opacity-80 mt-1.5">
                $30000
              </div>
            </span>
          </div>
        ))}
      </div>
      <div
        className={`${styles.button} mt-6 md:mt-14 font-satoshi font-bold px-4 py-2 rounded-xl text-xl`}
      >
        see prize details
      </div>
    </div>
  );
}
