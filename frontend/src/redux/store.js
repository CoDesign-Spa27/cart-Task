import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart'
import wishlistSlice from './slices/wishlist';
import productSlice from './slices/product';

const store=configureStore({
    reducer:{
       cart:cartSlice,
       wishlist:wishlistSlice,
       products: productSlice,
    }
})

export default store;