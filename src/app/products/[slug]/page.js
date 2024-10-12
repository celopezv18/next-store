import { fetchProduct } from '../../../../utils/wooCommerceApi'; // api to make requests
import axios from 'axios';
import ProductDetail from '../../../components/ProductDetail'; // component to show the detail page

export default async function ProductDetailPage({ params }) { // include component that shows the detail product page
  const product = await fetchProduct(params.slug);
  return <ProductDetail product={product} />;
}
