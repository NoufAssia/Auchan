<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 96d18126214acde42d6c417b608da42f1181919e
// // fetsh the header in html pages

// const header = document.querySelector("body");

// fetch("../components/header.html")
//   .then((Response) => Response.text())
//   .then((headerContent) => {
//     header.insertAdjacentHTML("afterbegin", headerContent);
//   });
<<<<<<< HEAD

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const productsDiv = document.querySelector("#products-div");

export function listGridView() {
  grid.addEventListener("click", () => {
    productsDiv.classList.remove("flex", "flex-col", "gap-3", "px-4");
    productsDiv.classList.add(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-4",
      "gap-4",
      "py-5",
      "px-4",
    );
    const articles = document.querySelectorAll(".product-article");
    articles.forEach((card) => {
      card.classList.remove("flex", "flex-row", "items-center", "gap-4");
      card.classList.add("flex", "flex-col", "gap-3");
    });
  });
  list.addEventListener("click", () => {
    productsDiv.classList.remove(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-4",
      "gap-4",
      "py-5",
      "px-4",
    );
    productsDiv.classList.add("flex", "flex-col", "px-4", "gap-3");
    const article = document.querySelectorAll(".product-article");
    article.forEach((card) => {
      card.classList.remove("flex", "flex-col", "gap-3");
      card.classList.add("flex", "flex-row", "items-center", "gap-4");
    });
  });
}
>>>>>>> Stashed changes
=======
>>>>>>> 96d18126214acde42d6c417b608da42f1181919e
