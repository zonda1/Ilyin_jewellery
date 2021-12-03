import './swiper.js';

let iconBurger = document.querySelector('.menu__burger');
let nav = document.querySelector('.nav');
let mainPage = document.querySelector('.page-header');
let header = document.querySelector('.menu__upper-row');
let tumbler = document.querySelectorAll('.tumbler');
// let links = document.querySelectorAll('.questions__question');

header.classList.remove('no-js');
mainPage.classList.remove('no-js');
nav.classList.remove('no-js');

iconBurger.addEventListener('click', function () {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  mainPage.classList.toggle('active');
});


// links.forEach((element) => {
//   element.addEventListener('click', () => {
//     let parent = element.parentNode;
//     if (parent.classList.contains('active')) {
//       parent.classList.remove('active');
//     } else {
//       links.forEach((child) => {
//         child.classList.remove('active');
//         parent.classList.add('active');
//       })
//     }
//   })
// });
tumbler.forEach((element) => {
  element.addEventListener('click', () => {
    let parent = element.parentNode;
    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
    } else {
      document.querySelectorAll('.questions__question').forEach((child) => {
        child.classList.remove('active');
        parent.classList.add('active');
      })
    }
  })
});
