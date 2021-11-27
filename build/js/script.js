let iconBurger = document.querySelector('.menu__burger');
let nav = document.querySelector('.nav');
let mainPage = document.querySelector('.page-header');
let header = document.querySelector('.menu__upper-row');

iconBurger.addEventListener('click', function () {
  console.log("Yf cbvdjk yf;fkb")
  header.classList.toggle('active');
  nav.classList.toggle('active');
  mainPage.classList.toggle('active');
});
