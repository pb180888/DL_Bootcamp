// 1. Use the reduce() method to combine all of these into a single string.
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const newArr = epic.reduce((acc, item) => acc + item + " ");
console.log(newArr);
// along time ago in a galaxy far far away
