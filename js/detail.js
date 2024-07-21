let products = null;

fetch("../products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showDetail();
  });

function showDetail() {
  let detail = document.querySelector(".detail");
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = products.filter((value) => value.id == productId)[0];
  if (!thisProduct) {
    window.location.href = "/";
  }

  detail.querySelector(".image img").src = thisProduct.image;
  detail.querySelector(".name").innerText = thisProduct.name;
  detail.querySelector(".size").innerText = thisProduct.size;
  detail.querySelector(".description").innerText = thisProduct.description;
  detail.querySelector(".year").innerText = thisProduct.year;

  products
    .filter((value) => value.id != productId)
    .forEach((product) => {
      let newProduct = document.createElement("a");
      newProduct.href = "../html/detail.html?id=" + product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `
	 <img src=${product.image} alt="">
	 <h2>${product.name}</h2>
	 `;
    });
}
