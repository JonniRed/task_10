import {
  idInput,
  arr,
  // countId,
  category,
  title,
  fullPrice,
  description,
} from "./variable.js";

export async function setNewId() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      const inputId = document.createElement("p");
      (inputId.id = "id-p"), (inputId.innerText = `${json.length + 1}`);
      idInput.append(inputId);
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

export function setNewProduct() {
  const product = {
    title: title.value,
    price: fullPrice.value,
    description: description.value,
    category: category.value,
  };
  console.log(product);
  return product;
}
