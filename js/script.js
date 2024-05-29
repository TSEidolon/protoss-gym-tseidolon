
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


// from "Subtle, yet Beautiful Scroll Animations" https://www.youtube.com/watch?v=T33NN_pPeNI 
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=> {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show');
    }
  });
})

// Second Scroll observer 
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=> {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show1')
    } else {
      entry.target.classList.remove('show1');
    }
  });
})


const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer1.observe(el));