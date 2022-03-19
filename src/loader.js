const menu = document.getElementById("menu");
let loaderState = false;

function handleLoader() {
  menu.classList.toggle("hidden");
}

loader.addEventListener("click", handleLoader);
