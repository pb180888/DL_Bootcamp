// 1. Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// 2. Change the code below to nested arrow functions.
let landscape = function () {
  let result = "";

  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  //   result will be "____"
  mountain(4);
  //   result will be "____/''''\"
  flat(4);
  //   result will be "____/''''\____"

  return result;
};
console.log(landscape());
