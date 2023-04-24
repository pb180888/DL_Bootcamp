const picture = document.getElementById("picture");
function fillPicture() {
  for (let index = 0; index < 1440; index++) {
    const div = document.createElement("div");
    div.style.width = "2.6vh";
    div.style.height = "3.8vh";
    div.style.backgroundColor = "white";
    picture.appendChild(div);
  }
}
fillPicture();

const redButton = document.querySelector(".red");
redButton.addEventListener("click", function () {
  colorPaint("rgb(255, 0, 0)");
});
const darkOrangeButton = document.querySelector(".darkOrange");
darkOrangeButton.addEventListener("click", function () {
  colorPaint("rgb(255, 69, 0)");
});
const lightOrangeButton = document.querySelector(".lightOrange");
lightOrangeButton.addEventListener("click", function () {
  colorPaint("rgb(255, 165, 0)");
});
const yellowButton = document.querySelector(".yellow");
yellowButton.addEventListener("click", function () {
  colorPaint("rgb(255, 255, 0)");
});
const greenGrassButton = document.querySelector(".greenGrass");
greenGrassButton.addEventListener("click", function () {
  colorPaint("rgb(154, 205, 50)");
});
const lightGreenButton = document.querySelector(".lightGreen");
lightGreenButton.addEventListener("click", function () {
  colorPaint("rgb(144, 238, 144)");
});
const darkGreenButton = document.querySelector(".darkGreen ");
darkGreenButton.addEventListener("click", function () {
  colorPaint("rgb(0, 128, 0)");
});
const seaWaveButton = document.querySelector(".seaWave");
seaWaveButton.addEventListener("click", function () {
  colorPaint("rgb(64, 224, 208)");
});
const seaButton = document.querySelector(".sea");
seaButton.addEventListener("click", function () {
  colorPaint("rgb(0, 255, 255)");
});
const lightSeaButton = document.querySelector(".lightSea");
lightSeaButton.addEventListener("click", function () {
  colorPaint("rgb(135, 206, 250)");
});
const middleSeaButton = document.querySelector(".middleSea");
middleSeaButton.addEventListener("click", function () {
  colorPaint("rgb(30, 144, 255)");
});
const darkSeaButton = document.querySelector(".darkSea");
darkSeaButton.addEventListener("click", function () {
  colorPaint("rgb(0, 0, 255)");
});
const extraDarkSea = document.querySelector(".extraDarkSea");
extraDarkSea.addEventListener("click", function () {
  colorPaint("rgb(0, 0, 139)");
});
const darkVioletButton = document.querySelector(".darkViolet");
darkVioletButton.addEventListener("click", function () {
  colorPaint("rgb(75, 0, 130)");
});
const middleVioletButton = document.querySelector(".middleViolet");
middleVioletButton.addEventListener("click", function () {
  colorPaint("rgb(139, 0, 139)");
});
const lightPinkButton = document.querySelector(".lightPink");
lightPinkButton.addEventListener("click", function () {
  colorPaint("rgb(238, 130, 238)");
});
const middlePinkButton = document.querySelector(".middlePink");
middlePinkButton.addEventListener("click", function () {
  colorPaint("rgb(255, 182, 193)");
});
const lightGrayButton = document.querySelector(".lightGray ");
lightGrayButton.addEventListener("click", function () {
  colorPaint("rgb(211, 211, 211)");
});
const darkGrayButton = document.querySelector(".darkGray");
darkGrayButton.addEventListener("click", function () {
  colorPaint("rgb(128, 128, 128)");
});
const blackButton = document.querySelector(".black");
blackButton.addEventListener("click", function () {
  colorPaint("black");
});
const whiteButton = document.querySelector(".white");
whiteButton.addEventListener("click", function () {
  colorPaint("white");
});
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function () {
  for (let i = 0; i < everyPartOfPicture.length; i++) {
    everyPartOfPicture[i].style.backgroundColor = "white";
  }
  colorPaint("white");
});
const everyPartOfPicture = document.querySelectorAll("#picture > div");
let mousedown = false;
const body = document.querySelector("body");
body.addEventListener("mousedown", function (event) {
  mousedown = true;
  console.log(mousedown);
});
body.addEventListener("mouseup", function (event) {
  mousedown = false;
  console.log(mousedown);
});

function colorPaint(color) {
  for (let i = 0; i < everyPartOfPicture.length; i++) {
    everyPartOfPicture[i].addEventListener("mouseover", function () {
      if (mousedown) {
        everyPartOfPicture[i].style.backgroundColor = `${color}`;
      }
    });
  }
}
