import React, { createContext, useState } from "react";
import { ContextCom1 } from "./ContextComs/ContextCom1";
import { ContextCom2 } from "./ContextComs/ContextCom2";
import { NameContextProvider } from "./contexts/NameContext"
import { HeaderContextProvider } from "./contexts/HeaderContext";
import { FriendsContextProvider } from "./contexts/FriendsContext";

const ContextAPI = () => {
              // The main reason of creating multiple contexts is that:👇 
              // if you use a single context for all of your states, even if one of the states value changes,
              // every single component which uses that context (useContext()) will rerender and thats a bad thing!❌
              // so we group related states and throw each group in its own context to prevent unrelated components from rerendering✅👌 
              // but this is still not the best practice or solution
              // because all of the components which uses that one context (which includes those related states) will also rerender
              // and you may be forced to create tons of contexts to prevent unnecessary rerenders🤕 
  return (
    <FriendsContextProvider>
      <HeaderContextProvider>
        <NameContextProvider>
          <h3 className="text-3xl text-center font-bold mb-6 dark:text-white">
            نمونه پیاده سازی کانتکست ای پی آی
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
        </NameContextProvider>
      </HeaderContextProvider>
    </FriendsContextProvider>
  );
};

export { ContextAPI };
