const words = ["wow", "hey", "bye"];

// Check if at least one element of the array starts with the letter 'h'

words.some((index) => {
  console.log(index.slice(0, 1));
  return index.slice(0, 1) === "h";
});

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i].slice(0, 1));
//   if (words[i].slice(0, 1) === "h") {
//     console.log(words[i]);
//     break;
//   }
// }
