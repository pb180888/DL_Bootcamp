const words = ["hello", "hey", "hola"];

// Check if all the elements of the array start with the letter 'h'
let result = words.every((index) => {
  return index.slice(0.1) === "h";
});
console.log(result);
