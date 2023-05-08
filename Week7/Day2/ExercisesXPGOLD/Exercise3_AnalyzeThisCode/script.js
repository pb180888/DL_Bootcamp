const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});
// 1. What is the value of i ?
// i is index of place in array
console.log(newArray);
