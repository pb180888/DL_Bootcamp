const fs = require("fs");
fs.readFile("RightLeft.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  text = data.toString("utf-8");
  //   console.log(data.toString("utf-8"));
  newArr = text.split("");
  console.log(newArr);
  // To count the number of the current point after the number of steps
  function numberPointAfterSteps(steps) {
    numberPoint = 0;
    for (let i = 0; i < newArr.length && i < steps; i++) {
      if (newArr[i] === ">") {
        numberPoint = numberPoint + 1;
      }
      if (newArr[i] === "<") {
        numberPoint = numberPoint - 1;
      }
    }
    console.log(`Sum of points: ${numberPoint} on the ${steps} number of step`);
  }
  numberPointAfterSteps(89);

  //   Use the corresponding operations to calculate the final position at the end of the file - The answer should be: 74 steps to the right.
  stepsToRight = 0;
  // Use the corresponding operations to calculate the number of steps needed to hit position the -1 for the first time - The answer should be: 1795 steps.
  sum = 0;
  arrMinusOne = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === ">") {
      stepsToRight = stepsToRight + 1;
    }
    if (newArr[i] === "<") {
      stepsToRight = stepsToRight - 1;
    }
    if (stepsToRight === -1) {
      arrMinusOne.push(i);
    }
  }
  console.log("Steps to the right:", stepsToRight);
  console.log("Thi first time of total steps -1: ", arrMinusOne[0]);
});
