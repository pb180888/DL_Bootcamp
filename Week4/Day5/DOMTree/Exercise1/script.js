// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

const div = document.querySelector("div");
console.log(div);
const anotherDiv = document.getElementsByTagName("div")[0];
console.log(anotherDiv);

// 2. The ul DOM node?

const ul = document.querySelector("ul");
console.log(ul);
const anotherUL = document.getElementsByTagName("ul")[0];
console.log(anotherUL);

// 3. The second li (with Pete)?

const secondLi = document.querySelectorAll("li")[1];
console.log(secondLi);
const anotherSecondLi = document.getElementsByTagName("li")[1];
console.log(anotherSecondLi);
