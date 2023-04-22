// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
const animate = document.querySelector("#animate");
const container = document.querySelector("#container");
const widthContainer = container.clientWidth;
const widthAnimate = animate.clientWidth;
console.log(widthContainer);
function animatePassing() {
  let start = Date.now(); // start date
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    // console.log(timePassed);
    animate.style.left = timePassed / 1 + "px";
    if (timePassed >= widthContainer - widthAnimate) {
      clearInterval(timer);
    }
  });
}
function myMove() {
  animatePassing();
}
