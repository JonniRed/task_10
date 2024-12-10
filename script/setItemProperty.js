// import { catalog } from "./variable.js";

const itemProperty = document.querySelector("#itemProperty");
const imgWrapper = document.querySelector(".card-page-wrapper .img");
const title = document.querySelector("#title");
const price = document.querySelector("#fullPrice");
const description = document.querySelector("#description");
const smallImgList = document.querySelectorAll(".img-small");

export function setItemProperty(item) {
  itemProperty.textContent = item.title;

  const img = document.createElement("img");
  (img.src = item.image), imgWrapper.append(img);

  title.textContent = item.title;

  price.textContent = item.price;

  description.textContent = item.description;

  Array.from(smallImgList).forEach((img) => {
    !img.childNodes & (img.style.display = "none");
  });
  return;
}
