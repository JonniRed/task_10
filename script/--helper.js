import { enterBtn, sidebar } from "./variable.js";

export async function setAdminState() {
  (enterBtn.textContent = "Admin"),
    (sidebar.style.display = "block"),
    localStorage.setItem("user", "admin");
}

export async function removeAdminState() {
  (enterBtn.textContent = "Profile"),
    (sidebar.style.display = "none"),
    localStorage.removeItem("user");
}

// sidebar.addEventListener("click", (e) => {
//   // const btnList = sidebar.querySelectorAll(".sidebar-li");
//   const cardId = Number(localStorage.getItem("id"));

//   const btn = e.target.closest(".sidebar-li");

//   btn.classList.contains("edit") && sessionStorage.setItem("state", "edit");
//   if (btn.classList.contains("delete")) {
//     try {
//       fetch(`https://fakestoreapi.com/products/${cardId}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((json) => {
//           alert("Product removed");
//           localStorage.removeItem("id");
//         });
//     } catch (e) {
//       alert("Ooops...!");
//     }
//   }
// });
