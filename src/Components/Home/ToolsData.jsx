import React from "react";
import Heading from "../Common/Heading";
import aboutTools from "../../Data/AboutTools";

const ToolsData = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-10">
      <Heading text={"Smart PDF Tools Your Team Can Rely On"} />
      <div className="grid grid-cols-3 gap-15 w-10/12 p-10">
        {aboutTools.map((tool) => (
          <div key={tool.id} className="flex flex-col justify-center gap-y-3 ">
            <img className="w-20 h-20" src={tool.image} alt={tool.title} />
            <h2 className="text-xl font-bold text-black">{tool.title}</h2>
            <p className="text-base text-textGray ">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsData;
