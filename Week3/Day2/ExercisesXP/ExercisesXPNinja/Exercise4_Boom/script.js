// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

let userNumber = Number(prompt("Enter the number"));
let n = "";
let newWord;
let boomWord = "boom";

if (userNumber === 2) {
  alert("It's not bigger than 2 and it's not less than 2");
} else {
  // If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

  // If the number given is evenly divisible by 5, return the string in ALL CAPS.
  if (userNumber % 5 === 0) {
    // If the number given is evenly divisible by 2, add a exclamation mark to the end.
    if (userNumber % 2 === 0) {
      // If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
      if (userNumber > 2) {
        for (let i = 0; i < userNumber; i++) {
          n = n + "o";
        }
        newWord = `b${n}m!`;
        alert(newWord.toUpperCase());
      }
      // If the number given is less than 2 : return “boom”
      else if (userNumber < 2) {
        alert(`${boomWord.toUpperCase()}!`);
      }
    } else if (userNumber % 2 !== 0) {
      // If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
      if (userNumber > 2) {
        for (let i = 0; i < userNumber; i++) {
          n = n + "o";
        }
        newWord = `b${n}m`;
        alert(newWord.toUpperCase());
      }
      // If the number given is less than 2 : return “boom”
      else if (userNumber < 2) {
        alert(`${boomWord.toUpperCase()}`);
      }
    }
  } else {
    // If the number given is evenly divisible by 2, add a exclamation mark to the end.
    if (userNumber % 2 === 0) {
      // If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
      if (userNumber > 2) {
        for (let i = 0; i < userNumber; i++) {
          n = n + "o";
        }
        newWord = `b${n}m!`;
        alert(newWord);
      }
      // If the number given is less than 2 : return “boom”
      else if (userNumber < 2) {
        alert(`${boomWord}!`);
      }
    } else if (userNumber % 2 !== 0) {
      // If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
      if (userNumber > 2) {
        for (let i = 0; i < userNumber; i++) {
          n = n + "o";
        }
        newWord = `b${n}m`;
        alert(newWord);
      }
      // If the number given is less than 2 : return “boom”
      else if (userNumber < 2) {
        alert(`${boomWord}`);
      }
    }
  }
}
