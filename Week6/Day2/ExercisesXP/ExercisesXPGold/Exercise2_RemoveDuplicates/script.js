// 1 .Write a JavaScript program to remove duplicate items in an array.
const myArr = [35, 66, 56, 78, 90, 66, 22, 45, 22, 33, 33, 33, 33, 33, 33, 33];
let uniqueChars = [];
myArr.forEach((element) => {
  if (!uniqueChars.includes(element)) {
    uniqueChars.push(element);
  }
});

console.log(uniqueChars);
