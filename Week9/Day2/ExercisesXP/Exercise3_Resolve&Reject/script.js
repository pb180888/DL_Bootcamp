// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promiseResolve = Promise.resolve(3);
promiseResolve.then((result) => console.log("Promise.resolve = ", result));
const promiseReject = Promise.reject("Boo");
promiseReject.catch((result) => console.log("Promise.reject = ", result));
