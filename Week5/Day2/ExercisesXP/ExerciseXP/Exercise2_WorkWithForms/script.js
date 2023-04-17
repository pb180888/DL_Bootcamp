// 1. Retrieve the form and console.log it.
const form = document.forms[0];
console.log(form);
// 2. Retrieve the inputs by their id and console.log them.

const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
console.log(inputFname, inputLname);

// 3. Retrieve the inputs by their name attribute and console.log them.

const inputByNameFname = document.querySelector(`input[name = fname]`);
const inputByNameLname = document.querySelector(`input[name = lname]`);

console.log(inputByNameFname, inputByNameLname);

// 4. When the user submits the form (ie. submit event listener)
//     use event.preventDefault(), why ?
//     get the values of the input tags,
//     make sure that they are not empty,
//     create an li per input value,
//     then append them to a the <ul class="usersAnswer"></ul>, below the form.
const ul = document.querySelector(".usersAnswer");
const allInput = document.querySelectorAll("input");
const submit = document.getElementById("submit");
for (let i = 0; i < allInput.length; i++) {
  console.log(allInput[i].name);
}

const mainAction = function () {
  var li, textForLi;

  for (let i = 0; i < allInput.length - 1; i++) {
    if (allInput[i].value.length > 0) {
      li = document.createElement("li");
      textForLi = document.createTextNode(
        `${allInput[i].name} is ${allInput[i].value}`
      );
      li.appendChild(textForLi);
      ul.appendChild(li);
      document.body.appendChild(ul);
    } else {
      return false;
    }
    console.log(textForLi);
  }
};

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (mainAction()) {
    console.log(document.querySelector("ul"));
  }
});
// The output should be :
// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>
