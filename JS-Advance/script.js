const input = document.getElementById("input");
const defaultText = document.getElementById("default-text");
const debounceText = document.getElementById("debounceText");
const throttleText = document.getElementById("throttleText");

console.log(input.value);

input.addEventListener("change", (e) => {
  console.log("running");
  defaultText.innerText = e.target.value;
});
