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

let parallel = async function () {
  console.log("==PARALLEL with await Promise.all==");
  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
};

setTimeout(parallel, 5000);

// 1. Analyze the code provided above what will be the outcome?
// console.log("==PARALLEL with await Promise.all==");
// console.log("starting slow promise");
// console.log("starting fast promise");
// console.log("fast promise is done");
// resolve("fast");
// console.log("slow promise is done");
// resolve("slow");
