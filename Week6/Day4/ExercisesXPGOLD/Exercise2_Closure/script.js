// 1. Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
addToTen(3);
console.log(addToTen(3));
// the result of addToTen(3) will be 13
