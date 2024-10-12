# 🛍️ Simple Next.js WooCommerce Store

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![WooCommerce](https://img.shields.io/badge/WooCommerce-96588A?style=for-the-badge&logo=woocommerce&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

A simple and elegant e-commerce store built with Next.js and WooCommerce integration.

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## 🔧 Configuration

If you're using your own WordPress installation, follow these steps to set up the WooCommerce API:

1. Go to WooCommerce -> Settings -> Advanced -> REST API
2. Create new API keys
3. Select the user and assign appropriate permissions

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```
NEXT_PUBLIC_WOO_CONSUMER_KEY=your_public_key
NEXT_PUBLIC_WOO_CONSUMER_SECRET=your_private_key
NEXT_PUBLIC_WOO_STORE_URL=https://your-store-url.com/wp-json/wc/v2/products
```

Replace the values with your own API keys and store URL. Make sure to keep the `/wp-json/wc/v2/products` part of the URL unchanged.

## 🌟 Features

- Seamless integration with WooCommerce
- Fast and responsive user interface
- Easy customization and extensibility

## 📚 Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [WooCommerce REST API Documentation](https://woocommerce.github.io/woocommerce-rest-api-docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

---

Happy coding! 🎉
