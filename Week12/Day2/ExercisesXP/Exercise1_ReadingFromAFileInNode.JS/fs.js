// 1. Create a text file and write something inside (example: ‘Some Text To See’)
// 2. Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

const fs = require("fs");
fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString("utf-8"));
});
