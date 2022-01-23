let closer = document.querySelector('#closer');
let navbar = document.querySelector('.navbar');
let cart   = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');

closer.onclick = () => {
  closer.style.display = 'none';
  navbar.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  closer.style.display = 'block';
  navbar.classList.toggle('active');
}

document.querySelector('#cart-btn').onclick = () => {
  closer.style.display = 'block';
  cart.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
  closer.style.display = 'block';
  loginForm.classList.toggle('active');
}

let searchForm = document.querySelector('.header .search-form');

window.onscroll = () => {
  searchForm.classList.toggle('active');  
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
  console.log(`index: ${index}`);
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
  console.log(`index: ${index}`);
}