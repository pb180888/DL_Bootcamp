// 1. Write a program to check whether a string is blank or not.
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false
let stringBlanckOrNot = prompt("Enter you sentence");
function isBlank(stringBlanckOrNot) {
  if (stringBlanckOrNot.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isBlank(stringBlanckOrNot));
