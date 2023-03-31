// 1. Loop through the array below and determine whether or not each number is divisible by three.

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i of numbers) {
  if (i % 3 === 0) {
    console.log(`${i} is divisible by three`);
  } else {
    console.log(`${i} is'not divisible by three`);
  }
}

// 2. Each time you loop console.log true or false.
