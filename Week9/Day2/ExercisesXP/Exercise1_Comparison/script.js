// 1.Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
//     the promise resolves if the argument is less than 10
//     the promise rejects if argument is greater than 10.
function compareToTen(num) {
  let promise = new Promise(function (resolve, reject) {
    num = num < 10 ? resolve("response: resolve") : reject("response: reject");
  });

  return promise;
}
console.log(compareToTen(9));
console.log(compareToTen(11));
