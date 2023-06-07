let { largeNumber, currentDate } = require("./main.js");
const b = 5;
console.log(largeNumber + b);
currentDate;
let http = require("http");
const server = http.createServer(handleResponse);
const port = 8080;
const host = "localhost";
function handleResponse(req, res) {
  res.end(`The date and time: ${currentDate}`);
  res.setHeader("Content-type", "text/html");
  res.writeHead(210);
}

server.listen(port, host, function () {
  console.log("I'm listening on port", port);
});
