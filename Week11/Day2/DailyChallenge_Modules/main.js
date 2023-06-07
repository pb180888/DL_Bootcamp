// Part I:
// 1. Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

const largeNumber = 356;
function currentDate() {
  const date = new Date();
  console.log(date);
  return date;
}

module.exports = {
  largeNumber,
  currentDate: currentDate(),
};

// 2. Use the exported module in a script.js file.

// 3. In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

// Part II:
//  Before starting the exercises, check out the lesson named Node.js Application in the Course Notes.

// 1. In the script.js file create a server using the http module (require('http')).

// 2. Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.

// 3. Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)

// 4. Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”

// Part III:
// 1. In the main.js, create a function that returns the current date and time. Export the module.

// 2. Use the exported module in a script.js file.

// 3. Create a server with http and set the response header to 'text/html'. Respond with an HTML paragraph that outputs the current date and time from the exported module.

// 4. Your server should run on http://localhost:8080/
