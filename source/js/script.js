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
let filterClear = document.querySelector('.button--clear');
let loginClose = document.querySelector('.popup__form > a');
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup-container');
let loginLink = mainPage.querySelectorAll('.login-link');
let loginMail = document.querySelector('input[name="mail"]');


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
    console.log('нет кнопки для отображения фильтров');
  };

  if (loginLink != null) {
    return true;
  } else {
    alert('нет ссылки для авторизации');
  };
}

// Clear Filter

if (filterClear != null) {
  filterClear.addEventListener('click', () => {
    document.querySelector('.filter').reset();
    document.getElementById('jew-1').checked = false;
    document.getElementById('jew-2').checked = false;
    document.getElementById('jew-4').checked = false;
  })
} else {
  console.log('нет кнопки для сброса фильтров');
};


// Popup login

// Show Modal
function showModal(evt) {
  evt.preventDefault();

  // Store the last focused element
  lastFocusedElement = document.activeElement;

  // Select the modal window
  popup.classList.add('active');
  popupContainer.classList.add('active');
  mainContent.classList.toggle('popup-open');

  loginMail.focus();
  // Find all focusable children
  let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  let focusableElements = popupContainer.querySelectorAll(focusableElementsString);

  // Convert NodeList to Array
  focusableElements = Array.prototype.slice.call(focusableElements);

  // The first focusable element within the modal window
  let firstTabStop = focusableElements[0];
  // The last focusable element within the modal window
  let lastTabStop = focusableElements[focusableElements.length - 1];
  // Add keydown event
  popupContainer.addEventListener('keydown', function (e) {
    // Listen for the Tab key
    if (e.keyCode === 9) {
      // If Shift + Tab
      if (e.shiftKey) {
        // If the current element in focus is the first focusable element within the modal window...
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          // ...jump to the last focusable element
          lastTabStop.focus();
        }
        // if Tab
      } else {
        // If the current element in focus is the last focusable element within the modal window...
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          // ...jump to the first focusable element
          firstTabStop.focus();
        }
      }
    }
  });
}

for (let i = 0; i < loginLink.length; i++) {
  loginLink[i].addEventListener('click', showModal)
}

let closeLogin = function () {
  if (popup.classList.contains('active')) {
    popup.classList.remove('active');
    popupContainer.classList.remove('active');
    mainContent.classList.remove('popup-open');
    lastFocusedElement.focus();
  }
}

loginClose.addEventListener('click', closeLogin);

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeLogin();
  }
});

window.addEventListener('click', function (e) {
  let target = e.target;
  if (!target.closest('.popup__form') && !target.closest('.popup__form > a') && !target.closest('.login-link')) closeLogin();
});


// Tumbler

tumbler.forEach((element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
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
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    let parent = element.parentNode;
    parent.classList.toggle('active');
  })
});
