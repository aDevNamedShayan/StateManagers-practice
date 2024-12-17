import React, { createContext, useState } from 'react'

export const FriendsContext = createContext(null)

export const FriendsContextProvider = ({children}) => {
    const [friends, setFriends] = useState("ممرضا گلزار")

    const value = { friends, setFriends }
  return (
    <FriendsContext.Provider value={value}>
        {children}
    </FriendsContext.Provider>
  )
}
