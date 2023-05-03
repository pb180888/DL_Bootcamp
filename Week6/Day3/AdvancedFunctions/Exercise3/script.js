// Analyse this code before executing it. Write explanatory comments
const g = (n) => n + 1;
const f = (n) => n * 2;

const h = (x) => f(g(x));

h(20); //=> 42
console.log(h(20));
