let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
  searchForm.classList.remove('active');
  cart.classList.toggle('active');
  loginForm.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.toggle('active');
}