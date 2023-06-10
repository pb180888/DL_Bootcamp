// 1. Create a server file, name it - server.js
// 2. In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

const http = require("http");
const server = http.createServer((req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.hasHeader("Content-type", "application/json");
  res.end(JSON.stringify(user));
});

server.listen(8080);
