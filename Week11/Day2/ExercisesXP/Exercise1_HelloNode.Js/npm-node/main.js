// Exercise 1 : Hello Node.Js
// 1. Create a new folder called - npm-node
// 2. Create a JS file called - main.js
// 3. Add the following code to the file main.js :

// const a = 5;
// const b = 10;

// 4 .Write some more code in the main.js file so when you run it in the command prompt it logs Hello you are 15

const a = 5;
const b = 10;
function age() {
  console.log(`Hello you are ${a + b}`);
}
module.exports = {
  age: age,
};
