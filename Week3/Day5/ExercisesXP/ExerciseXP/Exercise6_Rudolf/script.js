// 1. Given the object below and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
let sentence = "";
for (let i in details) {
  sentence = sentence + " " + i + " " + details[i];
}
console.log(sentence);
