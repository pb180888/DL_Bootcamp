// 1. Write a JavaScript program to find the sum of all elements in an array.

function sum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });
  console.log(sum);
  return sum;
}
const myArr = [32, 45, 78, 123, 56, 23, -20];
sum(myArr);
