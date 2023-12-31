import Image from "next/image";
import moon from "../../assets/images/moon-cut.svg";
import logo from "../../assets/images/logo/logo.svg";

export default function Footer() {
  return (
    <div className="bg-[#242424] flex justify-center  mt-12 md:mt-32">
      <div className="relative flex justify-between items-center w-full max-w-[90%] md:max-w-[1440px]">
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
        <Image
          src={moon}
          alt="filecoin"
          // width={400}
          className={`absolute overflow-hidden -right-[10%] h-[100%] hidden md:inline-block`}
        />
      </div>
    </div>
  );
}
