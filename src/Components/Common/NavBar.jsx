import React from "react";
import logo from "../../assets/logo.svg";
import { TbGridDots } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavData from "../../Data/NavData.js";
import IconBtn from "./IconBtn.jsx";

const NavBar = () => {
  return (
    <nav className="h-[60px] flex justify-between items-center p-3 border-b border-borderGray fixed top-0 w-full bg-white z-50">
      <div className="flex item-center justify-center gap-x-10">
        <NavLink to={"/"} className="flex items-center justify-center gap-x-2 ">
          <img className="w-[2.5rem] h-[2.5rem] " src={logo} alt="Logo" />
          <h1 className="text-2xl font-extrabold">My-Pdf</h1>
        </NavLink>
        <button className="flex items-center gap-x-2 font- text-base font-normal text-textGray hover:text-hoverGray cursor-pointer">
          <TbGridDots className="text-2xl text-gray-900" />
          Tools
          <FaCaretDown />
        </button>
        <div className="flex items-center gap-x-5">
          {NavData.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className="text-textGray text-base hover:text-hoverGray"
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-10">
        <div className="flex items-center gap-x-5">
          <NavLink
            to="/pricing"
            className="text-textGray text-base hover:text-hoverGray"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/teams"
            className="text-textGray text-base hover:text-hoverGray"
          >
            Teams
          </NavLink>
        </div>
        <div className="w-[1px] h-[40px] bg-gray-200"></div>
        <div className="flex items-center gap-x-5">
          <NavLink
            to="/login"
            className="text-textGray text-base hover:text-hoverGray"
          >
            Log in
          </NavLink>
          <IconBtn text={"Free Trial"} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
