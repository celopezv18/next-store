"use client"; // Indicates this file should be treated as a Client Component

import { createContext, useContext, useState, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart and totalPrice from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const savedTotalPrice = localStorage.getItem('totalPrice');
    
    if (savedCart) {
      setCart(savedCart);
    }
    if (savedTotalPrice) {
      setTotalPrice(Number(savedTotalPrice));
    }
  }, []);

  // Update localStorage whenever the cart or totalPrice state changes
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    localStorage.setItem('totalPrice', totalPrice.toString());
  }, [cart, totalPrice]);

  // Function to add a product to the cart and update the total price
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Calculate total price whenever the cart changes
  useEffect(() => {
    const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);
  }, [cart]);

  // Function to get the total cart count
  const getTotalCount = () => {
    return cart.length;
  };
  
  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
	localStorage.clear();
  };

  // Providing cart state, totalPrice, and functions through context
  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalCount, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext; // Optional, for direct import