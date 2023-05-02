// 1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// 2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((colors, item) =>
  console.log(`${item + 1}# choice is ${colors}`)
);
const someColorsInArr = colors.some((item) => {
  return item === "Violet";
});
console.log(someColorsInArr);
