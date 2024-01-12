let menuButton = document.getElementById("burger");
let menu = document.querySelector(".navbar-burger");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("showing")
  })
}