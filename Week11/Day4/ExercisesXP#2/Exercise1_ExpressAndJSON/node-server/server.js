// 1. Create a public folder containing two files : index.html and script.js
// 2. Outside of the public folder, create a file named server.js.
// 3. In the server.js file, create an express server. Create a GET request to the route /users.
// The handler function of the /users route should send a stringified version of this javascript object const user = {firstname: 'John',lastname: 'Doe'}.
// 4. In the script.js file, fetch the server at the route /users and get the response.
// 5. The response should be the JSON Object. Console.log this object and display it on the DOM.

const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
let i = 0;
app.get("/users", (req, res) => {
  const user = { firstname: "John", lastname: "Doe" };
  console.log("I'm listening", i++);
  res.send(user);
});

app.listen(3000);
