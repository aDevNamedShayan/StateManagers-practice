import React, { createContext, useState } from 'react'

export const NameContext = createContext(null)

export const NameContextProvider = ({children}) => {
    const [stName, setStName] = useState("ممرضا")

    const value = { stName, setStName }
  return (
    <NameContext.Provider value={value}>
        {children} 
    </NameContext.Provider>
  )
}
