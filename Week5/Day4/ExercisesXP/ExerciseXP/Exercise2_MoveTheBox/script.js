// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
const animate = document.querySelector("#animate");
const container = document.querySelector("#container");
const widthContainer = container.clientWidth;
const widthAnimate = animate.clientWidth;
console.log(widthContainer);
let distance = 0;
function myMove() {
  function moving() {
    distance = distance + 1;
    animate.style.left = distance + "px";
    if (distance > widthContainer - widthAnimate) {
      clearInterval(interval);
    }
  }
  let interval = setInterval(moving, 10);
}
