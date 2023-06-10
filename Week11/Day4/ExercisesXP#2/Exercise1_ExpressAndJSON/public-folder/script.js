// 1. Create a public folder containing two files : index.html and script.js
// 2. Outside of the public folder, create a file named server.js.
// 3. In the server.js file, create an express server. Create a GET request to the route /users.
// The handler function of the /users route should send a stringified version of this javascript object const user = {firstname: 'John',lastname: 'Doe'}.
// 4. In the script.js file, fetch the server at the route /users and get the response.
// 5. The response should be the JSON Object. Console.log this object and display it on the DOM.

async function getData() {
  const resp = await fetch("http://localhost:3000/users");
  const data = await resp.json();
  console.log(data);
  document.querySelector(
    ".container"
  ).innerHTML = `firstname: ${data.firstname}, lastname: ${data.lastname}`;
}
getData();
