import './swiper.js';

let iconBurger = document.querySelector('.menu__burger');
let nav = document.querySelector('.nav');
let mainPage = document.querySelector('.page-header');
let header = document.querySelector('.menu__upper-row');
let tumbler = document.querySelectorAll('.tumbler');
let tumblerFilter = document.querySelectorAll('.filter__tumbler');
let mainContent = document.querySelector('.page');
let filterLink = document.querySelector('.catalog__wrapper > a');
let filter = document.querySelector('.catalog__filter');
let filterClose = document.querySelector('.filter > a');
let loginClose = document.querySelector('.popup__form > a');
let popup = document.querySelector('.popup');
let loginLink = mainPage.querySelectorAll('.login-link');

header.classList.remove('no-js');
mainPage.classList.remove('no-js');
nav.classList.remove('no-js');

window.onload = function () {
  if (iconBurger != null && nav != null) {
    iconBurger.addEventListener('click', function () {
      header.classList.toggle('active');
      nav.classList.toggle('active');
      mainPage.classList.toggle('active');
      mainContent.classList.toggle('menu-open');
    });

  } else alert('нет элементов menu__burger или nav');

  if (filterLink != null) {

    filterLink.addEventListener('click', function () {
      filter.classList.toggle('active');
      mainContent.classList.toggle('menu-open');
    });

    let closeFilter = function () {
      if (filter.classList.contains('active')) {
        filter.classList.remove('active');
        mainContent.classList.remove('menu-open');
      }
    }

    filterClose.addEventListener('click', closeFilter);

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        closeFilter();
      }
    });

    window.addEventListener('click', function (e) {
      let target = e.target;
      if (!target.closest('.filter') && !target.closest('.filter > a') && !target.closest('.catalog__wrapper > a')) closeFilter();
    });


  } else {
    alert('нет кнопки для отображения фильтров');
  };

  if (loginLink != null) {
    return true;
  } else {
    alert('нет ссылки для авторизации');
  }
}


// Popup login


for (let i = 0; i < loginLink.length; i++) {
  loginLink[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('active')
    mainContent.classList.toggle('popup-open');
  });
}

let closeLogin = function () {
  if (popup.classList.contains('active')) {
    popup.classList.remove('active');
    mainContent.classList.remove('popup-open');
  }
}

loginClose.addEventListener('click', closeLogin);

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeLogin();
  }
});


// Tumbler

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

tumblerFilter.forEach((element) => {
  element.addEventListener('click', () => {
    let parent = element.parentNode;
    parent.classList.toggle('active');
  })
});
