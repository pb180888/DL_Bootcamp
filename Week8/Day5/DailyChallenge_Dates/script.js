// Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
// If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.
// Examples

// formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

// formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

// formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"

function formatDate(date) {
  console.log(date);

  newDate = JSON.stringify(date);
  console.log(newDate);

  numberArr = [];
  for (let i of newDate) {
    numberArr.push(Number(i));
  }
  console.log(numberArr);
  numberArr.splice(numberArr.length - 6);

  let string = "";
  numberArr.forEach((item) => {
    if (Number(item) || item === 0) {
      string = string + item;
    }
  });

  console.log(string);
}

formatDate(new Date(2020, 6, 4, 8, 0, 0));
formatDate(new Date(2019, 11, 31, 23, 59, 59));
formatDate(new Date(2020, 6, 4));
