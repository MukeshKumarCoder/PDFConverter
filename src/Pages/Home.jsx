import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import safety from "../../src/assets/safety.svg";
import ToolsData from "../Components/Home/ToolsData";
import Reviews from "../Components/Home/Reviews";
import FAQ from "../Components/Home/FAQ";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-full flex justify-center items-center py-10">
        <img src={safety} alt="safety" />
      </div>
      <ToolsData />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;
