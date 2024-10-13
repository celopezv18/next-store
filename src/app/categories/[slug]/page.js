"use client";
import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../../../../utils/wooCommerceApi'; // API helper
import ProductCard from '../../../components/ProductCard';
import Loader from '../../components/Loader';

const CategoryPage = ({ params }) => {
  const { slug } = params;
  const [loading, setLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState([]);
  
  useEffect(() => {
    const fetchCategoryProduct = async () => {
      
	  // Fetch products by category slug
	  const products = await getProductsByCategory(slug);
	  
	  if(products.length > 0){ // validate if the response is not empty
		setDataProducts(products);
	  }else{
		  setDataProducts([]);
	  }
	  setLoading(false);
	}
	
    fetchCategoryProduct();
  }, []);
  
  if (loading) return <Loader />   //loader

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {dataProducts.length > 0 ? (
        dataProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;