import React from 'react'
import { useHeaderStore } from '../../stores/store'

export const ContextCom2Header = () => {
  const headerTxt = useHeaderStore(state => (state.headerTxt))
  
  console.log("هدر Rerender...")
  
  return (
    <div className="w-5/6 h-1/6 border border-purple-400 rounded-3xl bg-fuchsia-200">
      <h3 className="text-2xl text-center py-4">{headerTxt}</h3>
    </div>
  )
}