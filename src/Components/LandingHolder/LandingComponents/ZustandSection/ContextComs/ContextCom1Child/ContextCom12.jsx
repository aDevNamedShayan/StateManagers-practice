import React from 'react'
import { useCountStore } from '../../stores/store'

export const ContextCom12 = () => {
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)
  const incrementAsync = useCountStore((state) => state.incrementAsync)
  const decrementAsync = useCountStore((state) => state.decrementAsync)

  return (
    <div className="w-2/5 h-3/4 border border-lime-500 rounded-3xl bg-lime-200 flex flex-col justify-center items-center gap-2">
      <h3 className="text-lg text-center py-4">گیربکس ساییده شدست</h3>
      <button className='btn-outline p-2' onClick={incrementAsync}>بده 1</button>
      <button className='btn-outline p-2' onClick={decrementAsync}>بده معکوس</button>
      <button className='btn-outline p-2' onClick={increment}>➕</button>
      <button className='btn-outline p-2' onClick={decrement}>➖</button>
    </div>
  )
}
