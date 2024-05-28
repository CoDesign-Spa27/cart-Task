import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../redux/slices/wishlist';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const wishlistItem=useSelector(state => state.wishlist.items);
  const products =useSelector(state => state.products.products);
const navigate =useNavigate();
  const dispatch =useDispatch();

  const removeFromWishList=(productId)=>{
    dispatch(toggleWishlist(productId))
  }

  return (
    <div className='flex flex-col justify-center gap-4 items-center'>
      <div className='bg-gray-300 py-4 w-full'>
      <h1 className='text-3xl text-center font-bold'>Wishlist Page</h1>

      </div>
      <div>
      {wishlistItem.map((productId)=>{
      const product=  products.find(p => p.id === productId)
      return (
        <div className='bg-white p-4 mb-4 rounded-lg shadow-md flex gap-5 justify-between items-center' key={product.id} >
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
              <h3 className="text-lg text-gray-700">Rs.{product.price}</h3>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={() => removeFromWishList(product.id)}
              >
                Remove
              </button>
             
        </div>
      )
      })}
      </div>

<div>
          <button 
 onClick={()=>navigate('/')}
className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none'>Add Product</button>
          </div>
    </div>
  )
}

export default Wishlist
