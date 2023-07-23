const swiperTrainer = new Swiper('.trainer__swiper', {
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 15
    },
    1320: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  },
  navigation: {
    prevEl: '#trainer-left',
    nextEl: '#trainer-right',
  },
});

const swiperServices = new Swiper('.services__swiper', {
  navigation: {
    prevEl: '#services-prev',
    nextEl: '#services-next',
  }
})