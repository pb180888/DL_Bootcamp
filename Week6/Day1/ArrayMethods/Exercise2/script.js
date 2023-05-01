const words = ["wow", "hey", "bye"];

// Check if at least one element of the array starts with the letter 'h'

let result = words.some((index) => {
  return index.slice(0, 1) === "h";
});
console.log(result);

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i].slice(0, 1));
//   if (words[i].slice(0, 1) === "h") {
//     console.log(words[i]);
//     break;
//   }
// }
