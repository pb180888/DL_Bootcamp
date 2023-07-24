const express = require("express");
const app = express();
const bp = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }));
// parse application/json
app.use(bp.json());
app.use(express.static("../front"));
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000);
