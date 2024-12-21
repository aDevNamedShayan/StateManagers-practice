import React from 'react'
import { useSelector } from 'react-redux'

export const ContextCom22 = () => {
  const friendTxt = useSelector((state) => state.friendTxt.value)

  console.log("لیست دوستان Rerender...")
  return (
    <div className="w-1/6 h-3/4 border border-purple-400 rounded-3xl bg-fuchsia-200">
      <h3 className="text-2xl text-center py-4">لیست دوستان:</h3>
      <h3 className="text-xl text-center py-4">{friendTxt}</h3>
    </div>
  )
}
