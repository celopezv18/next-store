# next-store
Simple little store created in Next js and Woocommerce, once you download the project just open your terminal and run 'npm install',
once this is done, you can start the server by running 'npm run dev'.

If you're using your own wordpress installation, go to woocommerce -> settings -> advanced -> rest api there you can create your new api keys to connect the Next project to woocommerce, you should select the user you're creating the keys for and assign the permissions you'd want them to have. In order to enter your keys in the project, you should go to the root of the project and open the file .env.local and replace the value of the variable 'NEXT_PUBLIC_WOO_CONSUMER_KEY' for your public key, 'NEXT_PUBLIC_WOO_CONSUMER_SECRET' for your private key and 'NEXT_PUBLIC_WOO_STORE_URL' for the url of your woocommerc installation, the only part you shouldn't modify it's since '/wp-json/wc/v2/products'
