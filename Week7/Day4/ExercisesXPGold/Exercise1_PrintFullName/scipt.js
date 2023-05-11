// 1. Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// 2. The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'})
// // 'Your full name is Elie Schoppik`
const person = {
  first: "Jhon",
  last: "Green",
};
function printFullName(studentObj) {
  console.log(Object.values(studentObj));
  console.log(
    `Your full name is ${Object.values(studentObj)[0]} ${
      Object.values(studentObj)[1]
    }`
  );
}
printFullName(person);
printFullName({ first: "Elie", last: "Schoppik" });
