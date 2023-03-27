// 1.Ask the user for a string of numbers separated by commas
let numbers = prompt(`Enter the numbers separated by commas`);
// 2.Console.log the sum of the numbers.

let arrayNumbers = numbers.split(",");
console.log(arrayNumbers);
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  arrayNumbers[i] = Number(arrayNumbers[i]);
  console.log(typeof arrayNumbers[i]);
  sum = sum + arrayNumbers[i];
}
alert(`The sum of your numbers equal ${sum}`);
