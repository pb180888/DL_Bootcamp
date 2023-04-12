// In a JS file, write a JavaScript function to get the values of First and Last name of the following form
const formVar = document.forms[0];
console.log(formVar);
const firtsOfForm = formVar.fname.value;
console.log(firtsOfForm);
for (let i = 0; i < formVar.length; i++) {
  console.log(formVar[i].value);
}
