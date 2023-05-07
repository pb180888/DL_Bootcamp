// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

// The output should be 85
let party = [
  {
    desert: "Chocolate Mousse",
    calories: 30,
  },
  {
    desert: "Apple Pie",
    calories: 15,
  },
  {
    desert: "Croissant",
    calories: 50,
  },
  {
    desert: "Strawberry Icecream",
    calories: 5,
  },
];
const result = party.filter((word) => word.desert !== "Apple Pie");
// console.log(result);
let newArr = result.map((val, i, arr) => {
  return val.calories;
});
// console.log(newArr);

let sum = newArr.reduce((acc, val) => {
  return acc + val;
});
console.log(sum);
