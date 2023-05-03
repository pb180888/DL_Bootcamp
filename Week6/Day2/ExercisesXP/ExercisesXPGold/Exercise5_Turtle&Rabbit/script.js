// Using this code :
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// 1. Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";
const resultTurtle = turtle.padStart(9);
const resultRabbit = rabbit.padStart(9);
console.log(startLine);
console.log(resultTurtle);
console.log(resultRabbit);
