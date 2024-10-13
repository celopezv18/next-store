"use client";
import { getCategories } from '../../../utils/wooCommerceApi';  //import API handler
import { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import Loader from '../components/Loader';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => { // fetch all categories from woocommerce
      
	  const data = await getCategories(); // assign the data that comes from the api
	  if(data.length > 0){ // check if the data contains information
		setCategories(data); //assign the data to the state
	  }else{
		  setCategories([]);
	  }
	  setLoading(false);
	}
	
    fetchCategories();
  }, []);
  
  if (loading) return <Loader /> //loader

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesPage;
