// Add a click event listener to the div

const divElement = document.querySelector("div");
divElement.addEventListener(
  "click",
  function (e) {
    console.log("click div");
    // if you want to stop The Bubbling here
    // e.stopPropagation();
  },
  true
);
const clickButton = document.querySelector("#jsstyle");
clickButton.addEventListener(
  "click",
  function (e) {
    clickButton.style.backgroundColor = "blue";
    console.log("clicked button");
  },
  true
);

// Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

// Check how the propagation works and try to prevent it
