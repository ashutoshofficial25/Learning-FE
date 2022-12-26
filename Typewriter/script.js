const textElement = document.getElementById("text");

const speedElement = document.getElementById("speed");

let index = 1;
let time = 500 / speedElement.value;

const someText = "I m doing javascript";

//change or input
speedElement.addEventListener("change", (e) => {
  time = 500 / e.target.value;
});

function automaticText() {
  textElement.innerText = someText.slice(0, index);

  index++;
  if (index > someText.length - 1) {
    index = 1;
  }

  setTimeout(automaticText, time);
}
automaticText();
