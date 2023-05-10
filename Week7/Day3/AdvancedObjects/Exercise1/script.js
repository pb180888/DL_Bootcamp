// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".
let myObj = {
  name: "John",
  lastName: "Doe",
  age: 25,
  friends: ["Mark", "Lucie", "Ana"],
};

const newObj = Object.entries(myObj);
console.log(newObj);
let index = 0;
for ([key, value] of newObj) {
  index++;
  console.log(`The ${index} key is : ${key} The ${index} value is : ${value}`);
}
