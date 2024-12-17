import React, { useContext, useEffect } from 'react'
import { FriendsContext } from '../../contexts/FriendsContext'

export const ContextCom22 = () => {
  console.log("لیست دوستان Rerender...")

  const {friends} = useContext(FriendsContext)

  return (
    <div className="w-1/6 h-3/4 border border-purple-400 rounded-3xl bg-fuchsia-200">
      <h3 className="text-2xl text-center py-4">لیست دوستان:</h3>
      <h3 className="text-xl text-center py-4">{friends}</h3>
    </div>
  )
}
