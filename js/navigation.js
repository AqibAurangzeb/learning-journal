const hamburgerMenu = document.getElementById('hamburger-menu')
const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn")

hamburgerMenu.addEventListener("click", function() {
  document.getElementById('mobile-menu').style.height = "100%"
})

mobileMenuCloseBtn.addEventListener("click", function() {
  document.getElementById('mobile-menu').style.height = "0%"
})