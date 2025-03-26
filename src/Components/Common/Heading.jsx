import React from "react";

const Heading = ({ text, customClasses }) => {
  return (
    <h1
      className={`lg:text-4xl md:text-2xl text-xl
       font-bold capitalize text-black ${customClasses}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
