// 1. Create an array called colors where the value is a list of your five favorite colors.

let colors = ["black", "grey", "red", "green", "blue"];
let suffixes = ["st", "nd", "rd", "th", "th"];

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choise is ${colors[i]}`);
}

// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choise is ${colors[i]}`);
}
