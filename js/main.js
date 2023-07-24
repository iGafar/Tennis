const burger = document.querySelector(".header__burger");
const firstLine = document.querySelectorAll(".header__burger-item")[0];
const secondLine = document.querySelectorAll(".header__burger-item")[1];
const thirdLine = document.querySelectorAll(".header__burger-item")[2];
const menu = document.querySelector(".menu__list");
const social = document.querySelector(".social");

burger.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    firstLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.opacity = "1";
    thirdLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    menu.style.top = "-100vh";
    social.style.left = "-100%";
  } else {
    firstLine.style.transform = "rotate(45deg) translate(5px, 9px)";
    secondLine.style.transform = "translate(100px)";
    secondLine.style.opacity = "0";
    thirdLine.style.transform = "rotate(-45deg) translate(5px, -9px)";
    menu.style.top = "0";
    social.style.left = "10px";
  }
});

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