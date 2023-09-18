import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { increament,decreament } from './feature/counter/counterSlice';
const Counter = () => {
    const count = useSelector((state)=>state.couter.value)
    console.log(count)
    const dispatch = useDispatch()
    return (
        <div className='flex justify-center items-center h-[300px] border-2 border-red-400'>
            <button className='bg-red-600 outline-none border-0 py-4 px-7 rounded-md cursor-pointer' onClick={()=>dispatch(increament())}>
                increament
            </button>
            <span className='font-bold px-2 h-[45px] py-4 border border-black'>{count}</span>
            <button className='bg-red-600 outline-none border-0 py-4 px-7 rounded-md cursor-pointer' onClick={()=>dispatch(decreament())}>
                decreament
            </button>
        </div>
    );
};

export default Counter;