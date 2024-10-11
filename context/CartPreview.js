// components/CartPreview.js

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

const CartPreview = () => {
  // Access cart context values
  const { totalItems, totalPrice } = useContext(CartContext);

  return (
    <div>
      {/* Display a preview of the cart */}
      <Link href="/cart">
        <a>
          Cart: {totalItems} items (${totalPrice})
        </a>
      </Link>
    </div>
  );
};

export default CartPreview;
