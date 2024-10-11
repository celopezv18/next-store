"use client";
import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../../../../utils/wooCommerceApi'; // API helper
import ProductCard from '../../../components/ProductCard';

const CategoryPage = ({ params }) => {
  const { slug } = params;
  const [loading, setLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState([]);
  
  useEffect(() => {
    const fetchCategoryProduct = async () => {
      
	  // Fetch products by category slug
	  const products = await getProductsByCategory(slug);
	  
	  if(products.length > 0){
		setDataProducts(products);
	  }else{
		  setDataProducts([]);
	  }
	  setLoading(false);
	}
	
    fetchCategoryProduct();
  }, []);
  
  if (loading) return <p style={{ marginTop: '1rem' }}>Loading Products...</p>;

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