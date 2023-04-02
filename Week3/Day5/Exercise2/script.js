// 1. Write a JavaScript for loop that will go through the variable names.
let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
  // if the item is not a string, pass.
  if (typeof names[i] !== "string") {
    // console.log(`${names[i]} is not string`);
  }
  if (typeof names[i] === "string") {
    // console.log(`${names[i]} is  string`);

    // if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
    if (names[i].charAt(0) === names[i].charAt(0).toUpperCase()) {
      console.log(names[i]);
    } else {
      names[i] = names[i][0].toUpperCase() + names[i].slice(1);
      console.log(names[i]);
    }
  }
}

// 2. Write a JavaScript for loop that will go through the variable names
for (let i in names) {
  // if the item is not a string, go out of the loop.
  if (typeof names[i] !== "string") {
  }
  // if the item is a string, display it. else
  else {
    console.log(names[i]);
  }
}
