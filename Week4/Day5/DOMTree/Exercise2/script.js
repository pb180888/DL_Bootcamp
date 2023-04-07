// For each of the questions, find 2 WAYS to access :

// 1. The div node

const div = document.querySelectorAll("div")[0].innerHTML;
console.log(div);
const anotherDiv = document.querySelector("#container").innerHTML;
console.log(anotherDiv);

// 2. The ul nodes, and render all of it's children one by one

const ul = document.querySelectorAll("ul > li");
for (let item of ul) {
  console.log(item.innerHTML);
}
const anotheUl = document.querySelectorAll(".list > li");
for (let item of anotheUl) {
  console.log(item.innerHTML);
}
// 3. The first li of each ul

const firstUl = document.querySelectorAll("ul > li:first-child");
for (let item of firstUl) {
  console.log(item.innerHTML);
}

const anotheFirstUl = document.querySelectorAll(".list > li:first-child");
for (let item of anotheFirstUl) {
  console.log(item.innerHTML);
}
