// 1. Prompt the user for several words (separated by commas).

let severalWords = prompt("Enter several word separated by commas");
console.log(severalWords);
// 2. Put the words into an array.

let arrWords = severalWords.split(", ");
console.log(arrWords, typeof arrWords);

// 3. Console.log the words one per line, in a rectangular frame as seen below.
// 4. Check out the Hints and Requirements below.
//     For example, if the user gives you:
//     Hello, World, in, a, frame
//     you will transform it to : ["Hello", "World", "in", "a", "frame"]
//     that will get displayed as:

function maxLength(array) {
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxLength < array[i].length) {
      maxLength = array[i].length;
    }
  }
  return maxLength;
}
console.log(maxLength(arrWords));

function space(array, maxLength) {
  for (let i = 0; i < array.length; i++) {
    let difference = 0;
    let space = " ";
    if (array[i].length < maxLength) {
      difference = maxLength - array[i].length;
    }
    for (let y = 0; y < difference; y++) {
      space = space + " ";
    }

    console.log((array[i] = array[i] + space));
  }
}
space(arrWords, maxLength(arrWords));

function star(maxLength) {
  let line = "";
  let star = "*";
  for (let i = 0; i < maxLength + 4; i++) {
    line = line + star;
  }
  return line;
}
console.log(star(maxLength(arrWords)));

function Frame(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`* ${array[i]} *`);
  }
}
Frame(arrWords, maxLength(arrWords));

console.log(star(maxLength(arrWords)));
