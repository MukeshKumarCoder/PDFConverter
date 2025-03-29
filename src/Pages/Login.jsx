import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { RxCross1 } from "react-icons/rx";
import { FaChessQueen } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import IconBtn from "../components/Common/IconBtn";

const pricingTagList = [
  "Unlimited downloads",
  " Edit and delete text on PDFs",
  "Strong compression",
  "Recognize text with OCR",
  " Batch processing",
  "Share documents",
  "Cloud storage",
  "Electronic signatures",
  "AI tools",
  "And more...",
];

const Login = ({ setShowLogin, showLogin }) => {
  const [currentState, setCurrentState] = useState("Log in to MyPdf");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLogin]);
  return (
    <div className="absolute z-50 grid h-screen w-[100%] bg-[#000000c1]">
      <div className="w-[95%] h-full flex justify-between absolute right-0">
        <div className="relative flex justify-center items-center bg-white flex-1/2 p-6">
          <div className="absolute top-8 left-6 flex items-center justify-start gap-x-2 ">
            <img className="w-[2.5rem] h-[2.5rem] " src={logo} alt="Logo" />
            <h1 className="text-2xl font-extrabold">My-Pdf</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-5 w-[50%] px-10 ">
            <h2 className="text-3xl font-bold text-center ">{currentState}</h2>
            <div>
              {currentState === "Log in to MyPdf" ? (
                <div className=" text-end">
                  <p className="text-sm text-green">
                    Don’t have an account? 
                    <Link
                      onClick={() => setCurrentState("Create your account")}
                      className="text-blue-600 hover:underline"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              ) : (
                <div className=" text-end">
                  <p className="text-sm text-green">
                    Already have an account?{" "}
                    <Link
                      onClick={() => setCurrentState("Log in to MyPdf")}
                      className="text-blue-500 hover:underline"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-3 w-full">
              <a
                href="#"
                className="flex items-center border border-blue-600 rounded-md bg-blue-600 text-white "
              >
                {" "}
                <div className="flex items-center gap-x-5 w-full">
                  <div className="bg-white px-3 py-1 rounded-md">
                    <FcGoogle className=" text-3xl" />
                  </div>
                  <span className="flex-grow text-start font-medium">
                    Continue with Google
                  </span>
                </div>
              </a>
              {currentState === "Log in to MyPdf" && (
                <a
                  href="#"
                  className="flex items-center rounded-md bg-[#3b5998] text-white border border-[#3b5998]"
                >
                  <div className="flex items-center w-full gap-x-5">
                    <div className="bg-[#2d4373] px-3 py-1 rounded-md">
                      <ImFacebook2 className="text-3xl" />
                    </div>
                    <span className="flex-grow text-start font-medium">
                      Continue with Facebook
                    </span>
                  </div>
                </a>
              )}
            </div>
            <div className="flex items-center justify-center gap-x-2 w-full">
              <p className="text-textGray">or</p>
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <div className="flex items-center rounded-sm px-5 border border-borderGray hover:border-textGray">
                <MdOutlineMail className=" text-textGray" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-3 pl-4 pr-16 text-textGray outline-none placeholder:select-none"
                />
              </div>
              <div className="flex items-center rounded-sm px-5 border border-borderGray hover:border-textGray">
                <RiLockPasswordLine className=" text-textGray" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full py-3 pl-4 pr-16 text-textGray outline-none placeholder:select-none"
                />
                <button
                  className=" cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>
            <IconBtn customClasses={"w-full"} text={"Log in"} />
          </div>
        </div>
        <div className="relative bg-[#FFFCF2] flex flex-col gap-y-5 pl-10  pr-22 item-center justify-center h-full">
          <button
            className="absolute top-9 right-6 cursor-pointer"
            onClick={() => setShowLogin(false)}
          >
            <RxCross1 className=" text-xl mr-2.5 text-textGray" />
          </button>

          <div className="flex justify-center items-center px-2 rounded-full text-sm w-fit bg-yellow-500">
            <FaChessQueen />
            pro
          </div>
          <div className="flex flex-col gap-y-2">
            {pricingTagList.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-x-2 text-[1rem]"
              >
                <FaCircleCheck className="text-amber-300" />
                <span className="text-textGray">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
