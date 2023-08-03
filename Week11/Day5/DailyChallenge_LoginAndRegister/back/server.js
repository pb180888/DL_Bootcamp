const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const users = [];
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static("../front"));
app

  .get("/registerForm", (req, res) => {
    res.send(users);
  })
  .post("/register", (req, res) => {
    const user = req.body;
    if (
      users.some(
        (item) =>
          item.username === user.username && item.password === user.password
      )
    ) {
      res.status(400).send({ message: "User already exists" });
    } else {
      users.push(user);
      res.send({
        message: "Hello Your account is now created",
        // user,
      });
    }
  })
  .get("/loginForm", (req, res) => {
    res.send(users);
  })
  .post("/login", (req, res) => {
    const user = req.body;
    if (
      users.some(
        (item) =>
          item.username === user.username && item.password === user.password
      )
    ) {
      res.send({ message: `Hi ${user.username} welcome back again` });
    } else {
      res.send({
        message: "Username is not registered",
      });
    }
  });

app.listen(port, () => {
  console.log(`I'm here`);
});
