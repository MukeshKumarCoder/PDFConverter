import React from "react";

const IconBtn = ({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={` ${
        outline
          ? "border border-blue-600 bg-transparent text-blue-600"
          : "bg-blue-600 text-white"
      } hover:bg-blue-700 hover:text-white transition-all duration-700 flex justify-center items-center gap-1 cursor-pointer rounded-sm py-2 px-4 font-semibold select-none w-fit ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-blue-600"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
