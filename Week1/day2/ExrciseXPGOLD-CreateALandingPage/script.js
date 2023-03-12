const butSignUp = document.querySelector("#button");
const butExit = document.querySelector("#exit");

let clickSignUp1 = butSignUp.addEventListener("click", function () {
  document.querySelector(".register").classList.remove("hidden");
});

let clickExit = butExit.addEventListener("click", function () {
  document.querySelector(".register").classList.add("hidden");
});
