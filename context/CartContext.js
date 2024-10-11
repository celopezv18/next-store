// context/CartContext.js

import { createContext, useState } from 'react';

// Create a Cart Context
export const CartContext = createContext();

// Cart Provider Component to manage cart state globally
export const CartProvider = ({ children }) => {
  // Cart state holds the list of products in the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        // If item already exists, update its quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // Otherwise, add a new item to the cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Calculate total cart items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};