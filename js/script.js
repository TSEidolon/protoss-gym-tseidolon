
// from "How To Create a Responsive Navbar Using HTML & CSS | Step By Step Tutorial" https://www.youtube.com/watch?v=GdrbE-s5DgQ
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen 
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}
