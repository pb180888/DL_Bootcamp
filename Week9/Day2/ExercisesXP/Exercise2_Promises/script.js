// 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.
// 2. How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// 3. Add code to catch errors and console.log ‘Ooops something went wrong’.
let word = true;
const promise = new Promise(function (resolve, reject) {
  setTimeout(
    () =>
      (word =
        word == true
          ? resolve("success")
          : reject("Ooops something went wrong")),
    4000
  );
});
// const promise = Promise.resolve(setTimeout(() => console.log("success"), 4000));
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
console.log(promise);
