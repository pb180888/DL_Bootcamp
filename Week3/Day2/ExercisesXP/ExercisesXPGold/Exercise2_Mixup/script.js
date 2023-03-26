// 1.Create 2 variables. The values should be strings. For example:

let str1 = "mix";
let str2 = "pod";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.

firstWord = str2.slice(0, 2) + str1.slice(2, 3);
secondWord = str1.slice(0, 2) + str2.slice(2, 3);

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

str3 = firstWord + " " + secondWord;

// 4. Finally console.log the new concatenated string.

console.log(str3);
