// 1. Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);
console.log(curriedSum(30)(1));
// the result of curriedSum(30)(1) will be 31
