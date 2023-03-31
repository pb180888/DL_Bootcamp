// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// 2. Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const alphabeticalNames = names.sort();
console.log(alphabeticalNames);

let secretNumber = "";
for (let i of alphabeticalNames) {
  secretNumber = secretNumber + i.slice(0, 1);

  console.log(i);
}
console.log(secretNumber);
