import { useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from '../../redux/slices/counterSlice'

export const ContextCom12 = () => {
  const dispatch = useDispatch()

  return (
    <div className="w-2/5 h-3/4 border border-lime-500 rounded-3xl bg-lime-200 flex flex-col justify-center items-center gap-2">
      <h3 className="text-lg text-center py-4">گیربکس ساییده شدست</h3>
      <button className='btn-outline p-2' onClick={() => dispatch(increment())}>➕</button>
      <button className='btn-outline p-2' onClick={() => dispatch(decrement())}>➖</button>
      <button className='btn-outline p-2' onClick={() => dispatch(incrementAsync(1))}>بده 1</button>
      <button className='btn-outline p-2' onClick={""}>بده معکوس</button>
    </div>
  )
}
