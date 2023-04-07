// Modify the style of the paragraph text (such as fontSize, fontFamily, color, etc. )through javascript code.
const paragraph = document.querySelector("#text");
console.log(paragraph.innerHTML);
const fontSize = (paragraph.style.fontSize = "30px");
const fontFamily = (paragraph.style.fontFamily = "sans-serif");
const color = (paragraph.style.color = "blue");
const border = (paragraph.style.border = "2px solid red");
const inline = (paragraph.style.display = "inline");
const backgroundColor = (paragraph.style.backgroundColor = "green");
