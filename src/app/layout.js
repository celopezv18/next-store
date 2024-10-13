import '../styles/globals.css'; // Import Tailwind CSS here
import CartPreview from './components/CartPreview'; // Small cart in the nav bar
import { CartProvider } from './components/CartContext';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Navbar with Cart Preview */}
        <CartProvider>
          <header className="p-4 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold">My Store</h1>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex space-x-4">
                <Link href="/products" className="hover:text-gray-600 transition-colors">
                  Products
                </Link>
                <Link href="/categories" className="hover:text-gray-600 transition-colors">
                  Categories
                </Link>
                <Link href="/cart" className="hover:text-gray-600 transition-colors">
                  Cart
                </Link>
                <CartPreview /> {/* Shows number of items and total price */}
              </nav>

              {/* Mobile Menu Button */}
              <label htmlFor="menu-toggle" className="block md:hidden cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </label>

              {/* Mobile Menu Toggle */}
              <input
                type="checkbox"
                id="menu-toggle"
                className="hidden peer"
              />
            </div>

            {/* Mobile Menu */}
            <nav className="flex flex-col items-center bg-white shadow-md p-4 space-y-2 mt-2 md:hidden peer-checked:block hidden">
              <Link href="/products" className="block py-2 hover:text-gray-600 transition-colors">
                Products
              </Link>
              <Link href="/categories" className="block py-2 hover:text-gray-600 transition-colors">
                Categories
              </Link>
              <Link href="/cart" className="block py-2 hover:text-gray-600 transition-colors">
                Cart
              </Link>
            </nav>
          </header>

          {/* Main content */}
          <div className="flex flex-col min-h-screen">
            <main className="container mx-auto py-8 flex-grow">
              {children} {/* Page-specific content is inserted here */}
            </main>
          </div>

          {/* Footer */}
          <footer className="p-4 bg-gray-100 text-center">
            © 2024 My Online Store
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
