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

function frame(array) {
  let maxLength = 0;
  let star = "*";
  let line = " ";
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].length);

    if (maxLength < array[i].length) {
      maxLength = array[i].length;
    }
    console.log(`maxLength = ${maxLength} `);
    for (let y = 0; y < maxLength; y++) {
      line = line + star;
      console.log(line);
    }
  }
}

frame(arrWords);
