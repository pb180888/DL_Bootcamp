// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// 1. Create a function called findAvg(gradesList) that takes an argument called gradesList.
gradesList = [45, 56, 67, 78, 89, 90];
console.log(`Array is being used for counting average [${gradesList}]`);
let findAvg = function (gradesList) {
  let sum = 0;
  for (let i of gradesList) {
    sum = sum + i;
  }
  average = sum / gradesList.length;
  return average;
};
console.log(findAvg(gradesList));

// 2. Your function must calculate and console.log the average.

// 3. If the average is above 65 let the user know they passed

// 4. If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

let knowAboutPassed = function (findAvg) {
  if (findAvg > 65) {
    console.log(`The average number(${findAvg}) of array are more than 65`);
  } else {
    console.log(`${findAvg} is less than 65. You need to repeat the course`);
  }
};
knowAboutPassed(findAvg(gradesList));
