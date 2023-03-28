// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:
// Using prompt() and alert(), ask a user for their age.

let age = Number(prompt("Enter your age"));

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off

if (age < 18) {
  alert(`Sorry, you are too young to drive this car. Powering off`);
}

// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
else if (age === 18) {
  alert(`Congratulations on your first year of driving. Enjoy the ride!`);
}
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
else {
  alert(
    `IF they say they are over 18, respond with: "Powering On. Enjoy the ride!`
  );
}
