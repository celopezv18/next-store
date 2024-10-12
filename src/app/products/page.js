"use client";
import { useState, useEffect } from 'react';
import { getProducts } from '../../../utils/wooCommerceApi';  //import API handler
import ProductCard from '../../components/ProductCard';  //import product card
import Loader from '../../components/Loader';

export default function ProductsPage() {
  const [loading, setLoading] = useState(true); // state for preloading
  const [products, setProducts] = useState(true); // state to store products data
  
  useEffect(() => {
	  
	  const fetchProducts = async () => { // fetch all products from woocommerce api
		const productsData = await getProducts();
		setProducts(productsData);
		setLoading(false);
	 }
	 fetchProducts();
	  
  },[]);
  
  if (loading) return <Loader /> //loader
  if(!products.length) return <p>There are no products to show.</p>

  return (
     <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
	</div>
  );
}
