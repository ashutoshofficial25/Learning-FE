// variables

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
  loginForm.classList.add("d-none");
  signupForm.classList.remove("d-none");
  signupForm.classList.add("d-block");
}
function showLogin() {
  loginForm.classList.remove("d-none");
  loginForm.classList.add("d-block");
  signupForm.classList.add("d-none");
}
function signupFn() {
  if (signupUsername.value == "") {
    updateAuthErrMsg("Username should not be empty!");
    return;
  } else if (signupPassword.value == "") {
    updateAuthErrMsg("Password filed should not be empty!");
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
    })
      .then((response) => response.json())
      .then((data) => updateAuthSuccessMsg(data.message))
      .catch((error) => console.log(error));
  }
}
function loginFn() {
  if (loginUsername.value == "") {
    updateAuthErrMsg("Username should not be empty!");
    return;
  } else if (loginPassword.value == "") {
    updateAuthErrMsg("Password filed should not be empty!");
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
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("username", data?.username),
            localStorage.setItem("id", data.id),
            localStorage.setItem("email", data?.email);
          localStorage.setItem("token", data?.accessToken);
        } else if (data.message) {
          updateAuthErrMsg(data.message);
          setTimeout(() => {
            updateAuthErrMsg("");
          }, 1500);
        }
      });
  }
}

function updateAuthErrMsg(msg) {
  authErrorMsg.innerText = msg;
}
function updateAuthSuccessMsg(msg) {
  authSuccessMsg.innerText = msg;
}

function getElement(id) {
  return document.getElementById(id);
}

if (localStorage.getItem("username")) {
  window.location.href = "index.html";
}
