const burger = document.getElementsByClassName("header__burger")[0];
const secondLine = document.getElementsByClassName("header__burger-item")[1];
const thirdLine = document.getElementsByClassName("header__burger-item")[2];
const menu = document.getElementsByClassName("menu__list")[0];
const social = document.getElementsByClassName("social")[0];

burger.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    secondLine.style.transform = "translate(0px)";
    thirdLine.style.transform = "translate(0px)";
    menu.style = "top: -100vh;";
    social.style.top = "-100vh";
  } else {
    secondLine.style.transform = "translate(-5px)";
    thirdLine.style.transform = "translate(-10px)";
    menu.style.top = 0;
    social.style.top = "inherit";
  }
});
