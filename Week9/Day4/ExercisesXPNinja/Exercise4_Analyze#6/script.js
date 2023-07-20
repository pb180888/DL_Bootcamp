let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
  console.log("==PARALLEL with Promise.then==");
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

setTimeout(parallelPromise, 13000);

// Analyze the code provided above what will be the outcome?
// after 13 sec
// console.log("==PARALLEL with Promise.then==");
// console.log("starting slow promise");
// console.log("starting fast promise");
// console.log("fast promise is done");
// resolve("fast");
// console.log("slow promise is done");
// resolve("slow");
