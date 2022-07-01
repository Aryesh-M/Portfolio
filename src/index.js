const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

function toggleMenu() {
  let logo = document.getElementById("logo");
  let aboutBtn = document.getElementById("about-btn");
  let menuImage = document.getElementById("menu");
  let imagePath = menuImage.src;
  if (logo.style.display != "none") {
    logo.style.display = "none";
    aboutBtn.style.display = "none";
    menuImage.src = imagePath.replace("menu", "error");
  } else {
    logo.style.display = "block";
    aboutBtn.style.display = "block";
    menuImage.src = imagePath.replace("error", "menu");
  }
}
