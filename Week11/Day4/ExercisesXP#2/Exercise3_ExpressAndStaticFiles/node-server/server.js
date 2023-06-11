// 1. Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert).
// 2. In a server.js file create your server using express.
// 3. Your server on http://localhost:3000/ should serve the HTML file. Check out the lesson named Express Routes & Queries in the Course Notes, more specifically the part “How To Serve Static Files In Express”

const express = require("express");
const app = express();

app.use(express.static("../public"));
app.use(express.static("../public/script.js"));

app.get("/", (req, res) => {});

app.listen(5000, () => console.log("Example app listening on port 3000!"));
