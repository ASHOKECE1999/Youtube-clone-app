import { createSlice } from "@reduxjs/toolkit";


const mainContextSlice=createSlice({
    name:"mainContext",
    initialState:{
        isToggleOn:true
    },
    reducers:{
        changeToggelState:(state)=>{
            state.isToggleOn=!state.isToggleOn
        },
        closeMenu:(state)=>{
            state.isToggleOn=false
        }
    }
})
export const {changeToggelState,closeMenu}=mainContextSlice.actions
export default mainContextSlice.reducer