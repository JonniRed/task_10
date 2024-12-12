import {
  sidebar,
  optionlist,
  title,
  fullPrice,
  description,
} from "./variable.js";
import { setNewProduct } from "./addItem.js";

const id = Number(localStorage.getItem("id"));

export function add() {
  setNewProduct();
  return;
}
export function editDescr() {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      (optionlist.value = json.category),
        (title.value = json.title),
        (fullPrice.value = json.price),
        (description.value = json.description);
    });
}

export function deleteCard() {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(alert("product removed"));
}
