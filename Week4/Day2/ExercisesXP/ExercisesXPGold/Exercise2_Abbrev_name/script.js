// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
  // Split the name into an array of first and last name
  var nameArr = name.split(" ");

  // Get the first name and first letter of last name, and concatenate them with a period
  var abbreviated = nameArr[0] + " " + nameArr[1].charAt(0) + ".";

  // Return the abbreviated name
  return abbreviated;
}
console.log(abbrevName("Robin Singh"));
