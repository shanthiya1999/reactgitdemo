import { createSlice } from "@reduxjs/toolkit";

export const SavingsSlice=createSlice({
    name:"Savingdep",
    initialState:{value:5000},
    reducers:{
        withdraw:(state,action)=>{state.value-=action.payload},
        deposit:(state,action)=>{state.value+=action.payload}
    }
})
export const{withdraw,deposit}=SavingsSlice.actions
