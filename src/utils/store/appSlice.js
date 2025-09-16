import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        language:'en'
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language = action.payload
        }
    }
})

export const {changeLanguage} = appSlice.actions
export default appSlice.reducer