// Instructions
// 1. Create a function that takes a string as an argument.
// 2. Have the function return:
//      The string but all letters in even indexes should be capitalized.
//      The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize(word) {
  newWord1 = "";
  newWord2 = "";
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0 || i === 0) {
      newWord1 = newWord1 + word[i].toUpperCase();
      newWord2 = newWord2 + word[i].toLowerCase();
    } else {
      newWord1 = newWord1 + word[i].toLowerCase();
      newWord2 = newWord2 + word[i].toUpperCase();
    }
  }
  console.log(newWord1, newWord2);
}

capitalize("sdgsdDFSDFSsdfs");
