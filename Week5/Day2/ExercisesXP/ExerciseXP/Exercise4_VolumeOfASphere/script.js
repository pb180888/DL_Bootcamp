// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const submit = document.querySelector("#submit");
const radius = document.querySelector("#radius");
const volume = document.querySelector("#volume");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (radius.value === "" || !Number(radius.value)) {
    alert("Enter a number radius");
  } else {
    volume.value =
      (4 * 3, 14 * (radius.value * radius.value * radius.value)) / 3;
  }
});
