const body = document.body;
const images = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left-arrow");
const rightBtn = document.getElementById("right-arrow");

let imageInd = 0;

rightBtn.addEventListener("click", nextImg);

leftBtn.addEventListener("click", prevImg);

function nextImg() {
  imageInd++;

  if (imageInd > images.length - 1) {
    imageInd = 0;
  }

  setBackgroundImage();
  setActiveImg();
}

setBackgroundImage();

function prevImg() {
  imageInd--;

  if (imageInd < 0) {
    imageInd = images.length - 1;
  }

  setBackgroundImage();
  setActiveImg();
}

function setActiveImg() {
  images.forEach((image) => image.classList.remove("active"));

  images[imageInd].classList.add("active");
}

function setBackgroundImage() {
  body.style.backgroundImage = images[imageInd].style.backgroundImage;
  console.log(images[imageInd].style.backgroundImage);
}
