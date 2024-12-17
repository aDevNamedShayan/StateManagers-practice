import React, { useContext } from 'react'
import { NameContext } from '../../contexts/NameContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import { FriendsContext } from '../../contexts/FriendsContext'

export const ContextCom11 = () => {
  const { setStName } = useContext(NameContext)
  const { setHeaderTxt } = useContext(HeaderContext)
  const { setFriends } = useContext(FriendsContext)

  return (
    <div className="w-3/4 h-3/4 border border-lime-500 rounded-3xl bg-lime-200 flex flex-col justify-center items-center">
      <label htmlFor='Header'>عنوان هدر</label>
      <input id='Header' type="text" onChange={(e) => setHeaderTxt(e.target.value)} />

      <label htmlFor='Name'>نام دانشجو</label>
      <input id='Name' type="textarea" onChange={(e) => setStName(e.target.value)} />

      <label htmlFor='Friends'>دوستان</label>
      <input id='Friends' type="text" onChange={(e) => setFriends(e.target.value)} />
    </div>
  )
}
