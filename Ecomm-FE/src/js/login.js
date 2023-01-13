// variables
const BASE_URL = "https://relevel-ecomm-be.herokuapp.com/ecomm/api/v1";
const loginForm = getElement("login-form");
const signupForm = getElement("signup-form");

const showLoginBtn = getElement("showLoginBtn");
const showSignupBtn = getElement("showSignUpBtn");

const loginUsername = getElement("loginUserName");
const loginPassword = getElement("loginPassword");

const signupUsername = getElement("signupUserName");
const signupPassword = getElement("signupPassword");
const singupemail = getElement("singupemail");

console.log(singupemail.value);

const signupBtn = getElement("signupBtn");
const loginBtn = getElement("loginBtn");

const authErrorMsg = getElement("authErrorMsg");
const authSuccessMsg = getElement("authSuccessMsg");

// events

showSignupBtn.addEventListener("click", showSignup);
showLoginBtn.addEventListener("click", showLogin);

signupBtn.addEventListener("click", signupFn);
loginBtn.addEventListener("click", loginFn);

// function

function showSignup() {
  console.log("hellog");
  loginForm.classList.add("d-none");
  signupForm.classList.remove("d-none");
  signupForm.classList.add("d-block");
}
function showLogin() {
  console.log("hello");
  loginForm.classList.remove("d-none");
  loginForm.classList.add("d-block");
  signupForm.classList.add("d-none");
}
function signupFn() {
  console.log(singupemail);
  console.log(singupemail.value);
  console.log(signupPassword.value);
  console.log(signupUsername);

  if (signupUsername.value == "") {
    return;
  } else if (signupPassword.value == "") {
    return;
  } else {
    const data = {
      username: signupUsername.value,
      password: signupPassword.value,
      email: singupemail.value,
    };

    fetch(BASE_URL + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
  }
}
function loginFn() {
  if (loginUsername.value == "") {
    return;
  } else if (loginPassword.value == "") {
    return;
  } else {
    let data = {
      username: loginUsername.value,
      password: loginPassword.value,
    };

    console.log(data);

    fetch(BASE_URL + "/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(
        (data) => (
          localStorage.setItem("username", data?.username),
          localStorage.setItem("id", data.id),
          localStorage.setItem("email", data?.email)
        )
      );

    if (localStorage.getItem("username")) {
      window.location.href = "./index.html";
    }
  }
}

function getElement(id) {
  return document.getElementById(id);
}
