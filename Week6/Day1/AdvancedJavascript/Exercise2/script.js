// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

let arr = [25, 339, 9, 45, 67];
function twoNumbers(a, b, operator) {
  var c;
  operator == true ? (c = a + b) : (c = a - b);
  console.log(c);
}
twoNumbers(arr[0], arr[4], true);
