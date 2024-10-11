"use client"; // This file is a Client Component
import { useContext, useEffect, useState } from 'react';
import { useCart } from './CartContext';

export default function CartPreview() {
  const { cart } = useCart();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Calculate total price from cart items
    const total = cart.reduce((acc, item) => acc + Number(item.price), 0);
    setPrice(total);

    // Update localStorage
    localStorage.setItem('cartlength', cart.length);
    localStorage.setItem('price', total.toFixed(2));

  }, [cart]);

  return (
    <div className="flex items-center">
      <span className="text-lg font-semibold mr-4">
        Items: {localStorage.getItem('cartlength') ? localStorage.getItem('cartlength') : 0}
      </span>
      <span className="text-lg">
        Total: ${localStorage.getItem('price') ? localStorage.getItem('price') : 0}
      </span>
    </div>
  );
}
