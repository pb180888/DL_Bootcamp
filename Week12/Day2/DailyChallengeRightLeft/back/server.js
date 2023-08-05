const express = require("express");
const app = express();
const fs = require("fs");

fs.readFile("../RightLeft.txt", "utf-8", (err, data) => {
  arr = [];
  pos = [];
  if (err) {
    console.log(err);
  }
  const str = JSON.stringify(data);
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  let sum = 0;
  for (let item = 0; item < arr.length; item++) {
    if (arr[item] === ">") {
      sum = sum + 1;
    }
    if (arr[item] === "<") {
      sum = sum - 1;
    }

    if (sum === -1) {
      pos.push(item);
    }
  }
  console.log("steps to right =", sum);
  console.log("The first position where position equal -1:", pos[0]);
});
app.get("/", (req, res) => {});

app.listen(3000);
