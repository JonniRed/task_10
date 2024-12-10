import { getCategory } from "./addItem.js";
import { productList } from "./variable.js";

export function createCard(id, image, title, fullPrice) {
  const card = document.createElement("div");
  card.classList.add("seller-item");
  card.innerHTML = `
  <div class="seller-img-wrapper">
              <a href="./card-page.html" title="Перейти на страницу товара">
              <input type="text" id="${id}" disabled class="id-dis">
                <img src=${image}
                alt="${title}" class="seller-item-img">
              </a>
              <button class="add-btn">Add to Cart</button>
            </div>
            <div class="seller-desc">
              <h3 class="h3-seller">${title}</h3>
              <span class="seller-price">$${fullPrice}</span>
            </div>
  `;
  productList.append(card);
}

export function setCatalogItem(option) {
  productList.innerHTML = "";

  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.filter((element) => {
          (element.category === option || option === "") &&
            createCard(element.id, element.image, element.title, element.price);
        });
      });
  } catch (e) {
    alert("Sorry...!");
  }
}
