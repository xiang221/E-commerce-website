import { createSlice } from '@reduxjs/toolkit'


const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      saveState(state,action){
        console.log('state',state)
        console.log('action',action)
        state.push(action.payload);
      },
      cleardata(){
        return initialState
      }
    },
  })



export const { saveState,cleardata } = cartSlice.actions

export default cartSlice.reducer  
  