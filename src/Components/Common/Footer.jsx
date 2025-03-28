import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Windows from "../../assets/windows.png";
import PlayStore from "../../assets/playStore.png";
import AppStore from "../../assets/appStore.png";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaX,
  FaFacebook,
} from "react-icons/fa6";

const companyList = ["About", "Help", "Blog"];
const productList = ["Pricing", "Teams", "Embed PDF", "Developers", "Sign.com"];
const appList = ["Download MyPdf", "PDF Scanner", "Windows App"];
const privacyList = [
  "Privacy Notice",
  "Terms & Conditions",
  "Imprint",
  "Contact Us",
  "English",
];

const Footer = () => {
  return (
    <div>
      <div className="border-b border-t border-borderGray flex justify-between p-10">
        <div className="flex flex-col items-start gap-y-5 pr-20">
          <div className="flex items-center gap-x-2 ">
            <img className="w-[2.5rem] h-[2.5rem] " src={Logo} alt="Logo" />
            <h1 className="text-2xl font-extrabold">My-Pdf</h1>
          </div>
          <p>We make PDF easy.</p>
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <h2>Solution</h2>
          <Link to={"/teams"}>Teams</Link>
          <Link to={"/education"}>Education</Link>
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <h2>Company</h2>
          {companyList.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <h2>Product</h2>
          {productList.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <h2>Apps</h2>
          {appList.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-x-5">
          <FaLinkedinIn className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaX className="text-2xl" />
          <FaFacebook className="text-2xl" />
        </div>
        <div className="flex items-center gap-x-5">
          <img className="w-40" src={Windows} alt="Windows" />
          <img className="w-40" src={PlayStore} alt="Play Store" />
          <img className="w-40" src={AppStore} alt="App Store" />
        </div>
      </div>
      <div className="flex justify-between items-center p-6 bg-borderGray">
        <p>© 2025 MyPdf AG — Made with ❤️ for the people of the internet.</p>
        <div className="flex items-center gap-x-5">
          {privacyList.map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
