// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// 1. Create a function named calculateTip() that takes no parameter.
// 2. Inside the function, use prompt to ask John for the amount of the bill.
// 3. Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// 4. Console.log the tip amount and the final bill (bill + tip).

// 5. Call the calculateTip() function.

function calculateTip() {
  let bill = Number(prompt("Enter the amount of the bill"));
  if (bill < 50) {
    tip = bill * 0.2;
  } else if (bill > 50 && bill < 200) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.1;
  }
  console.log(bill + tip);
}
calculateTip();
