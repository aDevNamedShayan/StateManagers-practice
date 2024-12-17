import React, { useContext, useEffect } from 'react'
import { NameContext } from '../../contexts/NameContext'

export const ContextCom211 = () => {
  const { stName } = useContext(NameContext)

  console.log("نام دانشجو Rerender...")
  
  return (
    <div className="w-3/4 h-3/4 border border-purple-400 rounded-3xl bg-fuchsia-300">
      <h3 className="text-2xl text-center py-4">نام دانشجو:</h3>
      <h3 className="text-xl text-center py-4">{ stName }</h3>
    </div>
  )
}
