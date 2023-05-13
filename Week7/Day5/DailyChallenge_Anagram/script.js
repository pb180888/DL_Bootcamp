// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"
// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

function indicatesTrueOrFalse(sentence1, sentence2) {
  string1 = sentence1.toLowerCase().split(" ").join("");
  string2 = sentence2.toLowerCase().split(" ").join("");
  if (string1.length !== string2.length) {
    return false;
  }
  const total = {};
  for (let letter of string1) {
    total[letter] = total[letter] + 1 || 1;
  }
  for (let letter of string2) {
    total[letter] = total[letter] ? total[letter] - 1 : -1;
  }
  const difference = Object.values(total);
  return difference.every((num) => num === 0);
}
console.log(indicatesTrueOrFalse("Hello my", "My Gello"));
console.log(indicatesTrueOrFalse("Hello my", "My Hello"));
