// 1. Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// [`bread`,`carrot`,`potato`,`chiken`,`apple`,`orange`]

// ------2------
const country = "USA";
console.log([...country]);
// [`U`,`S`,`A`]

// ------Bonus------

let newArray = [...[, ,]];
console.log(newArray);
// underfind
