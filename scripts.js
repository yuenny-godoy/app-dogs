const menuSidebar = document.querySelector("#menu-sidebar");
const sidebar = document.querySelector("#sidebar");
menuSidebar.addEventListener("click", (e) => {
  sidebar.classList.toggle("menu-expanded");
  sidebar.classList.toggle("menu-collapsed");
  document.querySelector("body").classList.toggle("body-expanded");
});