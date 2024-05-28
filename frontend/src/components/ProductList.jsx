import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cart';
import { toggleWishlist } from '../redux/slices/wishlist'; // Correct import
import {HeartIcon } from 'lucide-react'
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import activeHeart from '../assets/red-heart.svg'
import inactiveHeart from '../assets/black-heart.svg'



const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();
  const cartItems =useSelector(state => state.cart.items)

  const [onHoverProduct, setOnHoverProduct] = useState(null);

  const handleCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleWishlist = (productId) => {
    dispatch(toggleWishlist(productId));
  };

  const checkProductWishlist = (productId) => {
    return wishlist.includes(productId);
  };

 
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
 

  return (
  <div className='bg-gray-100'>
    <div className='flex px-5 bg-gray-300 py-5 items-center justify-between'>
      <div className='text-2xl font-bold'>Product List</div>
      <div className='flex items-center justify-center gap-5'>
        <Link to="/wishlist">
          <div className='flex gap-2 font-bold'>
            <HeartIcon className='text-red-600' /> Wishlist
          </div>
        </Link>
        <Link to="/cart">
          <div className='flex gap-2 font-bold p-4 relative'>
            <ShoppingCart /> Cart
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                {totalCartItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 container mx-auto gap-4">
      {products.map(product => (
        <div
          className="max-w-sm bg-white border mt-4 border-gray-200 rounded-lg shadow"
          key={product.id}
          onMouseEnter={() => setOnHoverProduct(product.id)}
          onMouseLeave={() => setOnHoverProduct(null)}
        >
          <div className="relative">
            <img 
              className="rounded-t-lg object-cover w-full h-48" 
              src={product.image} 
              alt={product.name} 
            />
            {onHoverProduct === product.id && (
              <div
                className="absolute top-0 right-0 p-2 cursor-pointer"
                onClick={() => handleWishlist(product.id)}
              >
                {checkProductWishlist(product.id) ? 
                  <img src={activeHeart} className='w-5 h-5' alt="activeHeart" /> : 
                 <img src={inactiveHeart} className='w-5 h-5' alt="inactiveHeart" />
}
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.name}</h3>
            <p className="mb-3 font-normal text-gray-700">Rs.{product.price}</p>
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none"
              onClick={() => handleCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductList;
