import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isSignedIn:false
}

export const rootSlice=createSlice({
name:'root',
initialState,
reducers:{
    toggleIsSignedIn:(state)=>{
        console.log(state)
        state.isSignedIn=true
    },
    setIsSignedInTrue:(state)=>{
        state.isSignedIn=true
    }
}

})

export const {toggleIsSignedIn,setIsSignedInTrue}= rootSlice.actions

export default rootSlice.reducer