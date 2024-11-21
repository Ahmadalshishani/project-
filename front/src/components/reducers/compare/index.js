import { createSlice } from "@reduxjs/toolkit";

export const compare = createSlice({
    name:"compare",
    initialState:{
        comparing:null,
    },
    
    reducers:{
        setCompare:(state,action)=>{
            state.comparing=action.payload
            console.log(action.payload);
        },
        deleteCompare:(state,action)=>{
            state.comparing=null
        }
    }
})

export const {
    setCompare,
    deleteCompare,
} = compare.actions
export default compare.reducer