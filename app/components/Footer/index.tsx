import Image from "next/image";
import moon from "../../assets/images/moon-cut.svg";
import logo from "../../assets/images/logo/logo.svg";

export default function Footer() {
  return (
    <div className="bg-[#242424] flex justify-between h-60 max-h-60 mt-12 md:mt-32">
      <div className="left py-10">
        <Image src={logo} alt="filecoin" width={120} />
        <div className="flex mt-8 uppercase text-white  font-mono">
          <div className="flex flex-col">
            <a
              href="/"
              className="mt-2 opacity-40 hover:opacity-100 duration-100"
            >
              About
            </a>
            <a
              href="/"
              className="mt-2 opacity-40  hover:opacity-100 duration-100"
            >
              Contact
            </a>
            <a
              href="/"
              className="mt-2 opacity-40 hover:opacity-100 duration-100"
            >
              Legal
            </a>
          </div>
          <div className="flex flex-col ml-10">
            <a
              href="/"
              className="mt-2 opacity-40 hover:opacity-100 duration-100"
            >
              FAQ
            </a>
            <a
              href="/"
              className="mt-2 opacity-40 hover:opacity-100 duration-100"
            >
              Partnerships
            </a>
            <a
              href="/"
              className="mt-2 opacity-40 hover:opacity-100 duration-100"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      {/* <Image
        src={moon}
        alt="filecoin"
        // width={400}
        className={` overflow-hidden -mr-6 ${"h-[100%] w-[30vw]"} `}
      /> */}
    </div>
  );
}
