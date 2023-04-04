// Let’s create functions that calculate your vacation’s costs:

// 1. Define a function called hotelCost().
//     It should ask the user for the number of nights they would like to stay in the hotel.
//     If the user doesn’t answer or if the answer is not a number, ask again.
//     The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(numberOfNight) {
  const cost = 140;
  let price = 0;
  // let numberOfNight = 0;

  // do {
  //   numberOfNight = prompt(
  //     "How many nights would you like to stay in the hotel?",
  //     0
  //   );
  // } while (!Number(numberOfNight) && numberOfNight);
  price = numberOfNight * cost;
  let endOfNight = "";
  if (numberOfNight < 2) {
    endOfNight = "";
  } else {
    endOfNight = "s";
  }
  console.log(`The price for ${numberOfNight} night${endOfNight} is ${price}$`);
  return price;
}
// hotelCost();

// 2. Define a function called planeRideCost().
//     It should ask the user for their destination.
//     If the user doesn’t answer or if the answer is not a string, ask again.
//     The function should return a different price depending on the location.
//     “London”: 183$
//     “Paris” : 220$
//     All other destination : 300$

function planeRideCost(destination) {
  // let destination = "";
  // do {
  //   destination = prompt("Enter you destination", " ");
  // } while (Number(destination) && destination);

  // destination = destination.toLowerCase();
  // destination = destination.charAt(0).toUpperCase() + destination.slice(1);
  console.log(destination);

  const location = {
    London: 183,
    Paris: 220,
    Berlin: 200,
    Prague: 210,
    Chicago: 500,
  };
  if (destination in location) {
    console.log(`the price of ${destination} is ${location[destination]}$`);
    return location[destination];
  } else {
    console.log(`the price of ${destination} is 300$`);
    return 300;
  }
}
// planeRideCost();

// 3. Define a function called rentalCarCost().
//     It should ask the user for the number of days they would like to rent the car.
//     If the user doesn’t answer or if the answer is not a number, ask again.
//     Calculate the cost to rent the car. The car costs $40 everyday.
//     If the user rents a car for more than 10 days, they get a 5% discount.
//     The function should return the total price of the car rental.

function rentalCarCost(numberOfDay) {
  // let numberOfDay = 0;
  // do {
  //   numberOfDay = prompt("How many days would you like to rent a car?", 0);
  // } while (!Number(numberOfDay) && numberOfDay);
  const carCost = 40;
  let totalPrice = 0;
  if (numberOfDay > 10) {
    totalPrice = numberOfDay * (carCost - carCost * 0.1);
  } else {
    totalPrice = numberOfDay * carCost;
  }
  let endOfDay = "";
  if (numberOfDay < 2) {
    endOfDay = "";
  } else {
    endOfDay = "s";
  }
  console.log(
    `The rent car for ${numberOfDay} day${endOfDay} is ${totalPrice}$`
  );
  return totalPrice;
}
// rentalCarCost();

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// Call the function totalVacationCost()

// 5. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

function totalVacationCost() {
  let numberOfNight = 0;

  do {
    numberOfNight = prompt(
      "How many nights would you like to stay in the hotel?",
      0
    );
  } while (!Number(numberOfNight) && numberOfNight);

  let destination = "";
  do {
    destination = prompt("Enter you destination", " ");
  } while (Number(destination) && destination);
  destination = destination.toLowerCase();
  destination = destination.charAt(0).toUpperCase() + destination.slice(1);

  let numberOfDay = 0;
  do {
    numberOfDay = prompt("How many days would you like to rent a car?", 0);
  } while (!Number(numberOfDay) && numberOfDay);

  let first = hotelCost(numberOfNight);
  let second = planeRideCost(destination);
  let third = rentalCarCost(numberOfDay);
  const vacation = first + second + third;
  console.log(`The total price for your vacation is ${vacation}$`);
  return vacation;
}

totalVacationCost();
