const butSignUp = document.querySelector("#button");
const butExit = document.querySelector("#exit");
const element = document.querySelector(".register");

let clickSignUp1 = butSignUp.addEventListener("click", function () {
  document.querySelector(".register").classList.remove("hidden");
});

let clickExit = butExit.addEventListener("click", function () {
  document.querySelector(".register").classList.add("hidden");
});

// if (element) {
//   butSignUp.addEventListener("click", function () {
//     element.classList.remove("hidden");
//   });
// }
// if (element.classList.remove("hidden")) {
//   butSignUp.addEventListener("click", function () {
//     element.classList.add("hidden");
//   });
// }
