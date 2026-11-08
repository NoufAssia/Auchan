export function showProducts(wantedProducts, div) {
  if (wantedProducts.length === 0) {
    div.innerHTML = `<p class="col-span-full text-center text-slate-500">Aucun produit trouvé.</p>`;
    return;
  }

  const productsCards = wantedProducts.map((product) => {
    return `<article class="product-article border rounded-xl shadow-sm border-slate-200 p-4 bg-white max-w-xl">
    <img src="${product.image}" alt="produit image" loading="lazy" class="w-full h-48 object-contain">
        <div class="product-infos">
        <h2 class="text-sm text-slate-500">${product.title}</h2>
        <p class="text-sm text-slate-500">${product.description}</p>
        </div>
        <div class="product-prbtn flex justify-between items-center mt-4 gap-3">
        <p class="font-bold">${product.price} DH</p>
        <button type="button" class="rounded-lg bg-red-600 text-white px-4 py-2">+</button>
        </div>
        </article>`;
  });
  div.innerHTML = productsCards.join("");
}

export function filteredProdcuts(products, searchValue, selectedCategory) {
  return products.filter((product) => {
    const searchResult = product.title.toLowerCase().includes(searchValue);
    const categoryresult =
      selectedCategory === "all" || product.category === selectedCategory;
    return searchResult && categoryresult;
  });
}

export function totalPages(totalCards, productInPage) {
  return Math.max(1, Math.ceil(totalCards / productInPage));
}

export function pagination(cards, currentPage, productInPage) {
  const start = (currentPage - 1) * productInPage;
  const end = start + productInPage;
  return cards.slice(start, end);
}

// export function pageNumbers(div, totalPage, currentPage) {
//   let buttons = "";
//   for (let pageNumber = 1; pageNumber <= totalPage; pageNumber++) {
//     let style = "bg-slate-200";
//     if (pageNumber === currentPage) {
//       style = "bg-red-600 text-white";
//     }
//     buttons += `<button type="button" class="page-btn px-4 py-2 rounded-lg ${style}" data-page-number="${pageNumber}">${pageNumber}</button>`;
//   }

//   div.innerHTML = buttons;
// }
