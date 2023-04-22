// Part I
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.
function helloWorld() {
  alert("Hello World");
}
setTimeout(helloWorld, 2000);

// Part II
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
const div = document.querySelector("#container");
function addParagraph() {
  const p = document.createElement("p");
  const textForP = document.createTextNode("Hello World");
  p.appendChild(textForP);
  div.appendChild(p);
  document.body.appendChild(div);
}
setTimeout(addParagraph, 2000);

// Part III
// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

const interval = setInterval(() => {
  addParagraph();
}, 2000);
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  clearInterval(interval);
});
setTimeout(() => {
  clearInterval(interval);
}, 10000);
