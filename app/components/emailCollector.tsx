import Image from "next/image";
import arrowImage from "@/app/assets/images/icons/arrow-right.svg";

export default function EmailCollector() {
  return (
    <div className="flex flex-col items-center gap-y-[1rem] w-[100%]">
      <div className="flex flex-col md:flex-row gap-x-[2rem] items-center gap-y-8">
        <div className="flex flex-row bg-[#343935] font-satoshi rounded-md overflow-hidden md:w-fit z-10">
          <div className="bg-white text-black font-bold px-4 md:px-[1.5rem] py-[1rem] rounded-md text-[1.25]rem md:text-[1.5rem] flex flex items-center ">
            <div className="h-[2rem] w-[2rem] bg-white rounded-full flex items-center justify-center relative">
              <div className="absolute ripple-border-outside rounded-full"></div>
              <div className="absolute ripple-border-inside rounded-full"></div>
              <span className="h-[0.9rem] w-[0.9rem] bg-[#45DB5D] rounded-full"></span>
            </div>
            <span className="ml-[0.2rem]">Online</span>
          </div>
          <div className="font-mono px-[0.75rem] md:px-[1rem] text-[1rem] md:text-[1.25rem] text-white flex items-center">
            24 JUN - 24 JUL ‘24
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#80E93D] font-satoshi rounded-md overflow-hidden w-fit z-10">
          <a
            className="text-black font-bold px-[1.5rem] py-[1rem] rounded-md text-[1rem] md:text-[1.5rem] flex items-center "
            href="https://hackonblocks.devfolio.co/overview"
          >
            Apply Now
            <Image
              src={arrowImage}
              width={12}
              alt="arrow"
              className="ml-[0.75rem]"
            />
          </a>
        </div>
      </div>
      <div className="font-satoshi font-medium text-[1.25]rem md:text-[1.5rem] text-[#242424] text-center">
        Interested in Partnering?
        <a
          href="https://t.me/rishabhbansal"
          target="blank"
          className="ml-1 font-bold underline underline-offset-4"
        >
          <span>Reach out</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
