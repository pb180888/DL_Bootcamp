// 1.Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type text");
form.appendChild(input);
document.body.appendChild(form);

// 2. Hint: use one of the following events to remove any character that is not a letter

input.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (input.value.length < 1) {
        alert("Empty");
      }
      if (Number(input.value)) {
        alert("Enter string");
      } else {
        for (let i = 0; i < input.value.length; i++) {
          if (
            !(input.value[i] < "A") ||
            (!(input.value[i] > "Z") && !(input.value[i] < "a")) ||
            !(input.value[i] > "z")
          ) {
            input.value[i].remove();
          }
        }
      }
    });
  }
});

// keyup event
// or keypress event
// or keydown event
// or input event
