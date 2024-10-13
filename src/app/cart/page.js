"use client";
import { useCart } from '../components/CartContext';
import Link from 'next/link';

export default function CartPage() { // show the items in the cart section
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className="mb-4 space-y-4">
          {cart.map((item) => { //iterate through all the items in the cart
            const price = Number(item.price) || 0;
            return (
              <li
                key={item.id}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md"
              >
                {/* Product image */}
                <img
                  src={item.images[0].src}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />

                {/* Product details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">
                    ${price.toFixed(2)} x {item.quantity} = ${(price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-6 text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
	  <Link href='javascript:void(0);' 
	  onClick={clearCart} 
	  style={{marginTop: '0.8rem', display: 'block', width: '7rem'}} 
	  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
            Empty Car
        </Link>
    </div>
  );
}
