// 1. Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10));
compose(add1, add5)(10);
// the result of compose(add1, add5)(10) will be 16
