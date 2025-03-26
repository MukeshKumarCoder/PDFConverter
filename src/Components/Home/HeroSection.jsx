import React from "react";
import Heading from "../Common/Heading";
import { FaCircleCheck } from "react-icons/fa6";
import IconBtn from "../Common/IconBtn";
import heroImg from "../../assets/hero-business.png";

const HeroSection = () => {
  return (
    <main className="w-full h-screen m-auto flex justify-between items-center">
      <div className="flex flex-col justify-center gap-y-6 w-[50%] h-full pl-12 ">
        <h1 className="text-black lg:text-6xl md:text-4xl text-2xl font-bold">
          Power Your Team
        </h1>
        <h1 className="text-black lg:text-6xl md:text-4xl text-2xl font-bold">
          With MyPdf
        </h1>
        <p className="text-textGray text-[1.4rem]">
          All the PDF tools your team needs, with savings and support designed
          to make collaboration seamless. Simplify your document
          management—you’ll all appreciate it.
        </p>
        <div className="flex flex-col gap-y-4">
          <p className="flex items-center gap-x-2 text-base text-textGray">
            <FaCircleCheck className="text-green-500" />
            <span>Special team pricing and volume discount</span>
          </p>
          <p className="flex items-center gap-x-2 text-base text-textGray">
            <FaCircleCheck className="text-green-500" />
            <span>Swiss-grade security you can count on</span>
          </p>
          <p className="flex items-center gap-x-2 text-base text-textGray">
            <FaCircleCheck className="text-green-500" />
            <span>Unlimited access to 30+ tools, including AI</span>
          </p>
        </div>
        <div className="flex gap-x-5">
          <IconBtn text={"Try 7 Days Free"} />
          <IconBtn outline={true} text={"Compare Plans"}></IconBtn>
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center pr-12">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </main>
  );
};

export default HeroSection;
