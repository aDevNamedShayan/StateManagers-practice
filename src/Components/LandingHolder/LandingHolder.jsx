import React from "react";
import { ContextAPI } from "./LandingComponents/ContextAPISection/ContextAPI";
import { ZustandSection } from "./LandingComponents/ZustandSection/ZustandSection";
import { ReduxSection } from "./LandingComponents/zzReduxSection/ReduxSection";

const LandingHolder = () => {
  return (
    <div
      data-aos="zoom-out-up"
      className=" relative dark:bg-[#041124] overflow-hidden"
    >
      <ContextAPI />
      <div className="w-full border-4 border-gray-500 mt-10"></div>
      <ZustandSection />
      <div className="w-full border-4 border-gray-500 mt-10"></div>
      <ReduxSection />
    </div>
  );
};

export { LandingHolder };
