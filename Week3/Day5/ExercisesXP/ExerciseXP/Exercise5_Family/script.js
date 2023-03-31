// 1. Create an object called family with a few key value pairs.

const family = {
  mother: "Evgeniya",
  father: "Vadim",
  son: "Pavel",
};

// 2. Using a for in loop, console.log the keys of the object.

for (let i in family) {
  console.log(i);
}

// 3. Using a for in loop, console.log the values of the object.
for (let i in family) {
  console.log(family[i]);
}
