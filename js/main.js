const burger = document.getElementsByClassName("header__burger")[0];
const firstLine = document.getElementsByClassName("header__burger-item")[0]
const secondLine = document.getElementsByClassName("header__burger-item")[1];
const thirdLine = document.getElementsByClassName("header__burger-item")[2];
const menu = document.getElementsByClassName("menu__list")[0];
const social = document.getElementsByClassName("social")[0];

burger.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    firstLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.transform = "rotate(0deg) translate(0px, 0px)"
    secondLine.style.opacity = "1";
    thirdLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    menu.style.top = "-100vh";
    social.style.left = "-100px";
  } else {
    firstLine.style.transform = "rotate(45deg) translate(5px, 9px)";
    secondLine.style.transform = "translate(100px)";
    secondLine.style.opacity = "0"
    thirdLine.style.transform = "rotate(-45deg) translate(5px, -9px)";
    menu.style.top = 0;
    social.style.left = "10px";
  }
});
