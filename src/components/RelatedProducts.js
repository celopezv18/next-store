import { getRelated } from '../../utils/wooCommerceApi';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const RelatedProducts = ({ relatedIds }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => { // fetch the related products from the given related ids
      if (relatedIds.length > 0) {
        let data = await getRelated(relatedIds) //call the Api for related products
		setRelatedProducts( data );
      } else {
        setRelatedProducts([]); // Fallback for no relatedIds
      }
      setLoading(false); // deactivate loader
    };

    fetchRelatedProducts();
  }, [relatedIds]);

  if (loading) return <p style={{ marginTop: '1rem' }}>Loading related products...</p>;

  // Safeguard: check if relatedProducts is an array before mapping
  if (!Array.isArray(relatedProducts) || relatedProducts.length === 0) {
    return <p>No related products available.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Link href={`/products/${product.slug}`}>
              <img src={product.images[0].src} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h3 className="font-bold">{product.name}</h3>
              <p>${Number(product.price)?.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
