// In a JS file, write a JavaScript function to :
let section = document.querySelector("#select1");
console.log(section);
document.querySelector("body").style.display = "flex";
document.querySelector("body").style.flexDirection = "column";
function superFunction() {
  // 1. Get the value of the 2nd Option
  let element = (section.selectedIndex = 1);
  console.log(
    `The index of the second element is ${element} and the value is ${section.value} `
  );
  // 2. Add a new option with the value 'Work' at the end of the select form
  let newOption = document.createElement("option");
  newOption.text = "Work";
  newOption.setAttribute("value", "Work");
  section.add(newOption);
  // console.log(newOption);
  // console.log(newOption.index);
  // 3. Add a new option with the value 'Primary School' at the beginning of the select form
  newOptionPrimarySchool = document.createElement("option");
  newOptionPrimarySchool.text = "Primary School";
  newOptionPrimarySchool.setAttribute("value", "Primary School");
  section.add(newOptionPrimarySchool, section[0]);
  document.body.appendChild(section);
  // 4. Change 'College' as selected. Use the 3 properties we learned above
  section.value = "banana";
  console.log(section.value);
  section.selectedIndex = 3;
  console.log(section.value);
  section.options[3].selected = true;
  console.log(section.value);
  // 5. Add a button that alert the choice selected
  const button = document.createElement("button");
  button.innerHTML = "Press";
  button.style.width = "50px";
  button.style.height = "20px";
  document.body.appendChild(button);
  button.addEventListener("click", function () {
    alert(section.value);
  });
}
superFunction();
function getValueOfElement(index) {
  section.selectedIndex = index;
  console.log(section.value);
}
getValueOfElement(0);
