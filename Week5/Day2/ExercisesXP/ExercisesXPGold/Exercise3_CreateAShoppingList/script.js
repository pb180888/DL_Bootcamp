// 1. Create an empty array. For example: let shoppingList=[].
var shoppingList = [];
// 2. Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
const form = document.createElement("form");
const createiInput = document.createElement("input");
createiInput.setAttribute("type", "text");
createiInput.classList.add("input");
createiInput.style.border = "2px solid black";
const creatButton = document.createElement("input");
creatButton.setAttribute("type", "button");
creatButton.setAttribute("value", "AddItem");
creatButton.classList.add("AddItem");
form.appendChild(createiInput);
form.appendChild(creatButton);
document.body.append(form);
// 3. Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).

const button = document.querySelector(".AddItem");
const input = document.querySelector(".input");

console.log(button, input);
function addItem() {
  if (input.value.length > 0) {
    shoppingList.push(input.value);
    console.log(shoppingList);
  }
}
button.addEventListener("click", addItem);

// 4. Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
const creatButtonClearAll = document.createElement("input");
creatButtonClearAll.setAttribute("type", "button");
creatButtonClearAll.classList.add("ClearAll");
creatButtonClearAll.setAttribute("value", "CleatButton");
form.appendChild(creatButtonClearAll);

// 5. Create a function named clearAll() that should clear out all the items in the shopping list.

function clearAll() {
  for (let i = shoppingList.length; i > 0; i--) {
    shoppingList.pop();
  }
  console.log(shoppingList);
}
const clearButton = document.querySelector(".ClearAll");
clearButton.addEventListener("click", clearAll);
