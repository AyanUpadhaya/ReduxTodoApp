import { useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { add,update,deleteTodo } from "./feature/todo/todoSlice";
import { v4 as uuidv4 } from 'uuid';
const Todos = ()=>{
    const todos = useSelector(state=>state.todos.todos)
    const dispatch = useDispatch()
    const newtask = useRef(null)
    const checked = useRef(null)
    const handleAddTodo = () => {
        dispatch(add({id:uuidv4(),name:newtask.current.value,completed:false}))
        newtask.current.value ='';
    }
    const handleUpdate=(id)=>{
        dispatch(update({id:id,checked:checked.current.checked}))        
    }
    console.log(todos)
    return(<>
        <div className="flex justify-center items-center">
            <div className="space-y-3">
            <h2 className="text-3xl font-bold">Todo List</h2>  
            <div className="space-x-2">
            <input type="text" ref={newtask} className="border border-black py-2 px-1"/>
            <button className='bg-red-600 outline-none border-0 py-3 px-7 text-white rounded-md cursor-pointer' onClick={()=>handleAddTodo()}>Add Todo</button>
            </div>

            <ul className="w-full list-none">
                {todos.map(todo=>{
                    return(
                    <li className={`px-3 bg-red-400 text-white mb-2`} key={todo.id} >
                        <p className={`flex justify-between items-center py-2 ${todo.completed?'line-through':''}` }><input type="checkbox" ref={checked} onClick={()=>handleUpdate(todo.id)} />
                            <span className={`${todo.completed?'line-through text-red-900':''}`}>{todo.name}<button className="bg-red-900 px-3 py-2 rounded-md outline-none border-0 mx-3" onClick={()=>dispatch(deleteTodo({id:todo.id}))}>Delete</button></span>
                        </p>
                    </li>)
                })}
            </ul>
            </div>
        </div>
    </>)
}

export default Todos