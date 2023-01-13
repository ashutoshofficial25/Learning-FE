const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";
const categoryList = document.getElementById("categoryList");

console.log("sddsddsf");

function loadCategories() {
  fetch(`${BASE_URL}/categories`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
loadCategories();

function renderCategory(categoties) {
  let categoryListHtml = `<div class='category-item d-flex justify-content-center' >
   <div>`;
}
