import React from 'react'
import { useCountStore, useFriendsStore, useHeaderStore } from '../../stores/store'

export const ContextCom11 = () => {
  const setHeader = (e) => {
    useHeaderStore.setState({ headerTxt: e.target.value })
  }

  const setFriends = (e) => {
    useFriendsStore.setState({ Friends: e.target.value })
  }

  return (
    <div className="w-2/5 h-3/4 border border-lime-500 rounded-3xl bg-lime-200 flex flex-col justify-center items-center">
      <label htmlFor='Header'>عنوان هدر</label>
      <input id='Header' type="text" onChange={(e) => setHeader(e)}/>

      <label htmlFor='Name'>نام دانشجو</label>
      <input id='Name' type="textarea" onChange={(e) => useCountStore.setState({ studentName: e.target.value })}/>

      <label htmlFor='Friends'>دوستان</label>
      <input id='Friends' type="text" onChange={(e) => setFriends(e)}/>
    </div>
  )
}
