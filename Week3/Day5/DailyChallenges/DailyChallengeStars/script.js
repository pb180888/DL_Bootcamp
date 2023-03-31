// 1. Write a JavaScript program that recreates the pattern below.
// 2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// 3. Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

let star = "";
for (let i = 0; i < 6; i++) {
  star = star + "* ";
  console.log(star);
}

for (let i = 0; i < 6; i++) {
  let newStar = "";
  for (let y = 0; y <= i; y++) {
    newStar = newStar + "* ";
  }
  console.log(newStar);
}
