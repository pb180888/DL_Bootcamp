// 1. Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"
function repeat(argument, n = 1) {
  let sentence = "";
  for (let i = 1; i < n + 1; i++) {
    sentence = sentence + argument;
  }
  console.log(sentence);
}
repeat("Hello!", 3);
