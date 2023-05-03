// Analyse the code before executing it. What will be the output
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

// console.log will be "Hello";
