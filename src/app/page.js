// src/app/page.js
import '../styles/globals.css'; // Import global styles
import { CartProvider } from '../components/CartContext'; // Import the CartProvider that handles the state management
// Home page content
export default function HomePage() {
  return (
    <CartProvider>
		<div className="text-center">
		  <h1 className="text-4xl font-bold mb-4">Welcome to the Store</h1>
		  <p className="text-lg">Browse our amazing products!</p>
		</div>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
	</CartProvider>
  );
}
