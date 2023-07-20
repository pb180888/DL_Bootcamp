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

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]);
      console.log(messages[1]);
    }
  );
};

setTimeout(concurrentPromise, 1000);

// 1. Analyze the code provided above what will be the outcome?

// console.log("==CONCURRENT START with Promise.all==");
// console.log("starting slow promise");
// console.log("starting fast promise");
// console.log("fast promise is done");
// console.log("slow promise is done");
// slow //
// fast//
