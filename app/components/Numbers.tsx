import DEL from "@/app/assets/images/meetups/Delhi.png";
import AMD from "@/app/assets/images/meetups/Ahmedabad.png";
import BLR from "@/app/assets/images/meetups/Bangalore.png";
import CCU from "@/app/assets/images/meetups/Kolkata.png";
import PUNE from "@/app/assets/images/meetups/Pune.png";
import CHE from "@/app/assets/images/meetups/Chennai.png";
import COK from "@/app/assets/images/meetups/Cochi.png";
import HYD from "@/app/assets/images/meetups/Hyderabad.png";
import MUM from "@/app/assets/images/meetups/Mumbai.png";
import JAI from "@/app/assets/images/meetups/Jaipur.png";
import label1 from "@/app/assets/images/label-1.svg";
import label2 from "@/app/assets/images/label-2.svg";
import date from "@/app/assets/images/icons/date.svg";
import link from "@/app/assets/images/icons/link.svg";
import location from "@/app/assets/images/icons/location.svg";
import Image from "next/image";

const numbers = [
  {
    img: JAI,
    label: label1,
    heading: "Jaipur",
    date: "09 June",
    location: "DEL",
    link: "https://lu.ma/HackOnDEL",
    class: "TBD",
    parentClass: "pl-0 pt-0 pr-2 pb-2 md:pr-4 md:pb-4",
  },
  {
    img: BLR,
    label: label1,
    heading: "bengaluru",
    date: "15 June",
    location: "Razorpay",
    link: "https://lu.ma/HackOnBLR",
    class: "border rounded-3xl bg-[#FAFAFA] border-[#00000033]",
    parentClass:
      "border-l border-dashed border-[#D4D4D4] pr-0 md:pr-4 pl-2 pt-0 pb-2 md:pb-4 md:pl-4 md:pt-0",
  },
  {
    img: MUM,
    label: label1,
    heading: "Mumbai",
    date: "15 June",
    location: "Microsoft",
    link: "https://lu.ma/HackOnMUM",
    class:
      "bg-[#FAFAFA] border border-[#00000033] md:border-0 rounded-3xl md:bg-transparent ",
    parentClass:
      "border-l-0 md:border-l border-dashed border-[#D4D4D4] border-t md:border-t-0 pl-0 md:pl-4 pr-2 pt-2 pb-2 md:pr-4 md:pb-4 md:pt-0",
  },
  {
    img: PUNE,
    label: label1,
    heading: "Pune",
    date: "16 June",
    location: "Urban Nomads",
    link: "https://lu.ma/HackOnPUNE",
    class:
      "bg-transparent md:border border-[#00000033] rounded-3xl md:bg-[#FAFAFA]",
    parentClass:
      "border-l border-dashed border-[#D4D4D4] border-t md:border-t-0 pr-0 pl-2  pt-2 pb-2 md:pb-4 md:pl-4 md:pt-0",
  },
  {
    img: HYD,
    label: label1,
    heading: "Hyderabad",
    date: "22 June",
    location: "Microsoft",
    link: "https://lu.ma/HackOnHYD",
    class:
      "bg-transparent md:border border-[#00000033]  rounded-3xl md:bg-[#FAFAFA]",
    parentClass:
      "border-t border-dashed border-[#D4D4D4] pl-0 pr-2 pt-2 pb-2 md:pr-4 md:pb-0 md:pt-4",
  },
  {
    img: COK,
    label: label1,
    location: "TBD",
    date: "22 June",
    heading: "Kochi",
    link: "https://lu.ma/HackOnCOK",
    class:
      "bg-[#FAFAFA] border md:border-0 border-[#00000033] rounded-3xl md:bg-transparent",
    parentClass:
      "border-l border-t border-dashed border-[#D4D4D4] pr-0 md:pr-4 pl-2  pt-2 pb-2  md:pb-0 md:pl-4 md:pt-4",
  },
  {
    img: CCU,
    label: label1,
    heading: "Kolkata",
    date: "23 June",
    location: "TBD",
    link: "https://lu.ma/HackOnCCU",
    class: "border border-[#00000033] rounded-3xl bg-[#FAFAFA]",
    parentClass:
      "border-l-none md:border-l border-t border-dashed border-[#D4D4D4] pl-0 md:pl-4 pr-2 pt-2 md:pr-4 pb-0 md:pt-4",
  },
  {
    img: CHE,
    label: label1,
    heading: "Chennai",
    date: "23 June",
    location: "TBD",
    link: "https://lu.ma/HackOnCHE",
    class:
      "bg-transparent border-none md:border border-[#00000033] rounded-3xl md:bg-transparent",
    parentClass:
      "border-l border-t border-dashed border-[#D4D4D4] pr-0 pl-2 pt-2 pb-0 md:pl-4 md:pt-4",
  },
  {
    img: DEL,
    label: label1,
    heading: "Delhi",
    date: "29 June",
    location: "Microsoft",
    link: "https://lu.ma/HackOnDEL",
    class:
      "bg-transparent border-none md:border border-[#00000033] rounded-3xl md:bg-transparent",
    parentClass:
      "border-l border-t border-dashed border-[#D4D4D4] pr-0 pl-2 pt-2 pb-0 md:pl-4 md:pt-4",
  },
  {
    img: AMD,
    label: label1,
    heading: "Ahmedabad",
    date: "29 June",
    location: "TBD",
    link: "https://lu.ma/HackOnAMD",
    class:
      "bg-transparent border-none md:border border-[#00000033] rounded-3xl md:bg-transparent",
    parentClass:
      "border-l border-t border-dashed border-[#D4D4D4] pr-0 pl-2 pt-2 pb-0 md:pl-4 md:pt-4",
  },
];

export default function Numbers() {
  return (
    <div
      id="numbers"
      className="flex flex-col justify-center items-center mt-8 md:mt-2 max-w-[1280px] m-auto w-[90%]"
    >
      <h1 className="text-2xl md:text-6xl text-center font-quinque text-[#46424D] mt-8 text-center !leading-relaxed">
        MEETUPS
      </h1>

      <h1 className="text-2xl md:text-6xl text-center font-quinque text-[#46424D] mt-8 text-center !leading-relaxed">
        BUILDERS CLUB
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-4 mt-8 w-full mx-auto mb-24 mt-24">
        {numbers.map((s, i) => (
          <div key={i}>
            <div
              className={
                "flex flex-col font-satoshi gap-y-3 px-2 py-4 md:px-4 md:py-8 items-center justify-between h-full bg-white rounded-lg md:rounded-2xl"
              }
            >
              <Image src={s.img} width={128} height={128} alt="del" />
              <a
                style={{
                  backgroundImage: `url(${s.label.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                  width: "fit-content",
                }}
                className="uppercase text-[#FCFDFE] px-4 md:px-8 py-2 font-semibold tracking-widest min-w-[80%] flex flex-row justify-center text-xs md:text-lg"
              >
                {s.heading}
              </a>
              <div className="px-2 md:px-4 gap-x-2 flex flex-row font-semibold text-sm md:text-lg self-start align-center">
                <Image src={date} alt="link" width="16" />
                <span>{s.date}</span>
              </div>
              <div className="px-2 md:px-4 gap-x-2 flex flex-row font-semibold text-sm md:text-lg self-start align-center">
                <Image src={location} alt="link" width="16" />
                <span>{s.location}</span>
              </div>
              {/* <div className="gap-x-2 flex flex-row font-regular text-sm md:text-lg self-start align-center">
                <Image src={link} alt="link" width="16" />
                <span>{s.link}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
