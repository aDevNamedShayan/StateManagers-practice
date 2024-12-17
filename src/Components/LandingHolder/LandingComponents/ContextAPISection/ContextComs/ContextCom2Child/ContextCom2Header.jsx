import React, { useContext, useEffect } from 'react'
import { ContextCom211 } from './ContextCom211'
import { HeaderContext } from '../../contexts/HeaderContext'

export const ContextCom2Header = () => {
  console.log("هدر Rerender...")
  
  const {headerTxt} = useContext(HeaderContext)

  return (
    <div className="w-5/6 h-1/6 border border-purple-400 rounded-3xl bg-fuchsia-200">
      <h3 className="text-2xl text-center py-4">{headerTxt}</h3>
    </div>
  )
}
