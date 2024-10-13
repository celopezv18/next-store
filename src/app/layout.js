// src/app/layout.js
import '../styles/globals.css'; // Import Tailwind CSS here
import CartPreview from './components/CartPreview'; // Small cart in the nav bar
import { CartProvider } from './components/CartContext'
import Link from 'next/link'

// This is the root layout for all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Navbar with Cart Preview */}
        <CartProvider>
			<header className="p-4 bg-white shadow-md">
			  <div className="container mx-auto flex justify-between">
				<Link href="/">
					<h1 className="text-2xl font-bold">My Store</h1>
				</Link>
				<Link href="/products" className="hover:text-gray-300 transition-colors">
				  Products
				</Link>
				<Link href="/categories" className="hover:text-gray-300 transition-colors">
				  Categories
				</Link>
				<Link href="/cart" className="hover:text-gray-300 transition-colors">
				  Cart
				</Link>
				<CartPreview /> {/* Shows number of items and total price */}
			  </div>
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
