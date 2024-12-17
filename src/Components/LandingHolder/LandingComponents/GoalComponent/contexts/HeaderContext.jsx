import React, { createContext, useState } from 'react'

export const HeaderContext = createContext(null)

export const HeaderContextProvider = ({ children }) => {
    const [headerTxt, setHeaderTxt] = useState("هدر")

    const value = { headerTxt, setHeaderTxt }
  return (
    <HeaderContext.Provider value={value}>
        {children}
    </HeaderContext.Provider>
  )
}
