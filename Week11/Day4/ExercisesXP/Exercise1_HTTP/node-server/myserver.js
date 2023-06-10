// Exercise 1 : HTTP
// Instructions
// 1. Create a new folder, name it - node-server
// 2. Create a server file, name it - myserver.js
// 3. In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Hello</h1> <h1>How are you?</h1> <i>I'm ok</i>");
});
server.listen(3000);
