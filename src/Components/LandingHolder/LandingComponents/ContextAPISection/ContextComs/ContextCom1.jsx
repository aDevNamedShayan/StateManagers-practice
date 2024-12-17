import React from 'react'
import { ContextCom11 } from './ContextCom1Child/ContextCom11'

export const ContextCom1 = () => {
  return (
    <div className="w-1/2 h-[30rem] border border-lime-400 rounded-3xl bg-lime-100 flex justify-center items-center gap-4">
        <ContextCom11 />
    </div>
  )
}
