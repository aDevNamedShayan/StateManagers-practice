import React from "react";
import { ContextAPI } from "./LandingComponents/GoalComponent/ContextAPI";

const LandingHolder = () => {
  return (
    <div
      data-aos="zoom-out-up"
      className=" relative dark:bg-[#041124] overflow-hidden"
    >
      <ContextAPI />
    </div>
  );
};

export { LandingHolder };
