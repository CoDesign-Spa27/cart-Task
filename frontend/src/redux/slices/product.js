import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    products:[],
}

const productSlice = createSlice ({
name:'product',
initialState,
reducers:{
     handleProducts:(state,action)=>{
        state.products= action.payload
    }
}
})


export const {handleProducts} =productSlice.actions;

export default productSlice.reducer