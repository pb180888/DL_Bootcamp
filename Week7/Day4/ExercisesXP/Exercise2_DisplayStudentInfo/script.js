const datePerson = {
  first: "John",
  last: "Smith",
};
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// 1. Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
