// 1. Prompt the user for a string. It must be a verb.

let string = prompt("Type a verb");

let end = string.slice(string.length - 3, string.length);

// 2. If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.

if (string.length >= 3 && end !== "ing") {
  string = string + "ing";
  console.log(string);
}

// 3. If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
else if (string.length >= 3 && end === "ing") {
  string = string + "ly";
  console.log(string);
}

// 4. If the length of the string is less than 3, leave it unchanged.
else {
  console.log(string);
}

// Example:

//   The string is : "swim" , your program should console.log : "swimming"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go"
