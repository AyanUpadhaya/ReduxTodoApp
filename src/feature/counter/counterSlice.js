import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    value:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increament:(state)=>{
            state.value+=1
        },
        decreament:(state)=>{
            state.value-=1
        },
        increamentBy:(state,action)=>{
            state.value += action.payload
        }
    }

})

export const {increament,decreament,increamentBy} = counterSlice.actions;
export default counterSlice.reducer