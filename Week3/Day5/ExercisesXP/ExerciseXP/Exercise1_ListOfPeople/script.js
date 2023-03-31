// Part I - Review About Arrays

// 1. Write code to remove “Greg” from the people array.

const people = ["Greg", "Mary", "Devon", "James"];
const withoutGred = people.shift();
console.log(people);

// 2. Write code to replace “James” to “Jason”.

people.splice(people.indexOf("James"), 1, "Jason");
console.log(people);

// 3. Write code to add your name to the end of the people array.

people.push("Pavel");
console.log(people);

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

let copyOfSeveralPeople = people.slice(1, 3);
console.log(copyOfSeveralPeople);

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo"));

// 7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const last = people.length - 1;
console.log(people[last]);

// Part II - Loops

// 1. Using a loop, iterate through the people array and console.log each person.

for (let i in people) {
  console.log(people[i]);
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Pavel") {
    break;
  } else {
    console.log(people[i]);
  }
}
