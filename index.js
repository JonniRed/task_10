import {
  productList,
  selectCategory,
  enterBtn,
  sidebar,
} from "./script/variable.js";
import { setNewId, getCategory, setNewProduct } from "./script/addItem.js";
import { createCard, setCatalogItem } from "./script/setItemList.js";
import { setItemProperty } from "./script/setItemProperty.js";
import { sidebarClick } from "./script/sidebarScript.js";

if (document.querySelector(".new-product")) {
  setNewId();
  getCategory(selectCategory);

  const btnCreateItem = document.querySelector(".add-item-btn");
  btnCreateItem.addEventListener("click", (e) => {
    e.preventDefault();

    const newPr = setNewProduct();
    console.log(newPr);
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
}

if (document.querySelector(".main-catalog")) {
  const categoryList = document.querySelector("#category-select");

  getCategory(categoryList);

  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.forEach((item) => {
          createCard(item.id, item.image, item.title, item.price);
        });
      });

    categoryList.addEventListener("change", () => {
      setCatalogItem(categoryList.value);
    });

    productList.addEventListener("click", (e) => {
      // e.preventDefault();
      const currentTarget = e.target;
      let cardId =
        currentTarget.closest(".seller-item")?.querySelector(".id-dis")["id"] ||
        false;
      localStorage.removeItem("id");
      localStorage.setItem("id", cardId);

      window.location.href = "./card-page.html";
    });
  } catch (e) {
    alert("Item cannot be upload");
  }
}

if (document.querySelector("#cardPage")) {
  let cardId = Number(localStorage.getItem("id"));
  console.log(cardId);

  try {
    fetch(`https://fakestoreapi.com/products/${cardId}`)
      .then((res) => res.json())
      .then((json) => {
        setItemProperty(json);
      });
  } catch (e) {
    alert("Oops...");
  }
}

enterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (enterBtn.hasAttribute("admin")) {
    enterBtn.removeAttribute("admin"),
      (enterBtn.textContent = "Profile"),
      (sidebar.style.display = "none"),
      localStorage.removeItem("user");
  } else {
    enterBtn.setAttribute("admin", ""),
      (enterBtn.textContent = "Admin"),
      (sidebar.style.display = "block"),
      localStorage.setItem("user", "admin");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("user")) {
    enterBtn.setAttribute("admin", ""),
      (enterBtn.textContent = "Admin"),
      (sidebar.style.display = "block");
  } else {
    sidebar.style.display = "none";
  }
});

sidebar.addEventListener("click", (e) => {
  const btn = e.target.closest(".sidebar-li");
  const btnFunc = sidebarClick();

  btn.classList.contains("add") && btnFunc.add();
  btn.classList.contains("edit") && btnFunc.edit();
  btn.classList.contains("delete") && btnFunc.delete();
});

if (document.querySelector("#card-item")) {
  const arrayBtn = sidebar.querySelectorAll(".sidebar-li > a");
  for (const item of arrayBtn) {
    item.style.pointerEvents = "all";
    item.removeAttribute("disabled");
  }
}
