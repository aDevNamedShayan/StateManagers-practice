import React from 'react'
import { useFriendsStore } from '../../stores/store'

export const ContextCom22 = () => {
  const Friends = useFriendsStore(state => state.Friends)

  console.log("لیست دوستان Rerender...")

  return (
    <div className="w-1/6 h-3/4 border border-purple-400 rounded-3xl bg-fuchsia-200">
      <h3 className="text-2xl text-center py-4">لیست دوستان:</h3>
      <h3 className="text-xl text-center py-4">{Friends}</h3>
    </div>
  )
}
