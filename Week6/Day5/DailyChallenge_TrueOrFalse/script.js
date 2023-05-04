// Create a function that returns true if all parameters are truthy, and false otherwise.
// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false
const date = [true, true, true, true, true];
const date1 = [false, 23, true, true, 1];
function allTruthy(date) {
  let resultArr = [];
  date.forEach((parameter) => {
    if (parameter == true) {
      result = true;
      resultArr.push(result);
    } else {
      result = false;
      resultArr.push(result);
    }
  });
  resultArr.includes(false) ? (mainResult = false) : (mainResult = true);
  return mainResult;
}
console.log(allTruthy(date));
allTruthy(date);
console.log(allTruthy(date1));
allTruthy(date1);
