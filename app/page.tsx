import Image from "next/image";
import EmailCollector from "./components/emailCollector";

import retroDesktop from "./assets/images/retro-desktop.svg";
import retroMobile from "./assets/images/retro-mobile.svg";

function ListItems() {
  return (
    <>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
      <li>CMNG SOON</li>
    </>
  );
}

export default function Home() {
  return (
    <div className="max-w-[2560px] min-h-screen max-h-screen overflow-hidden flex m-auto bg-[#EEEEEE]">
      <main className="flex min-h-screen flex-col items-center bg-[#EEEEEE]">
        <div className="bg-[#C18C41] max-w-[2560px] w-screen font-mono overflow-hidden whitespace-nowrap text-[1.25rem] relative">
          <ul
            className="list-disc flex	gap-x-7 flex-row text-[#2F3536] overflow-hidden font-semibold	scroll-container"
            id="scroll-container-one"
          >
            <ListItems />
          </ul>
          <ul
            className="list-disc flex	gap-x-7 flex-row text-[#2F3536] overflow-hidden font-semibold	scroll-container"
            id="scroll-container-two"
          >
            <ListItems />
          </ul>
          <ul
            className="list-disc flex	gap-x-7 flex-row text-[#2F3536] overflow-hidden font-semibold	scroll-container"
            id="scroll-container-three"
          >
            <ListItems />
          </ul>
        </div>

        <div className="text-[#46424D] text-center flex flex-col font-quinque mt-[6rem]">
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
                className="hidden md:block w-[30vw] mb-[-2rem]"
                alt="arrow"
              />
            </div>

            <div>
              <Image
                src={retroMobile}
                className="w-[60vw] mb-[-4rem] md:hidden"
                alt="arrow"
              />
            </div>

            <EmailCollector />
          </div>
        </div>
      </main>
    </div>
  );
}
