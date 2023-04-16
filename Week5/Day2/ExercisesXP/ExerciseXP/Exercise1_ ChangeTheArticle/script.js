// 1. Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
// 2. Using DOM methods, remove the last paragraph in the <article> tag.

const removeLastP = document.querySelector("article > p:last-child").remove();

// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});
// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const button = document.createElement("button");
const textButton = document.createTextNode("Bold");
button.appendChild(textButton);
document.querySelector("article").appendChild(button);
button.addEventListener("click", function () {
  document.querySelector("body").style.fontWeight = "bold";
});

// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener("mouseover", function () {
  let random = Math.round(Math.random() * 100);
  h1.style.fontSize = `${random}px`;
  h1.style.transition = "1s";
  console.log(random);
});
h1.addEventListener("mouseout", function () {
  h1.style.fontSize = "1.5rem";
  h1.style.transition = "1s";
});
// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

h2.addEventListener("mouseover", function () {
  h2.style.opacity = "0%";
  h2.style.transition = "1s";
});
h2.addEventListener("mouseout", function () {
  h2.style.opacity = "100%";
  h2.style.transition = "1s";
});
