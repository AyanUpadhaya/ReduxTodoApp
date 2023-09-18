import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/counter/counterSlice'
import todosReducer from './feature/todo/todoSlice'
const store = configureStore({
    reducer:{couter:counterReducer,todos:todosReducer}
})

export default store;