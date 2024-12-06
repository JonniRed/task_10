import { id, arr } from "./variable.js";

export async function setNewId() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      const inputId = document.createElement("p");
      (inputId.id = "id-p"), (inputId.innerText = `${json.length + 1}`);
      id.append(inputId);
    });
}

export function getCategory(select) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((element) => {
        arr.indexOf(element.category) < 0 && arr.push(element.category);
      });
      arr.forEach((item) => {
        const opt = document.createElement("option");
        (opt.value = item), (opt.innerText = item), select.append(opt);
      });
    });
}

function Product(
  id,
  title,
  discountPrice,
  fullPrice,
  description,
  shortDesc,
  category
) {
  this.id = id;
  this.title = title;
  this.discountPrice = discountPrice;
  this.fullPrice = fullPrice;
  this.description = description;
  (this.shortDesc = shortDesc), (this.category = category);
}
export function setNewProduct() {
  const countId = document.querySelector("#id-p");
  const category = document.querySelector("#category");
  const title = document.querySelector("#title-card");
  const discountPrice = document.querySelector("#discount");
  const fullPrice = document.querySelector("#full-price");
  const shortDesc = document.querySelector("#short-desc");
  const description = document.querySelector("#description");
  const newProduct = new Product(
    countId.textContent,
    title.value,
    discountPrice.value,
    fullPrice.value,
    description.value,
    shortDesc.value,
    category.value
  );
  return newProduct;
}
