// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// 1. Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0;
// 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const amountOfVAT = (sum) => sum * 0.17;

// 3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
const details = [
  200, -100, 146, 167, 2900, -500, -600, 400, -2000, 670, 320, -600, 1200,
];
// 4. Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
let expenses = [];
details.forEach((sum) =>
  sum < 0 ? expenses.push(sum + amountOfVAT(sum)) : expenses.push(sum)
);
// details.forEach((sum) =>
//   sum < 0 ? console.log(sum + amountOfVAT(sum)) : console.log(sum)
// );
// 5. Display your current bankAccount standing at the end of the month.
expenses.forEach((sum) => (bankAmount = bankAmount + sum));
console.log(bankAmount);
