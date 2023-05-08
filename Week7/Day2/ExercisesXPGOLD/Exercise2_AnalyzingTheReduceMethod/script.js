// Analyze this code, what will be the output ?
const starngeArr = [
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
console.log(starngeArr);
// [1, 2, 0, 1, 2, 3]
