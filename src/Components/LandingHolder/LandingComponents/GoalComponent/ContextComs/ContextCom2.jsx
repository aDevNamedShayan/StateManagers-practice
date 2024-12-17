import React from 'react'
import { ContextCom21 } from './ContextCom2Child/ContextCom21'
import { ContextCom22 } from './ContextCom2Child/ContextCom22'
import { ContextCom2Header } from './ContextCom2Child/ContextCom2Header'

export const ContextCom2 = () => {
  return (
    <div className="w-1/2 h-[30rem] p-6 border border-fuchsia-400 rounded-3xl bg-fuchsia-100 flex flex-col justify-center items-center gap-2">
        <ContextCom2Header />
        <div className='w-full h-full flex justify-center items-center gap-8'>
            <ContextCom21 />
            <ContextCom22 />
        </div>     
    </div>
  )
}
