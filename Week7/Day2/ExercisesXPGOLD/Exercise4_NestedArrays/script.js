// 1. Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
newArr = array.flat(2);
console.log(newArr);
// Bonus Try to do it on one line.
// 2. Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
const newGreeting = greeting.map((item) =>
  item.reduce((acc, num) => acc + " " + num)
);
console.log(newGreeting);
// 3. Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
(function () {
  newGreeting[0] = "Hello young grasshopper";
  const stringGreeting = newGreeting.reduce((acc, num) => acc + " " + num);
  console.log(stringGreeting);
})();

// 4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const newTrapped = trapped.flat(Infinity);
console.log(newTrapped);
