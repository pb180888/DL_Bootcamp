// 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
const submitBTN = document.forms[0].elements.submit;

const firstName = document.forms[0].elements.fname;
const lastName = document.forms[0].elements.lname;
submitBTN.addEventListener("click", function (e) {
  e.preventDefault();
  newObj = {};
  newObj.name = firstName.value;
  newObj.lastname = lastName.value;
  let jsonObj = JSON.stringify(newObj);
  console.log("JSON string", jsonObj);
});
