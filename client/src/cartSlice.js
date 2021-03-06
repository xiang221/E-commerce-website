import { createSlice } from '@reduxjs/toolkit'


const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      saveState(state,action){
        state.push(action.payload);
      },
      removedata(state,action){
        return [...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)]
      },
      cleardata(){
        return initialState
      }
    },
  })



export const { saveState,removedata,cleardata } = cartSlice.actions

export default cartSlice.reducer  
  