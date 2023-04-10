// Add a few event listener to the button. The event listeners should change the style of the button

const button = document.querySelector("#jsstyle");
button.addEventListener("click", function () {
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.width = "10%";
  button.style.padding = "2%";
  button.style.margin = "5%";
  button.style.borderRadius = "15px/15px";
});

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "black";
  button.style.color = "white";
});

button.addEventListener("mouseout", function () {
  button.style.color = "pink";
});
