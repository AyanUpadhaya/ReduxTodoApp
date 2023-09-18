import { createSlice } from "@reduxjs/toolkit";
//initial state better be object
const initialState = {todos:[]}
export const todosSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        add:(state,action)=>{
           state.todos = [...state.todos,action.payload]
        },
        update:(state,action)=>{
            const todoToUpdate = state.todos.find(todo => todo.id === action.payload.id);
            if(action.payload.checked){
                if (todoToUpdate) {
                    todoToUpdate.completed = true;
                }
            }else{
                if (todoToUpdate) {
                    todoToUpdate.completed = false;
                }
            }
        },
        unstrike:(state,action)=>{
            const todoToUpdate = state.todos.find(todo => todo.id === action.payload.id);
            if (todoToUpdate) {
                todoToUpdate.completed = false;
            }
        },
        deleteTodo :(state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }

}) 

export const {add,update,unstrike,deleteTodo} = todosSlice.actions;
export default todosSlice.reducer