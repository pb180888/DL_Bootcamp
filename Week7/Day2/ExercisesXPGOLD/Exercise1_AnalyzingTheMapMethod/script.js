const arrNew = [1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
});
// Analyze this code, what will be the output ?
// [2, 4, 6]
console.log(arrNew);
