import {
  btnSaveItem,
  selectCategory,
  optionlist,
  cardName,
  imgWrapper,
  title,
  fullPrice,
  idInput,
  description,
} from "./variable.js";
// import { getCategory } from "./addItem.js";

export function editItem(id) {
  const breadCrumb = document.querySelector(".edit-card");
  breadCrumb.textContent = "Edit card";
  cardName.textContent = "Edit data";
  const img = document.createElement("img");

  // const id = Number(localStorage.getItem("id"));
  try {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        (img.src = json.image), imgWrapper.append(img);
        title.value = json.title;
        fullPrice.value = json.price;
        optionlist[0].textContent = json.category;
        idInput.innerText = json.id;
        description.value = json.description;
        btnSaveItem.innerText = "Save changes";
      });
  } catch (e) {
    alert("Cannot upload product");
  }

  try {
    btnSaveItem.addEventListener("click", (e) => {
      window.location.href = "catalog.html";
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: title.value,
          price: fullPrice.value,
          description: description.value,
          image: img.src,
          category: optionlist[0].value,
        }),
      });
      alert("Data is update");
      localStorage.removeItem("id");
    });
  } catch (e) {
    alert("Ooopsooorry...");
  }
}

export function deleteItem(id) {
  try {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    alert("Product removed");
    localStorage.removeItem("id");
  } catch (e) {
    alert("Ooops... not deleted...!");
  }
}
