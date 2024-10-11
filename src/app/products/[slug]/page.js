import { fetchProduct } from '../../../../utils/wooCommerceApi'; 
import axios from 'axios';
import ProductDetail from '../../../components/ProductDetail';

export default async function ProductDetailPage({ params }) {
  const product = await fetchProduct(params.slug);
  return <ProductDetail product={product} />;
}
