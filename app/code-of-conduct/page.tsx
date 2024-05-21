"use client";
import Image from "next/image";
import logo from "../assets/images/logo/logo-new.svg";

import phone from "@/app/assets/images/icons/phone.svg";
import mail from "@/app/assets/images/icons/mail.svg";

import { useState } from "react";

const CodeOfConduct = () => {
  const email = "contact@hackon.tech";
  const phoneNumber = "+91 95606 78655";

  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsEmailCopied(true);

    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setIsPhoneCopied(true);

    setTimeout(() => {
      setIsPhoneCopied(false);
    }, 2000);
  };
  return (
    <div className="flex coc-page min-h-screen w-screen">
      <div className="flex flex-col max-w-[90%] md:max-w-[1000px] m-auto md:ml-40 font-satoshi text-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4 gap-y-4 mt-[4rem] md:mt-[6rem]">
          <div className="bg-[#80E93D] px-4 py-3 rounded-md">
            <Image src={logo} alt="logo" width={140} />
          </div>
          <div className="font-quinque text-4xl leading-relaxed">
            CODE OF CONDUCT
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            applicability
          </h3>
          <div>
            This policy shall be applicable on all spaces related to HackOn,
            including the following, as well as their online counterparts (if
            any):
            <ul className="list-disc list-inside mt-6 ml-2">
              <li> hackathons</li>
              <li>talks, presentations, or demos</li>
              <li>workshops</li>
              <li>parties and social events</li>
              <li>social media channels, etc.</li>
            </ul>
            <div className="mt-6">
              This Code of Conduct also applies equally to all sponsors and
              partners of hackathons, and to all projects that are made at the
              hackathon.
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            No plagiarism or re-using of past work
          </h3>
          <div>
            <div>
              We encourage you to submit projects only prepared in the duration
              of the hackathon.However, if you decide to submit projects
              consisting of re-used code, or re-submit a project that you have
              already submitted previously to any other hackathon, you are to
              disclose such previous use and its extent with the submission.
            </div>
            <div className="mt-6">
              If upon inspection, it is found that the project has re-used code
              that was not disclosed with the submission, the organizer may ask
              the participant to point out similarities and differences between
              the old and new work, and/or disqualify the submission from
              winning awards automatically.
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            No discrimination
          </h3>
          <div>
            Hackathons hosted on HackOn are dedicated to providing a safe and
            comfortable environment and harassment-free experience for everyone.
            No discrimination, on the basis of the following, shall be
            tolerated:
            <ul className="list-disc list-inside mt-6 ml-2">
              <li>gender</li>
              <li>gender identity and expression</li>
              <li>age</li>
              <li>sexual orientation</li>
              <li>disability</li>
              <li>physical appearance</li>
              <li>body size</li>
              <li>race</li>
              <li>ethnicity</li>
              <li>nationality</li>
              <li>religion</li>
              <li>political views</li>
              <li>previous hackathon attendance or lack of</li>
              <li>computing experience or lack of</li>
              <li>chosen programming language or tech stack</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            No harassment
          </h3>
          <div>
            We do not tolerate harassment of hackathon participants in any form,
            including offensive discriminatory verbal comments, public display
            of sexual material, in public spaces, deliberate intimidation,
            stalking, wilful disruption, inappropriate physical contact,
            unwelcome sexual advances, and the taking of photographs and
            audio/video recordings without the subjects consent.
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            No recording without consent
          </h3>
          <div>
            <div>
              While photography and videography is encouraged, other
              participants must be given a reasonable chance to opt out from
              being photographed. If they object to the taking of their
              photograph, comply with their request.
            </div>
            <div className="mt-6">
              If they express their disapproval after the photo or video has
              been captured, please delete it from your records, and in case it
              has been shared online, take reasonable steps to retract it from
              social media as well.
            </div>
            <div className="mt-6">
              It is inappropriate to take photographs in contexts where people
              have a reasonable expectation of privacy (in bathrooms or where
              participants are sleeping).
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            Creation of a safe space
          </h3>
          <div>
            No sponsors, partners, or participants shall use sexualised images,
            activities, or other material at the hackathons for any
            non-permitted purpose. The use of sexualised
            clothing/uniforms/costumes, and anything that creates a sexualised
            environment is prohibited.
          </div>
        </div>
        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            Intellectual Property
          </h3>
          <div>
            You will own any developments made by you, and all rights, titles
            and interests in those developments, including the intellectual
            property rights therein, shall belong to you. By posting your
            submission on Devfolio, you are granting Devfolio a non-exclusive,
            worldwide, royalty-free license to use, distribute, display and
            reproduce your submission only to the extent required by us to
            provide services on the Devfolio platform. We will never try to
            steal your creations or use them exploitatively.
          </div>
        </div>

        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            Always report
          </h3>
          <div>
            <div>
              If you notice any violation of this Code of Conduct or find
              otherwise suspicious behavior or have any concerns, please contact
              a member of the hackathon organizing committee immediately.
            </div>
            <div className="mt-6">
              We will be happy to help participants contact local security or
              local law enforcement, or otherwise assist those experiencing
              harassment to feel safe for the duration of the hackathon. We
              value your attendance.
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            Consequences of violations
          </h3>
          <div>
            <span>
              In case any participant violates this Code of Conduct, the
              organizer may, at their own discretion:
            </span>
            <ul className="list-disc list-inside mt-6 ml-2">
              <li>
                expel them from the hackathon with no refund (if applicable),
              </li>
              <li>
                block their access to HackOn resources including the website,
              </li>
              <li>report their behaviour to local law enforcement.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-mono uppercase mt-[4rem] md:mt-[6rem] text-2xl font-semibold  w-full border-b-2 border-b-[#46424D80] border-b-solid pb-4 mb-4">
            contact us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-[6rem] gap-x-8 gap-y-8">
            <div className="bg-[#80E93D] px-6 py-4 text-[#110000]">
              If you have witnessed or experienced any transgressions of this
              Code of Conduct at a hackathon hosted by HackOn, please report it
              to the hackathon organizer, or get in touch with Devfolio.
            </div>
            <div className="bg-[#242424] text-white px-6 py-4 flex flex-col gap-y-2">
              <h3 className="font-bold text-2xl ">Rishabh Bansal</h3>

              <span className="tooltip  w-fit " onClick={copyEmail}>
                <span className="flex flex-row items-center">
                  <Image src={mail} width={24} alt="phone" />
                  <span className="underline underline-offset-4 ml-2">
                    {email}
                  </span>
                </span>
                <span className="tooltiptext">
                  {!isEmailCopied
                    ? "Copy email address"
                    : "Copied to clipboard!"}
                </span>
              </span>

              <span className="tooltip  w-fit " onClick={copyPhoneNumber}>
                <span className="flex flex-row items-center">
                  <Image src={phone} width={24} alt="phone" />
                  <span className="underline underline-offset-4 ml-2">
                    {phoneNumber}
                  </span>
                </span>
                <span className="tooltiptext">
                  {!isPhoneCopied
                    ? "Copy phone number"
                    : "Copied to clipboard!"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
