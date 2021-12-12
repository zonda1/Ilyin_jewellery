import './swiper-bundle.js';

let sliderElement = document.querySelector('.swiper');
let swiperSlider = {};
let sliderType;
if (window.innerWidth < 768) {
  sliderType == 'mobile'
} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
  sliderType == 'tablet'
} else {
  sliderType == 'desktop'
};


function initSlider(type) {
  let sliderSettings = {};
  if (type === 'mobile') {
    sliderSettings = {
      // описание настроек для мобильной вариации.
      direction: 'horizontal',
      loop: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
        }
      },
    }
  } else if (type === 'tablet') {
    sliderSettings = {
      // описание настроек для планшетной вариации.
      direction: 'horizontal',
      loop: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
    }
  } else {
    sliderSettings = {
      // описание настроек для десктопной вариации.
      direction: 'horizontal',
      loop: true,
      updateOnWindowResize: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
    }
  }

  if (swiperSlider.destroy && typeof swiperSlider.destroy === "function") {
    swiperSlider.destroy();
  }
  swiperSlider = new Swiper(sliderElement, sliderSettings);
}

initSlider(sliderType);

window.addEventListener('resize', () => {
  if (window.innerWidth < 768 && sliderType != 'mobile') {
    sliderType = 'mobile';
    initSlider(sliderType);
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024 && sliderType != 'tablet') {
    sliderType = 'tablet';
    initSlider(sliderType);
  } else if (window.innerWidth > 1024 && sliderType != 'desktop') {
    sliderType = 'desktop';
    initSlider(sliderType);
  }
});
