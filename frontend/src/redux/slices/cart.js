import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}

const cartSlice =createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=> {
            const itemAlreadyExists = state.items.find(item => item.id === action.payload.id);
            if(itemAlreadyExists) {

                itemAlreadyExists.quantity += 1; 
            }else{
                state.items.push({...action.payload,quantity:1})
            }
             
        },
        removeFromCart:(state,action)=>{
            const itemAlreadyExists = state.items.find((item) => item.id === action.payload.id)
                    if(itemAlreadyExists) {
 
                        if(itemAlreadyExists.quantity > 1){
                            itemAlreadyExists.quantity -=1;
                        }  else{

                          state.items= state.items.filter((item) => item.id !== action.payload.id)
                              } 
                        
            }
            
            
        },
           
    }
})

export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;