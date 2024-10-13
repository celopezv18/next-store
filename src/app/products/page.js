// (Server Component) SSR
import ProductCard from '../components/ProductCard';  //import product card
import { getProducts } from '../../../utils/wooCommerceApi';  //import API handler

export default async function ProductsPage() {
  // Fetch products from the server side
  const products = await getProducts();

  // If there are no products, display a message
  if (!products.length) {
    return <p className="text-center">There are no products to show.</p>;
  }

  // Render the products
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