const Regex = require("regex");
const regex = /[0-9]/;
// Use the regular expression module to extract numbers from a string
// Example
// returnNumbers('k5k3q2g5z6x9bn')
// Excepted output : 532569

const str = "k5k3q2g5z6x9bn";
const matches = str.match(/\d+/g);
result = "";
for (let i of matches) {
  result = result + i;
}
console.log(matches);
console.log(result);
