import { fetchProduct } from '../../../../utils/wooCommerceApi'; // api to make requests
import axios from 'axios';
import ProductDetail from '../../../components/ProductDetail'; // component to show the detail page

export default async function ProductDetailPage({ params }) {
  const product = await fetchProduct(params.slug);
  return <ProductDetail product={product} />;
}
