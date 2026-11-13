// Opens the mobile menu: adds "menu--open" to <body>,
// which makes .menu--open .modal visible (see style.css)
function openMenu() {
  document.body.classList.add("menu--open");
}

// Closes the mobile menu by removing the class again
function closeMenu() {
  document.body.classList.remove("menu--open");
}
