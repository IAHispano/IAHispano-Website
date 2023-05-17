//This code is so that when making the screen smaller the manu snack appears and when clicking on the menu the menu is displayed
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = mobileMenu.querySelector(".close-button");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  closeButton.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

