// 1. Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// 2. Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
const p = document.createElement("p");
const textForP = document.createTextNode(
  "If you want to change backgroundColor for the element below press Enter"
);
p.appendChild(textForP);
document.body.appendChild(p);
let div = document.createElement("div");
const textFotDiv = document.createTextNode("I am flexable element");
div.appendChild(textFotDiv);
document.body.appendChild(div);
div.style.border = "2px solid black";
div.style.display = "inline-block";
div.addEventListener("click", function () {
  div.style.fontFamily = "calibri";
});

document.addEventListener("keydown", function (e) {
  if ((e.code = "Enter")) {
    div.style.backgroundColor = "red";
  }
});
div.addEventListener("mouseover", function () {
  div.style.marginLeft = "5%";
});
div.addEventListener("mouseout", function () {
  div.style.marginTop = "5%";
});

div.addEventListener("dblclick", function () {
  div.style.padding = "2%";
  div.style.color = "blue";
});
