import './swiper-bundle.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30
    }
  }
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
