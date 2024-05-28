import {useEffect } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleProducts } from './redux/slices/product';
import axios from 'axios'
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

function App() {
 
const dispatch =useDispatch();

  useEffect(() => {

  const  fetchProduct=async()=>{
      try{
        const res=await axios.get("https://cart-task.onrender.com/api/products")
       dispatch(handleProducts(res.data))
      }
      catch(e){
        console.log("Error Occurred while fetching " +e)
      }

    }
 
    fetchProduct()
  }, [dispatch]);
  return (
   <BrowserRouter>
   <Routes >
    <Route path='/' element={<ProductList />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/wishlist' element={<Wishlist />} />
   </Routes>
     
   
   </BrowserRouter>
    
   
    
 
  )
}

export default App
