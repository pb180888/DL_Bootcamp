// 1. Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);
console.log(add5(12));
// the result of add5(12) will be 17
