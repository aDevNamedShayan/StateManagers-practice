import React from 'react'
import { useCountStore } from '../../stores/store'

export const ContextCom211 = () => {
  const { studentName, count } = useCountStore((state) => state);
           // what happenes if we leave our state like this ^^ ? our component (ContextCom211) will listen to the whole store 
           // and if any of the variables change in that store, will cause unnecessary rerenders😐
           // so this is bad practice❌, but a possible way to get our gorgeous variables😄
  
  console.log("نام دانشجو Rerender...");
  
  return (
    <div className="w-3/4 h-3/4 border border-purple-400 rounded-3xl bg-fuchsia-300">
      <h3 className="text-2xl text-center py-4">نام دانشجو:</h3>
      <h3 className="text-xl text-center py-4">{studentName}</h3>
      <h3 className="text-xl text-center py-4">{count}</h3>
    </div>
  )
}
