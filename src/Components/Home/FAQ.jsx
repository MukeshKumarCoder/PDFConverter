import React, { useState } from "react";
import Heading from "../Common/Heading";
import FAQData from "../../Data/FAQData";
import { FaAngleUp } from "react-icons/fa6";
import IconBtn from "../Common/IconBtn";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(FAQData[0]?.id || null);

  const handleToggle = (id) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };
  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-10 py-10">
      <Heading text="FAQs" />
      <div>
        {FAQData.map((faq) => (
          <div
            key={faq.id}
            className="flex flex-col justify-center items-center w-10/12 m-auto border-b border-borderGray gap-y-3 py-2"
          >
            <button
              onClick={() => handleToggle(faq.id)}
              className="flex justify-between w-full items-center cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <FaAngleUp
                className={`transition-transform duration-500 
              ${activeIndex === faq.id ? "rotate-0" : "rotate-180"}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === faq.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-textGray font-semibold ml-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[10rem] flex gap-x-5 justify-center items-center w-full">
        <IconBtn text="Try 7 Days Free" />
        <IconBtn outline={true} text="Contact Sales" />
      </div>
    </section>
  );
};

export default FAQ;
