import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
 const navigate=useNavigate()

  const addToCartHandle = (product) => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandle = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen p-5">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Cart List</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="bg-white p-4 mb-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
              <h3 className="text-lg text-gray-700">Rs.{item.price}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Total: Rs.{item.price * item.quantity}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={() => removeFromCartHandle(item)}
              >
                Remove
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                onClick={() => addToCartHandle(item)}
              >
                Add More
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className='text-xl'>Your cart is empty!</div>
          <div>
          <button 
 onClick={()=>navigate('/product-list')}
className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none'>Add Product</button>
          </div>
      
        </div>
      )}
    </div>
  );
};

export default Cart;
