const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const showcase = document.querySelector(".showcase");
const isMenuVisible = false;

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

window.onload = () => {
  if (!isMenuVisible) {
    menuToggle.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    console.log("page is fully loaded");
  }
};
