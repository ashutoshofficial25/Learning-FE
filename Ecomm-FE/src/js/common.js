// const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logOutfn);

function logOutfn() {
  localStorage.removeItem("username");
  localStorage.removeItem("id");
  localStorage.removeItem("email");

  window.location.href = "./login.html";
}
