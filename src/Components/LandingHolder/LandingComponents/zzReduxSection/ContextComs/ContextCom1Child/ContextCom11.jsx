import React from 'react'

export const ContextCom11 = () => {


  return (
    <div className="w-2/5 h-3/4 border border-lime-500 rounded-3xl bg-lime-200 flex flex-col justify-center items-center">
      <label htmlFor='Header'>عنوان هدر</label>
      <input id='Header' type="text" onChange={(e) => e}/>

      <label htmlFor='Name'>نام دانشجو</label>
      <input id='Name' type="textarea" onChange={(e) => e}/>

      <label htmlFor='Friends'>دوستان</label>
      <input id='Friends' type="text" onChange={(e) => e}/>
    </div>
  )
}
