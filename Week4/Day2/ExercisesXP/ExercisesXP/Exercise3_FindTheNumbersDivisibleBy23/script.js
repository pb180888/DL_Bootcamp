// 1.Create a function call isDivisible() that takes no parameter.

// 2. In the function, loop through numbers 0 to 500.

// 3. Console.log all the numbers divisible by 23.

// 4. At the end, console.log the sum of all numbers that are divisible by 23.

function isDivisible() {
  let sum = 0;
  let lineOfNumbers = "";
  for (let i = 0; i < 500; i++) {
    if (i % 23 === 0) {
      sum = sum + i;
      lineOfNumbers = lineOfNumbers + i + " ";
    }
  }
  console.log(lineOfNumbers);
  console.log(`The sum of all numbers that are divisible by 23 is ${sum}`);
}
isDivisible();
