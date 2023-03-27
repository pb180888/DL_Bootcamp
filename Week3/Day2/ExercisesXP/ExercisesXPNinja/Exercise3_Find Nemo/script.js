// Hint: if statement (tomorrow’s lesson)

// 1.Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"

const sentence = prompt(`Give me a sentence containing the word “Nemo”`);

// 2.Find the word “Nemo”

let indexNemo = sentence.indexOf("Nemo");
console.log(indexNemo);

// 3.Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".

// 4.If you can’t find Nemo, console.log “I can’t find Nemo”.

if (indexNemo === -1) {
  console.log(`I can’t find Nemo`);
} else {
  console.log(`I found Nemo at ${indexNemo} position`);
}
