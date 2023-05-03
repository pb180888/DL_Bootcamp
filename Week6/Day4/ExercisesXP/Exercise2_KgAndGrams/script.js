// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.
function exchangeKgGr1(kilogram) {
  gramm = kilogram * 1000;
  console.log(`${kilogram} kg is ${gramm} gr`);
  return gramm;
}
exchangeKgGr1(50);
// 2. Then, use function expression and invoke it.

const exchangeKgGr2 = function (kilogram) {
  gramm = kilogram * 1000;
  console.log(`${kilogram} kg is ${gramm} gr`);
  return gramm;
};
exchangeKgGr2(60);
// 3. Write in a one line comment, the difference between function declaration and function expression.
// you can invoke  function declaration in any place of code
// 4. Finally, use a one line arrow function and invoke it.
const exchangeKgGr3 = (kilogram) => (
  (gramm = kilogram * 1000), console.log(`${kilogram} kg is ${gramm} gr`)
);
exchangeKgGr3(90);
