const burger = document.getElementsByClassName("header__burger")[0];
const firstLine = document.getElementsByClassName("header__burger-item")[0];
const secondLine = document.getElementsByClassName("header__burger-item")[1];
const thirdLine = document.getElementsByClassName("header__burger-item")[2];
const menu = document.getElementsByClassName("menu__list")[0];
const social = document.getElementsByClassName("social")[0];

burger.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    firstLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.opacity = "1";
    thirdLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    menu.style.top = "-100vh";
    social.style.left = "-100px";
  } else {
    firstLine.style.transform = "rotate(45deg) translate(5px, 9px)";
    secondLine.style.transform = "translate(100px)";
    secondLine.style.opacity = "0";
    thirdLine.style.transform = "rotate(-45deg) translate(5px, -9px)";
    menu.style.top = 0;
    social.style.left = "10px";
  }
});

const arrowLeft = document.getElementsByClassName("trainer__arrows-item")[0];
const arrowRight = document.getElementsByClassName("trainer__arrows-item")[1];
const trainerList = document.getElementsByClassName("trainer__list")[0];

const trainerItemWidth = document.getElementsByClassName("trainer__item")[0].clientWidth;
const trainerListLength = document.getElementsByClassName("trainer__item").length;
const translateLimit = -(trainerItemWidth * (trainerListLength - 2));

let trainerSliderPosition = 0;
let value = 0;

function swipe(direction) {
  if (direction === "left") {
    if (trainerSliderPosition === 0) return;
    trainerSliderPosition += 1;
  } else {
    if (value === translateLimit) return;
    trainerSliderPosition -= 1;
  }
  value = trainerSliderPosition * trainerItemWidth;
  value = Math.round(value);

  trainerList.style.transform = `translate(${value}px)`;
}

arrowLeft.onclick = () => {
  swipe('left');
};

arrowRight.onclick = () => {swipe("right")}