const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";
const categoryList = document.getElementById("categoryList");

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logOutfn);

function logOutfn() {
  localStorage.removeItem("username");
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  localStorage.removeItem("accessToken");

  window.location.href = "./login.html";
}

console.log("sddsddsf");

function loadCategories() {
  fetch(`${BASE_URL}/categories`)
    .then((response) => response.json())
    .then((data) => {
      renderCategory(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
loadCategories();

function renderCategory(categories = []) {
  let categoryListHtml =
    `<div class='category-item rounded-3 d-flex justify-content-center align-items-center'>` +
    `<a href='/productList.html' class='text-decoration-none text-white' > All Products</a>` +
    `</div>`;

  for (let i = 0; i < categories.length; i++) {
    categoryListHtml +=
      `<div class='category-item rounded-3 d-flex justify-content-center align-items-center'>` +
      `<a class='text-decoration-none text-white' href="productList.html?categoryId=` +
      categories[i].id +
      `">` +
      categories[i].name +
      `</a>` +
      `</div>`;
  }

  categoryList.innerHTML = categoryListHtml;
}
