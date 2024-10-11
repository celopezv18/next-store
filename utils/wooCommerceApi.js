// utils/wooCommerceApi.js

import axios from 'axios';

// Create an axios instance for the WooCommerce API
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WOO_STORE_URL, // Base URL for WooCommerce API
  auth: {
    username: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET,  // Consumer Key for API authentication
    password: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET // Consumer Secret for API authentication
  }
});

// Function to fetch all products
export const getProducts = async () => {
	
  try {
        const consumerKey = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY;
          const consumerSecret = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET;
          const authHeader = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

          const res = await fetch(process.env.NEXT_PUBLIC_WOO_STORE_URL, {
            headers: {
              Authorization: authHeader,
            },
          });
          
        const data = await res.json();
        return data;
      } catch (error) {
        return error;
     }
};

// Function to fetch a single product by its slug
export const getProduct = async (slug) => {
  try {
          const consumerKey = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY;
          const consumerSecret = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET;
          const authHeader = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

          const res = await fetch(`${process.env.NEXT_PUBLIC_WOO_STORE_URL}?slug=${slug}`, {
            headers: {
              Authorization: authHeader,
            },
          });
          
        const data = await res.json();
        return data;
      } catch (error) {
        return error;
     }
};

// Another way to call a specific product
export async function fetchProduct(slug) { //fetch the product with te specified slug
  try{
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_WOO_STORE_URL}?slug=${slug}`,
    {
      auth: {
        username: process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY, //woocommerce keys
        password: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET,
      },
    }
  );
  return response.data[0]; // Assume first product matches slug
  }catch(error){ return error }
}

// Function to fetch product categories
export const getCategories = async () => {
  try {
        const consumerKey = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY;
          const consumerSecret = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET;
          const authHeader = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

          const res = await fetch(`${process.env.NEXT_PUBLIC_WOO_STORE_URL}/categories`, {
            headers: {
              Authorization: authHeader,
            },
          });
          
        const data = await res.json();
        return data;
      } catch (error) {
        return error;
     }
};

//function to fetch related products
export const getRelated = async (relatedIds) => {
	try {
        const consumerKey = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY;
          const consumerSecret = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET;
          const authHeader = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

          const res = await fetch(`${process.env.NEXT_PUBLIC_WOO_STORE_URL}?include=${relatedIds.join(',')}`, {
            headers: {
              Authorization: authHeader,
            },
          });
          
        const data = await res.json();
        return data;
      } catch (error) {
        return error;
    }
}

//function to fetch products by category
export const getProductsByCategory = async (categorySlug) => {
  try {
    const consumerKey = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY;
    const consumerSecret = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET;
    const authHeader = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

    // API call to fetch products based on the category slug
    const res = await fetch(`${process.env.NEXT_PUBLIC_WOO_STORE_URL}?category=${categorySlug}`, {
      headers: {
        Authorization: authHeader,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
