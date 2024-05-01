import TBASign from "@/app/assets/images/tba-sign.svg";
import Image from "next/image";

export default function PrizesAndSchedule() {
  return (
    <div className="flex flex-col items-center mt-12 max-w-[1280px] w-[90%] m-auto">
      <h1 className="text-2xl md:text-6xl text-center font-quinque text-[#46424D] mt-8 text-center">
        PRIZES &amp; SCHEDULE
      </h1>
      <Image src={TBASign} alt="to be announced soon " />
    </div>
  );
}
