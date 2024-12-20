import React from "react";
import { ContextCom1 } from "./ContextComs/ContextCom1";
import { ContextCom2 } from "./ContextComs/ContextCom2";

const ReduxSection = () => {
  return (
    <>
      <h3 className="text-3xl text-center font-bold mb-6 dark:text-white pt-10">
        نمونه پیاده سازی ریداکس
      </h3>
      <section className="p-12 flex flex-col border border-pink-400 rounded-3xl">
        <h3 className="text-2xl text-center font-medium mb-6 dark:text-white">
          کامپوننت والد
        </h3>
        <div className="flex gap-4">
          <ContextCom1 />
          <ContextCom2 />
        </div>
      </section>
    </>
  );
};

export { ReduxSection };
