const buttonA = document.querySelector(".a");
const buttonS = document.querySelector(".s");
const buttonD = document.querySelector(".d");
const buttonF = document.querySelector(".f");
const buttonG = document.querySelector(".g");
const buttonH = document.querySelector(".h");
const buttonJ = document.querySelector(".j");
const buttonK = document.querySelector(".k");
const buttonL = document.querySelector(".l");
const boom = document.querySelector(".boom");
const clap = document.querySelector(".clap");
const hihat = document.querySelector(".hihat");
const kick = document.querySelector(".kick");
const openhat = document.querySelector(".openhat");
const ride = document.querySelector(".ride");
const snare = document.querySelector(".snare");
const tink = document.querySelector(".tink");
const tom = document.querySelector(".tom");
function main(button, audio, key) {
  button.addEventListener("mousedown", function () {
    playAudio(button, audio);
  });
  button.addEventListener("mouseup", function () {
    button.classList.remove("playing");
  });
  document.addEventListener("keydown", function (e) {
    if (e.code === key) {
      playAudio(button, audio);
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.code === key) {
      button.classList.remove("playing");
    }
  });
}
main(buttonA, boom, "KeyA");
main(buttonS, clap, "KeyS");
main(buttonD, hihat, "KeyD");
main(buttonF, kick, "KeyF");
main(buttonG, openhat, "KeyG");
main(buttonH, ride, "KeyH");
main(buttonJ, snare, "KeyJ");
main(buttonK, tink, "KeyK");
main(buttonL, tom, "KeyL");
//  buttonA.addEventListener("mousedown", function () {
//   playAudio(boom);
// });
// buttonA.addEventListener("mouseup", function () {
//   buttonA.classList.remove("playing");
// });
// document.addEventListener("keydown", function (e) {
//   if ((e.code = "KeyA")) {
//     playAudio(boom);
//   }
// });
// document.addEventListener("keyup", function (e) {
//   if ((e.code = "KeyA")) {
//     buttonA.classList.remove("playing");
//   }
// });
function playAudio(button, audio) {
  audio.play();
  audio.currentTime = 0;
  button.classList.add("playing");
}
