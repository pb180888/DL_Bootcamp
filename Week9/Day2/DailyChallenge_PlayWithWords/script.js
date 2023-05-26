// 1rst Daily Challenge
// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
//     If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words     uppercased.
//     else, reject the promise with a reason.
function makeAllCaps(arr) {
  let newArr = [];
  let promise = new Promise(function (resolve, reject) {
    const isString = (currentVAlue) => typeof currentVAlue == "string";
    if (arr.every(isString)) {
      resolve((newArr = arr.map((item) => item.toUpperCase())));
    } else {
      reject("There are no elements string in arr");
    }
  });
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  return newArr;
}
upperCaseArr1 = makeAllCaps(["hello", "good", "how", "are", "you"]);
upperCaseArr2 = makeAllCaps(["hello", "bye"]);

// 3. The second function called sortWords(), takes an array of words uppercased as an argument
//     If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//     else, reject the promise with a reason.
function sortWords(arr) {
  let promise = new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort());
    } else {
      reject(`The length of [${arr}] is less than 4`);
    }
  });
  promise.then(console.log).catch(console.error);
}

sortWords(upperCaseArr1);
sortWords(upperCaseArr2);
