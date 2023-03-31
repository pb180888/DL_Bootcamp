// 1. Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

let userNumber = Number(prompt("Enter a number"));

// 2. While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

do {
  userNumber = Number(prompt("Enter a number"));
  console.log(userNumber);
  userNumber++;
} while (userNumber <= 10);
