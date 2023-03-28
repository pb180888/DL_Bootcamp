// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let myDate = {
  username: "Paul",
  password: "inkognito",
};

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [];
database.push(myDate);
console.log(database);

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newfeed = [
  { username: "Same", timeline: 1 },
  { username: "Mike", timeline: 2 },
  { username: "Luci", timeline: 3 },
];
console.log(newfeed);
