// import data from api.js (dummyJSON)

// import { fetchProducts } from "./api.js";
// const products = await fetchProducts();
//console.log(JSON.stringify(products, null, 2));

import { fetchProducts } from "./api.js";
const products = await fetchProducts();
console.log(products);
