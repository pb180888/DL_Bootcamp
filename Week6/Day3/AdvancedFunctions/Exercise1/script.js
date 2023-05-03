// Analyse this code before executing it. Write explanatory comments. What will be the output ?
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
    console.log(counter);
  }
  plus();
}

add();

// counter will be 1
