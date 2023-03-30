// 1. Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// FIRST VARIANT WITH FUNCTION

// let date1 = Number(prompt("Enter the date of birth of first person"));
// let date2 = Number(prompt("Enter the date of birth of second person"));
// let year = 0;
// let differnce = function (date1, date2) {
//   return Math.abs(date1 - date2);
// };
// differnce(date1, date2);
// console.log(differnce(date1, date2));

// if (date1 < date2) {
//   year = date1 + 2 * differnce(date1, date2);
//   console.log(
//     `Person who was born in ${date2} will be half age of older person who was born in ${date1} in ${year}`
//   );
// } else {
//   year = date2 + 2 * differnce(date1, date2);
//   console.log(
//     `Person who was born in ${date1} will be half age of older person who was born in ${date2} in ${year}`
//   );
// }

// SECOND VARIANT WITHOUT FUNCTION

let date1 = Number(prompt("Enter the date of birth of first person"));
let date2 = Number(prompt("Enter the date of birth of second person"));
let year = 0;

if (date1 < date2) {
  year = date1 + 2 * (date2 - date1);
  console.log(
    `Person who was born in ${date2} will be half age of older person who was born in ${date1} in ${year}`
  );
} else {
  year = date2 + 2 * (date1 - date2);
  console.log(
    `Person who was born in ${date1} will be half age of older person who was born in ${date2} in ${year}`
  );
}
