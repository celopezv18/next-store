// src/components/Header.js
import Link from 'next/link';
import CartPreview from './CartPreview';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        My Store
      </Link>
      <nav className="flex space-x-4">
        <Link href="/products" className="hover:text-gray-300 transition-colors">
          Products
        </Link>
      </nav>
      <CartPreview />
    </header>
  );
}
