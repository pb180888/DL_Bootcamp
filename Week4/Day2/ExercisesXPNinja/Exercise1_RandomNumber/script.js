// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
function getRandomInt(max) {
  do {
    number = Math.floor(Math.random() * max);
  } while (number % 2 !== 0);
  console.log(number);
}
getRandomInt(100);
