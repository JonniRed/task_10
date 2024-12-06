import { id, arr, optionlist, selectCategory } from "./script/variable.js";
import { setNewId, getCategory, setNewProduct } from "./script/addItem.js";

if (document.querySelector(".new-product")) {
  setNewId();
  getCategory(selectCategory);

  const btnCreateItem = document.querySelector(".add-item-btn");
  btnCreateItem.addEventListener("click", (e) => {
    e.preventDefault();
    const newPr = setNewProduct();
    //console.log(newPr);
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
