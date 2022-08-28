const swiper = new Swiper(".homes__slider", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".homes__list_slider-btn",
  },
});
