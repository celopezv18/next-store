"use client";
import { useState } from 'react';
import { useCart } from './CartContext';
import Link from 'next/link'; // Import Link for navigation
import RelatedProducts from './RelatedProducts';

const ProductDetailPage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0].src);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // State for quantity selection
  

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value); // Update quantity state
    }
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Add quantity to product
    addToCart(productWithQuantity); // Add product to cart
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      
      {/* Main Image */}
      <img
        src={selectedImage}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-4 transition duration-300 ease-in-out"
      />
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto mb-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className="w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform duration-200 transform hover:scale-105"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {/* Product price */}
      <div className="flex items-center mb-4">
        <label className="mr-2 text-lg font-semibold">Price:</label>
        <h2 style={{ fontSize: '1.2em' }}>${ Number(product.price)?.toFixed(2) }</h2>
      </div>
	  
      {/* Quantity Input */}
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2 text-lg font-semibold">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border border-gray-300 rounded-md w-16 text-center"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add to Cart
      </button>

      {/* Description */}
      <div className="mt-4">
        <p className="text-lg font-semibold">Description:</p>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
	  <div>
		<RelatedProducts relatedIds={product.related_ids} />
	  </div>
    </div>
  );
};

export default ProductDetailPage;
