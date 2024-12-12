import {
  productList,
  selectCategory,
  createProductBtn,
  editProductBtn,
  deleteProductBtn,
  enterBtn,
} from "./script/variable.js";
import { creareProduct, getCategory } from "./script/addItem.js";
import { createCard, setCatalogItem } from "./script/setItemList.js";
import { editItem, deleteItem } from "./script/editItem.js";
import { setItemProperty } from "./script/setItemProperty.js";
import { setAdminState, removeAdminState } from "./script/--helper.js";

enterBtn.onclick = (e) => {
  e.preventDefault();
  localStorage.getItem("user") ? removeAdminState() : setAdminState();
};

document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("user") ? setAdminState() : removeAdminState();
  selectCategory ? getCategory(selectCategory) : false;
});

if (
  window.location.toString().indexOf("pages/card-form.html") > 0 &&
  !localStorage.getItem("id")
) {
  creareProduct();
} else if (
  window.location.toString().indexOf("pages/card-form.html") > 0 &&
  localStorage.getItem("id")
) {
  const id = Number(localStorage.getItem("id"));

  editProductBtn.addEventListener("click", editItem(id));
}

if (window.location.toString().indexOf("pages/catalog.html") > 0) {
  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.forEach((item) => {
          createCard(item.id, item.image, item.title, item.price);
        });
      });
  } catch (e) {
    alert("Upload fail");
  }

  try {
    selectCategory.addEventListener("change", () => {
      setCatalogItem(selectCategory.value);
    });
  } catch (e) {
    alert("Category upload fail");
  }

  try {
    productList.addEventListener("click", (e) => {
      // e.preventDefault();
      const currentTarget = e.target;
      let cardId =
        currentTarget.closest(".seller-item")?.querySelector(".id-dis")["id"] ||
        false;

      localStorage.setItem("id", cardId);

      window.location.href = "./card-page.html";
    });
  } catch (e) {
    alert("Item cannot be upload");
  }
}

if (window.location.toString().indexOf("pages/card-page.html") > 0) {
  createProductBtn.setAttribute("disabled", ""),
    editProductBtn.removeAttribute("disabled"),
    deleteProductBtn.removeAttribute("disabled");

  let id = Number(localStorage.getItem("id"));

  try {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setItemProperty(json);
      });
  } catch (e) {
    alert("Product cannot be load...");
  }

  deleteProductBtn.addEventListener("click", () => deleteItem(id));
}
