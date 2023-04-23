// 1.Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type text");
form.appendChild(input);
document.body.appendChild(form);

// 2. Hint: use one of the following events to remove any character that is not a letter
function inputText() {
  console.log(input.value);
}
inputText();

// input.addEventListener("keydown", function (event) {
//   if (event.code === "Enter") {
//     inputText();
//   }
// });

// keyup event
// or keypress event
// or keydown event
// or input event
