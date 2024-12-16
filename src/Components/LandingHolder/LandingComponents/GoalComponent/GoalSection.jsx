import React from "react";
import { ContextCom1 } from "./ContextComs/ContextCom1";
import { ContextCom2 } from "./ContextComs/ContextCom2";

const GoalsSection = () => {

  return (
    <>
    <h3 className="text-3xl text-center font-bold mb-6 dark:text-white">
      نمونه پیاده سازی کانتکست ای پی آی
    </h3>
    <section className="py-12 flex gap-4">
      <ContextCom1 />
      <ContextCom2 />
    </section>
    </>
  );
};

export { GoalsSection };
