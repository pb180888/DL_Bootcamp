// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

function bottlesOfBeer() {
  let numberOfBottles = 0;
  let word = "";
  do {
    numberOfBottles = Number(prompt("Enter the number of bottles"), 0);
  } while (!Number(numberOfBottles));
  let song = "";
  let minusBottles = 0;
  let plusTakeOneMoreTime = 0;
  for (let i = 0; i < numberOfBottles; i++) {
    if (
      numberOfBottles - minusBottles > 1 &&
      numberOfBottles - minusBottles >= plusTakeOneMoreTime
    ) {
      if (plusTakeOneMoreTime < 1) {
        word = "it";
      } else {
        word = "them";
      }

      minusBottles = minusBottles + i;
      plusTakeOneMoreTime = plusTakeOneMoreTime + 1;
      bigFormula = numberOfBottles - minusBottles - plusTakeOneMoreTime;
      if (bigFormula <= 0) {
        bigFormula = 0;
      }
      song = `${numberOfBottles - minusBottles} bottles of beer on the wall \
        ${numberOfBottles - minusBottles} bottles of beer \
        Take ${plusTakeOneMoreTime} down, pass ${word} around \
        ${bigFormula} bottles of beer on the wall`;
      console.log(song);
    } else if (bigFormula <= 0) {
      break;
    }
  }
}
bottlesOfBeer();
