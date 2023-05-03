// Analyse this code before executing it. Write explanatory comments. What will be the output ?
let add = (function () {
  let counter = 0;
  function calculus() {
    counter += 1;
    console.log(counter);
    return counter;
  }
  return calculus;
})();

add();
add();
add();

// it seems to me it'll be 1 2 3
