// 1. Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
const ending = (index) =>
  index === 1 || index === 2 || index === 3 ? ordinal[index] : ordinal[0];
colors.forEach((color, index) => {
  console.log(`${index + 1}${ending(index + 1)} choice is ${color} .`);
});
