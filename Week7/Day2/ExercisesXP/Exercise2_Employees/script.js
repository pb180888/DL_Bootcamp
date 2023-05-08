const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// 1. Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
const welcomeStudents = users.map((item) => `Hello ` + item.firstName);
console.log(welcomeStudents);

// 2.Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResident = users.filter(
  (item) => item.role === "Full Stack Resident"
);
console.log(fullStackResident);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const newArr = users
  .filter((item) => item.role === "Full Stack Resident")
  .map((item) => item.lastName)
  .map((item) => item.toUpperCase());
console.log(newArr);
