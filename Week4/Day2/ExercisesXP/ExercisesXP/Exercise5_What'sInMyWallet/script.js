// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// 2. In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

function changeEnough(itemPrice, amountOfChange) {
  let amount = 0;

  let exchangeOfChange = [
    amountOfChange[0] * 0.25,
    amountOfChange[1] * 0.1,
    amountOfChange[2] * 0.05,
    amountOfChange[3] * 0.01,
  ];
  console.log(exchangeOfChange);
  for (let i of exchangeOfChange) {
    amount = amount + i;
  }
  if (amount >= itemPrice) {
    console.log(
      `I can buy, cause you have ${amount} and you need only ${itemPrice}`
    );
    return true;
  } else {
    console.log(
      `I can't buy, cause you have ${amount}, but you need ${itemPrice}`
    );
    return false;
  }
}

changeEnough(8, [25, 20, 5, 0]);

// 3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// 4. To illustrate:

// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
