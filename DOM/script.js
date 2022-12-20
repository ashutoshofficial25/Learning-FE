// console.log(document);
// document.title = "something";
// document.body = "hello";
// console.log(document.all);

// const body = document.body;

// body.append("hello");

// const div = document.createElement("h1");
// div.append("hello div"); method
// div.innerHTML = "javascript"; property
// div.textContent = "text-content";
// body.appendChild(div);

// const div = document.querySelector("div");
// console.log(div.innerText); //only visible part
// console.log(div.textContent); // all text hidded also

// const body = document.body;

// const div = document.createElement("div");

// const strong = document.createElement("strong");

// strong.innerText = "Mytext";

// div.append(strong);

// div.innerHTML = "<strong>My fav is js</strong>";

// body.append(div);

const spanOne = document.getElementById("one");
const spanTwo = document.getElementById("two");

const div = document.querySelector("div");

// spanTwo.remove();
// spanOne.style.display = "none";
// div.append(spanTwo);
console.log(spanOne.getAttribute("id"));
console.log(spanOne.setAttribute("class", "span-one"));
// spanOne.id = "span-one";
// spanOne.className = "changed-className";
// spanOne.removeAttribute("class");

// spanTwo.classList.add("add-class");
// spanTwo.classList.remove("add-class");

//if class is there it will remove if not then it will add
// spanOne.classList.toggle("add-class");

spanOne.style.color = "tomato";

document.body.style.backgroundColor = "red";

const arr = ["blue", "red", "green", "yellow"];

setTimeout(() => {
  document.body.style.backgroundColor = "blue";
}, 5000);
