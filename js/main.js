// import data from api.js (dummyJSON)

// import { fetchProducts } from "./api.js";
// const products = await fetchProducts();
//console.log(JSON.stringify(products, null, 2));

// import data from api.js (data.json)

import { fetchProducts } from "./api.js";

import {
  showProducts,
  filteredProdcuts,
  totalPages,
  pagination,
  // pageNumbers,
} from "./products.js";

// console.log("main.js is working");
const products = await fetchProducts();
// console.log("products:", products);


let searchValue = "";
let categorySelected = "all";
let currentPage = 1;
const productInPage = 8;

const htmlCards = document.querySelector("#products-div");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
// const numberPage = document.querySelector("#number");
const searchInput = document.querySelector("#searchInput");
const categoryBtn = document.querySelector("#categoryBtn");
const categoryFilter = document.querySelector("#categoryFilter");
const categoryList = document.querySelector("#categoryList");
const allCategories = document.querySelector("#allCategories");
const pageNumber = document.querySelector("#pageNumber");

function combine() {
  const filtered = filteredProdcuts(products, searchValue, categorySelected);
  const totalPage = totalPages(filtered.length, productInPage);
  if (currentPage > totalPage) {
    currentPage = totalPage;
  }
  const productsPage = pagination(filtered, currentPage, productInPage);

  showProducts(productsPage, htmlCards);
  // pageNumbers(pageNumber, totalPage, currentPage);

  pageNumber.textContent = currentPage;
  previous.disabled = currentPage === 1;
  next.disabled = currentPage === totalPage;
}

// search

searchInput.addEventListener("input", () => {
  searchValue = searchInput.value.toLowerCase();
  currentPage = 1;
  combine();
});

// filter by category

const categories = [...new Set(products.map((product) => product.category))];

categoryList.innerHTML = categories
  .map((category) => {
    return `<button type="button" class="category-option block w-full text-left p-2 hover:bg-slate-100" data-category="${category}">${category}</button>`;
  })
  .join("");

categoryBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  categoryFilter.classList.remove("hidden");
});

categoryFilter.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  categoryFilter.classList.add("hidden");
});

categoryList.addEventListener("click", (event) => {
  if (event.target.classList.contains("category-option")) {
    categorySelected = event.target.dataset.category;
    currentPage = 1;
    combine();
    categoryFilter.classList.add("hidden");
  }
});

allCategories.addEventListener("click", () => {
  categorySelected = "all";
  currentPage = 1;
  combine();
  categoryFilter.classList.add("hidden");
});

previous.addEventListener("click", () => {
  currentPage--;
  combine();
});

next.addEventListener("click", () => {
  currentPage++;
  combine();
});
combine();


