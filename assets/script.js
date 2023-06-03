// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

const navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let buttonBurger = document.querySelector('.burger');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active'); 
// }

window.onscroll = () => {
      navbar.classList.remove('show-nav');
      buttonBurger.classList.remove('show-nav');
//     let header = document.querySelector('.header');

//     header.classList.toggle('sticky', window.scroll > 100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
    
// var menuBtn = document.querySelector(".menu-btn");

// menuBtn.addEventListener("click", function() {
//   menuBtn.classList.toggle("is--active");
//   menuBtn.classList.add("is--clicked");
//   setTimeout(function(){
//     menuBtn.classList.remove("is--clicked");
//   }, 300);
  }

function toggleMenu(){
  const navbar = document.querySelector('.navbar');
  let buttonBurger = document.querySelector('.burger');

  buttonBurger.addEventListener('click', function(){
      navbar.classList.toggle('show-nav');
      buttonBurger.classList.toggle('show-nav');
  })
}

toggleMenu();