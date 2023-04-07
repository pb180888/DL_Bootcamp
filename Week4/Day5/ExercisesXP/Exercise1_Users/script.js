// 1. Using Javascript:
// Retrieve the div and console.log it

const div = document.querySelector("div");
console.log(div.innerHTML);

// Change the name “Pete” to “Richard”.

const changePeterToRichard = (document.querySelector(
  ".list > li:last-child"
).innerHTML = "Richard");
console.log(changePeterToRichard);

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
const deleteSarah = document.querySelectorAll(".list >li:nth-child(2)")[1];
deleteSarah.remove();

// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

const firstNameOfUl = document.querySelectorAll("ul > li:first-child");
for (let i of firstNameOfUl) {
  i.innerHTML = "Pavel";
}

// 2. Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.

const addClass = document.querySelectorAll(".list");
for (let i of addClass) {
  i.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.

const addTwoClasses = document
  .querySelector(".list")
  .classList.add("university", "attendance");
