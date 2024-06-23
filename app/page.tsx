import Image from "next/image";
import EmailCollector from "./components/emailCollector";

import retroDesktop from "./assets/images/retro-desktop.png";
import retroMobile from "./assets/images/retro-mobile.png";
import Prizes from "./components/Prizes";
import Speakers from "./components/Speakers";
import Partners from "./components/Partners";
import Inspiration from "./components/Inspiration";
import PrizesAndSchedule from "./components/PrizesAndSchedule";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1440px] flex flex-col m-auto bg-[#EEEEEE]">
      <Navbar />
      <main className="flex min-h-screen max-h-screen flex-col items-center bg-[#EEEEEE] overflow-hidden pt-[8rem] md:pt-[8rem] mt-[-5rem]">
        <div className="text-[#46424D] text-center flex flex-col font-quinque leading-tight">
          <span className="text-[1.2rem] lg:text-[3.6rem]">
            INDIA&apos;S LARGEST
          </span>
          <span className="text-[1.8rem] lg:text-[5.395rem]">MULTICHAIN</span>
          <span className="text-[2rem] lg:text-[6rem]">HACKATHON</span>
          <span className="text-[#46424D80] text-[2rem] lg:text-[6rem]">
            HACKATHON
          </span>
          <span className="text-[#46424D40] text-[2rem] lg:text-[6rem]">
            HACKATHON
          </span>
          <span className="text-[#46424D1F] text-[2rem] lg:text-[6rem]">
            HACKATHON
          </span>
          <span className="text-[#46424D0F] text-[2rem] lg:text-[6rem]">
            HACKATHON
          </span>
          <span className="text-[#46424D08] text-[2rem] lg:text-[6rem]">
            HACKATHON
          </span>
        </div>

        <div className="main-footer flex m-auto w-screen items-center justify-center h-[40vh] absolute bottom-0">
          <div className="absolute bottom-[2rem] lg:bottom-[2rem] flex flex-col items-center ">
            <div>
              <Image
                src={retroDesktop}
                className="hidden md:block w-[30vw]  rounded-3xl saturate-0	hover:saturate-100 transition-all"
                alt="arrow"
              />
            </div>

            <div>
              <Image
                src={retroMobile}
                className="max-h-[40vh] w-auto h-auto  aspect-auto min-w-[40vw] -mb-4 max-w-[60vw] rounded-lg md:hidden saturate-0	"
                alt="arrow"
              />
            </div>

            <EmailCollector />
          </div>
        </div>
      </main>

      <Prizes />
      <Partners />
      <Speakers />
      <FAQ />
      <Footer />
    </div>
  );
}
