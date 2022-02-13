let formBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');
let searchBtn = document.querySelector('#search-btn');
let menu = document.querySelector('#menu-bar');
let loginForm = document.querySelector('.login-form-container');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () => {
  searchBtn.classList.remove('fa-times')
  searchBar.classList.remove('active')
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
  loginForm.classList.remove('active')
}

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})

let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
}); 


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
  },
});
