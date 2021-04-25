const menuIcon = document.querySelector(".menu-icon");
const menuButton = document.querySelector("#hamburger-button");
const mobileNav = document.querySelector("#mobile-nav");

menuButton.addEventListener("click", () => {
  if (mobileNav.classList.contains("d-none")) {
    mobileNav.className = mobileNav.className.replace("d-none", "d-block");
    menuIcon.src = "./images/icon-close.svg";
  } else {
    mobileNav.className = mobileNav.className.replace("d-block", "d-none");
    menuIcon.src = "./images/icon-hamburger.svg"
  }
});
