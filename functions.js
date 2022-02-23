console.log("Hello World");
const burrito = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  burrito.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

burrito.addEventListener("click", mobileMenu);
