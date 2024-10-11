// src/components/ProductCard.js
import Link from 'next/link';

export default function ProductCard({ product }) { //layout used to display the produsts when is in the product list
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={product.images[0].src} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <Link href={`/products/${product.slug}`} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            View Details
        </Link>
      </div>
    </div>
  );
}