import {
  sidebar,
  category,
  title,
  fullPrice,
  description,
} from "./variable.js";
import { setNewProduct } from "./addItem.js";

export function sidebarClick() {
  return {
    add() {
      setNewProduct();
    },
    edit() {
      fetch(`https://fakestoreapi.com/products/${localStorage.getItem(id)}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          (category.value = json.category),
            (title.value = json.title),
            (fullPrice.value = json.price),
            (description.value = json.description);
        });
    },
    delete() {
      fetch(`https://fakestoreapi.com/products/${localStorage.getItem(id)}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(alert("product removed"));
    },
  };
}
