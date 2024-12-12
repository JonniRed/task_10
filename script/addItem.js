import {
  idInput,
  arr,
  selectCategory,
  title,
  fullPrice,
  description,
  btnSaveItem,
} from "./variable.js";

export function setNewId() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return (idInput.innerText = `${json.length + 1}`);
    });
}

export function getCategory(select) {
  return fetch("https://fakestoreapi.com/products")
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

function setNewProduct() {
  const product = {
    id: idInput.textContent,
    title: title.value,
    price: fullPrice.value,
    description: description.value,
    category: selectCategory.value,
  };
  return product;
}

export function creareProduct() {
  setNewId();

  btnSaveItem.addEventListener("click", (e) => {
    e.preventDefault();

    const newPr = setNewProduct();

    try {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newPr),
      });
      alert("Data sent to server successfully!");
      window.location.href = "../index.html";
    } catch (error) {
      alert("Sorry...!");
    }
  });
  return;
}
