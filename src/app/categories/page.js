"use client";
import { getCategories } from '../../../utils/wooCommerceApi';  //import API handler
import { useState, useEffect } from 'react';
import CategoryCard from '../../components/CategoryCard';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      
	  const data = await getCategories();
	  if(data.length > 0){
		setCategories(data);
	  }else{
		  setCategories([]);
	  }
	  setLoading(false);
	}
	
    fetchCategories();
  }, []);
  
  if (loading) return <p style={{ marginTop: '1rem' }}>Loading Categories...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesPage;
