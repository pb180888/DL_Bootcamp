const users = { user1: 18273, user2: 92833, user3: 90315 };
// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const newArr = Object.entries(users);
console.log(newArr);
