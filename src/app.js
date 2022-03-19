const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
// const activeImage = document.getElementById("imageSet");
const imagesArray = document.querySelectorAll(".slide-image");

let currentSlide = 0;
let count = 0;

function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
}

async function goToSlide(slideNumber) {
  if (count == 4) {
    count = 0;
    imagesArray[3].classList.remove("active");
  }
  currentSlide++;

  // Adds class to current index [count]
  imagesArray[count].classList.add("active");

  // Checks the and removes the previous element's class
  if (count > 0) {
    imagesArray[count - 1].classList.remove("active");
  }

  slidesContainer.style.transform = "translateX(-" + 100 * slideNumber + "%)";
  if (currentSlide == 4) {
    currentSlide = 0;
  }

  count++;
  // delay(1000).then(() => activeImage.classList.toggle('active'));
  // console.log(currentSlide);
}

setInterval(() => goToSlide(currentSlide), 4000);
init();
