// 1. Use Express to create a few routes:
//      The route /aboutMe/:hobby sends the name of one hobby (ie. the value of the route parameter). If the    parameter is not a string (ie. numbers or else), set the status to 404.
//      The route /pic : displays an HTML file with a picture of your choice.
//      The route /form: displays an HTML file.
// Requirements:
//      The HTML file must be in the public folder.
//      The HTML file must contain a form to contact you.
//      The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the browser at the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.

const express = require("express");
const app = express();
app.use("/form", express.static("../public"));
app.use("/form", express.static("../public/script.js"));
app.use(express.json());
app.get("/aboutMe/:hobby", (req, res) => {
  if (isOnlyLetters(req.params.hobby)) {
    res.send(`hobby: ${req.params.hobby}`);
  } else {
    res.sendStatus(404);
  }
  //   res.send(res.statusCode);
});

app.get("/pic", (req, res) => {
  res.send(
    "<img src ='https://mobimg.b-cdn.net/v3/fetch/32/3221e20bcdc74b011457cc0d03fc77b7.jpeg'/>"
  );
});
app.post("/formData", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} sent you a message: "${message}"`);
});

app.listen(3000);

// function is for checking on only letters
function isOnlyLetters(str) {
  const noNumberRegex = /^[A-Za-z]+$/;
  return noNumberRegex.test(str);
}
