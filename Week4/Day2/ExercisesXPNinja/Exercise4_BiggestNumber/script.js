// 1. Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;

function biggestNumberInArray(arrayNumber) {
  let max = 0;
  for (let i = 0; i < arrayNumber.length - 1; i++) {
    if (arrayNumber[i] > arrayNumber[i + 1]) {
      max = arrayNumber[i];
    } else {
      max = arrayNumber[i + 1];
    }
  }
  console.log(max);
}
biggestNumberInArray([23, -2, 56, 3, 66, -34, 234]);
