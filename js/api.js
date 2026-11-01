// fetch data from dummyJson

// export async function fetchProducts() {
//   const serverResponse = await fetch("https://dummyjson.com/products?limit=0");

//   const data = await serverResponse.json();
//   const products = data.products;

//   const productsArray = products.map((product) => {
//     return {
//       id: product.id,
//       title: product.title,
//       description: product.description,
//       category: product.category,
//       price: product.price,
//       image: product.thumbnail,
//     };
//   });
//   return productsArray;
// }

// fetch data from data.json

export async function fetchProducts() {
  const dataResponse = await fetch("../data/data.json");
  const products = await dataResponse.json();
  return products;
}
