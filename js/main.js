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

const carusel = document.querySelector(".trainer__list"),
  firstImg = document.querySelector(".trainer__item"),
  arrowsItem = document.querySelectorAll(".trainer__arrows-item");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideItems = () => {
  let scrollWidth = carusel.scrollWidth - carusel.clientWidth;
  arrowsItem[0].style.opacity = carusel.scrollLeft == 0 ? ".8" : "1";
  arrowsItem[1].style.opacity = carusel.scrollLeft == scrollWidth ? ".8" : "1";
};

arrowsItem.forEach((item) => {
  let firstImgWidth = firstImg.offsetWidth + 10;
  item.addEventListener("click", () => {
    carusel.scrollLeft +=
      item.id == "trainer-left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideItems(), 60);
  });
});

const autoSlide = () => {
  let firstImgWidth = firstImg.offsetWidth + 10;
  if (carusel.scrollLeft == carusel.scrollWidth - carusel.clientWidth) return;
  positionDiff = Math.abs(positionDiff);
  let valDifference = firstImgWidth - positionDiff;
  if (carusel.scrollLeft > prevScrollLeft) {
    return (carusel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  carusel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carusel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carusel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carusel.scrollLeft = prevScrollLeft - positionDiff;
  showHideItems();
};

const dragStop = () => {
  isDragStart = false;
  carusel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carusel.addEventListener("mousedown", dragStart);
carusel.addEventListener("touchstart", dragStart);

carusel.addEventListener("mousemove", dragging);
carusel.addEventListener("touchmove", dragging);

carusel.addEventListener("mouseup", dragStop);
carusel.addEventListener("mouseleave", dragStop);
carusel.addEventListener("touchend", dragStop);
