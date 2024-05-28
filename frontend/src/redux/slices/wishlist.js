import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
}

const wishlistSlice =createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        toggleWishlist:(state,action)=>{
            const productId = action.payload;
            const index = state.items.indexOf(productId);
            console.log("wishlist "+index)
            if (index !== -1) {
                state.items.splice(index, 1);
            } else {
                state.items.push(productId);
            }
        }
    }
})

export const { toggleWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;

