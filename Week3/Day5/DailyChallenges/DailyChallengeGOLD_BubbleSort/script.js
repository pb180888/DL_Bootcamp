let numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1. Using the .toString() method convert the array to a string.

const numbersString = numbers.toString();
console.log(typeof numbersString[0]);
console.log(numbersString);

// 2. Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)

const numbersStringLine = numbers.join(" ");
console.log(numbersStringLine);

// 3. Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      // Swap values using a temporary variable
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(numbers);
