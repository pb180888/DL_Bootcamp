// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.

let age = [20, 5, 12, 43, 98, 55];
console.log(age);
// 1. Console.log the sum of all the numbers in the age array.
let sum = 0;
for (let i of age) {
  sum = sum + i;
}
console.log(`sum of all the numbers in the array is ${sum}`);

// 2. Console.log the highest age in the array.
let high = 0;
for (let i of age) {
  if (high < i) {
    high = i;
  }
}
console.log(`highest age in the array is ${high}`);
