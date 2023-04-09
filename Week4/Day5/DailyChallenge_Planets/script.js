// 1. Create an array which value is the planets of the solar system.

// const planetsOfSolarSystem = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Ceres",
//   "Jupiter",
//   "Saturn",
//   "Uranus",
//   "Neptune",
// ];

// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

// for (let i = 0; i < planetsOfSolarSystem.length; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.style.margin = "1%";
//   let textForDiv = document.createTextNode(planetsOfSolarSystem[i]);
//   newDiv.appendChild(textForDiv);
//   newDiv.classList.add("planet");
//   document.body.appendChild(newDiv);
//   var listPlanets = document.querySelector(".listPlanets");
//   listPlanets.appendChild(newDiv);
//   let moondiv = document.createElement("div");
//   moondiv.classList.add("moon");
//   newDiv.appendChild(moondiv);

//   document.body.appendChild(listPlanets);
// }

// 3. Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).

// const first = (document.querySelector(
//   ".listPlanets > div:nth-child(1)"
// ).style.backgroundColor = "violet");
// const second = (document.querySelector(
//   ".listPlanets > div:nth-child(2)"
// ).style.backgroundColor = "green");
// const third = (document.querySelector(
//   ".listPlanets > div:nth-child(3)"
// ).style.backgroundColor = "blue");
// const forth = (document.querySelector(
//   ".listPlanets > div:nth-child(4)"
// ).style.backgroundColor = "orange");
// const fifth = (document.querySelector(
//   ".listPlanets > div:nth-child(5)"
// ).style.backgroundColor = "gray");
// const sixth = (document.querySelector(
//   ".listPlanets > div:nth-child(6)"
// ).style.backgroundColor = "yellow");
// const seventh = (document.querySelector(
//   ".listPlanets > div:nth-child(7)"
// ).style.backgroundColor = "pink");
// const eighth = (document.querySelector(
//   ".listPlanets > div:nth-child(8)"
// ).style.backgroundColor = "lightblue");
// const ninth = (document.querySelector(
//   ".listPlanets > div:nth-child(9)"
// ).style.backgroundColor = "brown");

// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planetsOfSolarSystemObj = {
  Mercury: 2,
  Venus: 2,
  Earth: 1,
  Mars: 2,
  Ceres: 3,
  Jupiter: 2,
  Saturn: 1,
  Uranus: 1,
  Neptune: 4,
};

for (let i in planetsOfSolarSystemObj) {
  let newDiv = document.createElement("div");
  newDiv.style.margin = "1%";
  let textForDiv = document.createTextNode(i);
  newDiv.appendChild(textForDiv);
  newDiv.classList.add("planet");
  document.body.appendChild(newDiv);
  var listPlanets = document.querySelector(".listPlanets");
  listPlanets.appendChild(newDiv);
  document.body.appendChild(listPlanets);
  console.log(i);
  for (let y = 0; y < planetsOfSolarSystemObj[i]; y++) {
    var moondiv = document.createElement("div");
    moondiv.classList.add("moon");
    moondiv.style.position = "relative";
    moondiv.style.border = "3px solid red";
    moondiv.style.width = "12%";
    moondiv.style.height = "12%";
    newDiv.appendChild(moondiv);
  }
}

const first = (document.querySelector(
  ".listPlanets > div:nth-child(1)"
).style.backgroundColor = "violet");
const second = (document.querySelector(
  ".listPlanets > div:nth-child(2)"
).style.backgroundColor = "green");
const third = (document.querySelector(
  ".listPlanets > div:nth-child(3)"
).style.backgroundColor = "blue");
const forth = (document.querySelector(
  ".listPlanets > div:nth-child(4)"
).style.backgroundColor = "orange");
const fifth = (document.querySelector(
  ".listPlanets > div:nth-child(5)"
).style.backgroundColor = "gray");
const sixth = (document.querySelector(
  ".listPlanets > div:nth-child(6)"
).style.backgroundColor = "yellow");
const seventh = (document.querySelector(
  ".listPlanets > div:nth-child(7)"
).style.backgroundColor = "pink");
const eighth = (document.querySelector(
  ".listPlanets > div:nth-child(8)"
).style.backgroundColor = "lightblue");
const ninth = (document.querySelector(
  ".listPlanets > div:nth-child(9)"
).style.backgroundColor = "brown");
