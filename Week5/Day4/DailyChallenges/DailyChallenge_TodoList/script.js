// 1. Create an HTML, CSS and a JS file.

// 2. In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// 3. In the js file, you must add the following functionalities:
//     1. Create an empty array : const tasks = [];
const tasks = [];

//     2. Create a function called addTask(). As soon as the user clicks on the button:
//     - check that the input is not empty,
//     - then add it to the array (ie. add the text of the task)
//     - then add it to the DOM, below the form (in the <div class="listTasks"></div>) .

//     - Each new task added should have (starting from left to right - check out the image at the top of the page)
//          - a “X” button. Use font awesome for the “X” button.
//          - an input type="checkbox". The label of the input is the task added by the user.
const body = document.querySelector("body");
const p = document.createElement("p");
p.innerHTML = "TO-DO LIST";
p.style.color = "white";
body.prepend(p);
body.style.backgroundColor = "#ff494c";
const form = document.forms[0];
form.style.marginBottom = "10px";
form.style.backgroundColor = "white";
form.style.border = "2xp solid white";
form.style.display = "inline-flex";
const submitButton = document.querySelector("#submit");
submitButton.style.border = "1px solid white";

const textInput = document.querySelector("#text");
textInput.style.border = "2xp solid white";
textInput.style.borderColor = "white";
submitButton.style.backgroundColor = "white";
const listTasks = document.querySelector(".listTasks");
listTasks.style.width = "212px";
listTasks.style.backgroundColor = "white";

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  function addTask() {
    if (textInput.value.length < 1) {
      alert("emtpy");
    } else {
      console.log(textInput.value);
      tasks.push(textInput.value);
      console.log(tasks);
      const div = document.createElement("div");
      const label = document.createElement("label");
      const xButton = document.createElement("i");
      xButton.classList.add("fa-solid");
      xButton.classList.add("fa-square-xmark");
      xButton.style.color = "#ff494c";
      xButton.style.marginLeft = "2px";
      label.appendChild(xButton);
      div.appendChild(label);
      const input = document.createElement("input");
      input.style.color = "grey";
      input.setAttribute("type", "checkbox");
      div.appendChild(input);
      const textForDiv = document.createElement("span");
      textForDiv.innerHTML = textInput.value;
      div.appendChild(textForDiv);
      listTasks.appendChild(div);

      input.addEventListener("click", function () {
        div.style.textDecoration = "line-through";
        div.style.color = "#ff494c";
        if ((div.style.textDecoration = "line-through")) {
          input.addEventListener("click", function () {
            div.style.textDecoration = "none";
            div.style.color = "black";
          });
        }
      });
      xButton.addEventListener("click", function () {
        div.remove();
      });
    }
  }
  addTask();
});
