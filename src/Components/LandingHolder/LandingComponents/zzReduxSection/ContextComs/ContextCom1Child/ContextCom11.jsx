import { useDispatch } from 'react-redux'
import { setHeader } from '../../redux/slices/headerSlice'
import { setStudentName } from '../../redux/slices/studentSlice'
import { setFriend } from '../../redux/slices/friendSlice'

export const ContextCom11 = () => {
  const dispatch = useDispatch()

  return (
    <div className="w-2/5 h-3/4 border border-lime-500 rounded-3xl bg-lime-200 flex flex-col justify-center items-center">
      <label htmlFor='Header'>عنوان هدر</label>
      <input id='Header' type="text" onChange={(e) => dispatch(setHeader(e.target.value))}/>

      <label htmlFor='Name'>نام دانشجو</label>
      <input id='Name' type="textarea" onChange={(e) => dispatch(setStudentName(e.target.value))}/>

      <label htmlFor='Friends'>دوستان</label>
      <input id='Friends' type="text" onChange={(e) => dispatch(setFriend(e.target.value))}/>
    </div>
  )
}
