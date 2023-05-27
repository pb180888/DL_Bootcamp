// 1rst Daily Challenge
// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
//     If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words     uppercased.
//     else, reject the promise with a reason.
function makeAllCaps(arr) {
  let newArr = [];
  let promise = new Promise(function (resolve, reject) {
    const isString = (currentValue) => typeof currentValue == "string";
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

// /
// /
// /
// /
// /
// /
// /
// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

// 1. Create three functions. The two first functions should return a promise..

// 2. The first function is named toJs():
//  this function converts the morse json string provided above to a morse javascript object.
//  if the morse javascript object is empty, throw an error (use reject)
//  else return the morse javascript object (use resolve)
function toJs(json) {
  const promise = new Promise((resolve, reject) => {
    obj = JSON.parse(json);
    counter = 0;
    for (let i in obj) {
      counter++;
    }
    if (counter < 1) {
      reject("object is empty");
    } else {
      resolve(obj);
    }
    // console.log(counter);
    // console.log(obj);
  });
  promise.then(console.log).catch(console.log);
  return obj;
}
const morseJS = toJs(morse);

// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
function isWorkOk(userData, letters) {
  const lowerCase = userData.toLowerCase();
  const arrUserData = lowerCase.split("");
  return arrUserData.every((let) => letters.includes(let));
}

function converWordToMorse(userData, morseJS) {
  const lowerCase = userData.toLowerCase();
  const arrUserData = lowerCase.split("");
  newArr = [];
  newArr = arrUserData.map((letter) => morseJS[letter]);
  return newArr;
}
function createObject(userData, morseJS) {
  const lowerCase = userData.toLowerCase();
  const arrUserData = lowerCase.split("");
  newArr = [];
  newArr = arrUserData.map((letter) => morseJS[letter]);
  newObject = {};
  newObject.word = lowerCase;
  newObject.morse = newArr;
  return newObject;
}

function toMorse(morseJS) {
  const userData = prompt("Enter a word or sentence");

  const letters = Object.keys(morseJS);
  emptyArr = [];

  promise = new Promise((resolve, reject) => {
    if (!isWorkOk(userData, letters)) {
      reject("character doesn’t exist");
    } else {
      resolve(converWordToMorse(userData, morseJS));
    }
  });
  promise.catch(console.error).then(console.log);
  return createObject(userData, morseJS);
}

// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

function joinWords(morseTranslation) {
  const divWord = document.createElement("div");
  divWord.innerHTML = `"${morseTranslation.word}", gives you:`;
  document.body.appendChild(divWord);
  for (let i of morseTranslation.morse) {
    const divMorse = document.createElement("div");
    divMorse.innerHTML = i;
    document.body.appendChild(divMorse);
  }
}
joinWords(toMorse(morseJS));
