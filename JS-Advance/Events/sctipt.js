const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//event bubbling
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent clicked");
  },
  false
);
parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
    e.stopPropagation();
  },
  false
);
child.addEventListener(
  "click",
  (e) => {
    console.log("Child clicked");
  },
  false
);

//Evennt capturing
// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Grandparent clicked");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent clicked");
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("Child clicked");
//   },
//   true
// );
