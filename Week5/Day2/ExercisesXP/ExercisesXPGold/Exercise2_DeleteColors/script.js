// 1. Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.
const button = document.querySelector("input");
const select = document.querySelector("#colorSelect");
const allColors = document.querySelectorAll("#colorSelect > option");
button.addEventListener("click", function () {
  removecolor();
});

function removecolor() {
  for (let i = 0; i < allColors.length; i++) {
    if (select.value === allColors[i].value) {
      //   select.removeChild(allColors[i]);
      allColors[i].remove();
      break;
    }
  }
}
