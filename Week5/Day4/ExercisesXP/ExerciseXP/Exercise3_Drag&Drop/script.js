// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.
const box = document.querySelector("#box");
box.style.marginTop = "30px";
box.style.textAlign = "center";
box.setAttribute("draggable", "true");
box.addEventListener("dragstart", dragStart);
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

const targetArea = document.querySelector("#target");
targetArea.style.display = "flex";
targetArea.style.justifyContent = "center";
targetArea.addEventListener("dragover", dragOver);
targetArea.addEventListener("drop", drop);
targetArea.addEventListener("dragenter", dragEnter);
targetArea.addEventListener("dragleave", dragLeave);

//1st step of drop target
function dragOver(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  let dataSquare = event.dataTransfer.getData("text");
  let box = document.getElementById(dataSquare);
  event.target.appendChild(box);
}

function dragEnter(event) {
  event.target.style.backgroundColor = "grey";
  event.target.style.border = "solid 3px black";
}

function dragLeave(event) {
  // event.target.style.backgroundColor = "lightblue"
  event.target.style.border = "none";
  event.target.style.backgroundColor = "yellow";
}
