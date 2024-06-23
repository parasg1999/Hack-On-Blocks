import Image from "next/image";

import sectionImage from "../assets/images/separators/prizes.svg";
import arrowImage from "../assets/images/icons/arrow.svg";
import v from "./demo.module.scss";
import Schedule from "../components/Schedule";
import Prizes from "../components/PrizesOld";
import Speakers from "../components/Speakers";
import Partners from "../components/Partners";
import SectionSeparator from "../components/SectionSeparator";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex align-center justify-center">
        <div className="max-w-[90%] md:max-w-[1440px] flex flex-col margin-auto">
          <Prizes />
          <Inspiration />
          {/* <Schedule /> */}
          <Speakers />
          <Partners />
        </div>
      </div>
      <Footer />
    </>
  );
}
