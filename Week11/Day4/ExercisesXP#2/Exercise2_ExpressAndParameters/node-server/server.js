// 1. In the server.js file, create your server using express.
// 2. Create a route /, and use a GET request method.
//      The path of the route should contain the route parameter id.
//      The handler function of the route should respond with the value of the route parameter. Check out req.params.
// 3. Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// 4. The response should be the JSON Object. Console.log this object and display it on the DOM.

const express = require("express");
const app = express();
app.get("/:id", (req, res) => {
  const idObj = {
    ID: req.params.id,
  };
  console.log("req.params: ", req.params);
  res.send(idObj);
});
app.listen(3000);
