// 1. Create a function that takes an object and returns the keys and values as separate arrays.
// 2. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysANDvalues(object) {
  console.log(Object.keys(object), Object.values(object));

  const newArr = Object.entries(object);
  stickArr = newArr
    .map((item) => item.reduce((acc, i) => acc + "*****" + i))
    .sort();
  finallyArr = stickArr.map((item) => item.split("*****"));
  result = Object.fromEntries(finallyArr);
  console.log(result);
}

keysANDvalues({ title: "History", author: "Ben Afleck", year: "2005" });
