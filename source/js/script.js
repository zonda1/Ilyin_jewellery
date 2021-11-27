let iconBurger = document.querySelector('.menu__burger');
let nav = document.querySelector('.nav');
let mainPage = document.querySelector('.page-header');
let header = document.querySelector('.menu__upper-row');

header.classList.remove('no-js');
mainPage.classList.remove('no-js');
nav.classList.remove('no-js');

iconBurger.addEventListener('click', function () {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  mainPage.classList.toggle('active');
});
