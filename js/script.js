const swiper = new Swiper(".homes__slider", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 1,
  // grabbing by mouse
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  loopedSlides: 0,
  loopFillGroupWithBlank: true,
  // switching by keyboard
  keyboard: {
    enabled: true,
  },
  // switching by mousewheel
  mousewheel: {
    sensivity: 1,
  },
  navigation: {
    nextEl: ".homes__list_slider-btn",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
