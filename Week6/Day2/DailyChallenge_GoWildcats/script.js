const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
let usernames = [];
gameInfo.forEach((item) => usernames.push(`${nameUser(item)}!`));
function nameUser(item) {
  for (let i in item) {
    return item[i];
  }
}
console.log(usernames);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this : const winners = ["becky", "susy"]
const winners = [];

gameInfo.forEach((item) => winners.push(nameWinners(item)));
function nameWinners(item) {
  for (let i in item) {
    if (i === "score" && item[i] > 5)
      // console.log(item.username);
      return item.username;
  }
}
winners.pop();
winners.shift();
console.log(winners);

// 3. Find and display the total score of the users. (Hint: The total score is 71)
const arrScore = [];
gameInfo.forEach((item) => arrScore.push(score(item)));
function score(item) {
  for (let i in item) {
    if (i === "score") return item[i];
  }
}
let sum = 0;
arrScore.forEach((item) => (sum = sum + item));
console.log("The total score of the users is", sum);
