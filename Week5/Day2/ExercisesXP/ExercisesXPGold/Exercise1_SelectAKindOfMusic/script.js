// 1. Display the value of the selected option.
var selected;
const allOptions = document.querySelectorAll("#genres > option");
function findSelected() {
  for (let i = 0; i < allOptions.length; i++) {
    for (let y = 0; y < allOptions[i].attributes.length; y++) {
      console.log(allOptions[i].attributes[y]);
      if (allOptions[i].hasAttribute(`selected`)) {
        selected = allOptions[i];
      }
    }
  }
  console.log(selected);
  console.log(selected.value);
}
findSelected();
// 2. Add an additional option to the select tag:
// <option value="classic">Classic</option>
var select = document.querySelector("#genres");
const addOption = document.createElement("option");
addOption.setAttribute("value", "classic");
const textForAddOption = document.createTextNode("Classic");
addOption.appendChild(textForAddOption);
select.appendChild(addOption);

// 3. The newly added option should be selected by default.
addOption.setAttribute("selected", "");
// document.querySelectorAll("option")[1].removeAttribute("selected");
