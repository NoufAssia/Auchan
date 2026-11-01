// import data from api.js (dummyJSON)

// import { fetchProducts } from "./api.js";
// const products = await fetchProducts();
//console.log(JSON.stringify(products, null, 2));

// import data from api.js (data.json)

import { fetchProducts } from "./api.js";

// console.log("main.js is working");
const products = await fetchProducts();
// console.log("products:", products);
// console.log(products);
const htmlCards = document.querySelector("#products-div");
function showProducts(wantedProducts) {
  const productsCards = wantedProducts.map((product) => {
    return `<article class=" product-article  border rounded-xl shadow-sm border-slate-200 p-4 bg-white ">
  <img src="${product.image}" alt="produit iamge" loading="lazy" class="w-full h-48 object-contain">
  <div class=" product-infos ">
  <h2 class="font-bold text-lg">${product.title}</h2>
  <p class="text-sm text-slate-500">${product.description}</p>
  </div>
  <div class="product-prbtn flex justify-between items-center mt-4 gap-3">
  <p class="font-bold">${product.price} DH</p>
  <button type="button" class="rounded-lg bg-red-600 text-white px-4 py-2">+</button>
  </div>
  </article>`;
  });
  htmlCards.innerHTML = productsCards.join("");
}
showProducts(products);
// .map() return an array of html strings  while innerHTML needs an html string so .join("") combines the array elements into one string

// // list and grid view
// import { listGridView } from "./ui.js";
// listGridView();

//    search

const searchInput = document.querySelector("#searchInput");

function searchForProducts() {
  const searchValue = searchInput.value.toLowerCase();
  const searchProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue);
  });
  showProducts(searchProducts);
}
searchInput.addEventListener("input", searchForProducts);

