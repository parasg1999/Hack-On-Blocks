import Image from "next/image";
import v from "./inspiration.module.scss";
import SectionSeparator from "../SectionSeparator";
import arrowImage from "../../assets/images/icons/arrow.svg";

export default function Inspiration() {
  return (
    <div className={`flex flex-col justify-center items-center mt-8 md:mt-20`}>
      <SectionSeparator name="ideas" />
      <h1 className="text-xl md:text-6xl text-center font-quinque leading-relaxed">
        <div> What can</div>
        <div className="mt-1 md:mt-4"> you build?</div>
      </h1>
      <div
        id="cards"
        className="font-satoshi grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 w-full mt-8 md:mt-20 font-bold"
      >
        {[
          { text: "Documentation", emoji: "📙", link: "go" },
          { text: "Getting started with FVM", emoji: "📖", link: "go" },
          { text: "Ideas for what to build", emoji: "💡", link: "go" },
        ].map((e) => {
          return (
            <div
              key={e.text}
              className={`${v.card} flex justify-between text-md md:text-2xl py-3 px-4 md:py-6 md:px-6 rounded-2xl`}
            >
              <div className="">
                <span className="emoji text-xl md:text-4xl align-middle">
                  {e.emoji}
                </span>
                <span className={`${v.description} align-middle ml-4`}>
                  {e.text}
                </span>
              </div>
              <Image
                src={arrowImage}
                width={16}
                alt="arrow"
                className={v.arrow}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
