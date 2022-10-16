const openHamburger = document.querySelector("#trigger-hamburger");
const navLinks = document.querySelectorAll(".navbar-item");
const navMenu = document.querySelector(".navbar-menu");
const contactForm = document.querySelector("#contact-form");

openHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
  navLinks.forEach((link) => {
    link.classList.add("close-on-click");
    link.addEventListener("click", closeMenu);
  });
});
const closeMenu = () => {
  navMenu.classList.toggle("is-active");
  navLinks.forEach((link) => {
    link.classList.remove("close-on-click");
  });
};
contactForm.addEventListener('submit', ()=>{
    alert("Thanks for Reaching Out!")
})
