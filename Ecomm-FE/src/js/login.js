// variables

const loginFomm = getElement("login-form");
const signupForm = getElement("signup-form");

const showLoginBtn = getElement("showLoginBtn");
const showSignupBtn = getElement("showSingupBtn");

const loginUsername = getElement("loginUsername");
const signupUsername = getElement("signupUsername");

const loginPassword = getElement("loginPassword");
const signupPassword = getElement("signupPassword");

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

function showSignup() {}
function showLogin() {}
function signupFn() {}
function loginFn() {}

function getElement(id) {
  return document.getElementById(id);
}
