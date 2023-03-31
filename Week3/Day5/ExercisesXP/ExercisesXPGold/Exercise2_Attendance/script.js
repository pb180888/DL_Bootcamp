// Given the object below where the key is the student’s name and the value is the country they are from.

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

// 1. Prompt the student for their name.

let userName = prompt("Enter your name").toLowerCase();

// let formatName = userName[0].toUpperCase() + userName.slice(1);
// console.log(formatName);

// 2. If the name is in the object, console.log the name of the student and the country they come from.

if (userName in guestList) {
  console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}`);
} else {
  console.log(`Hi! I'm a guest.`);
}

// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// 3. If the name is not in the object, console.log: "Hi! I'm a guest."
