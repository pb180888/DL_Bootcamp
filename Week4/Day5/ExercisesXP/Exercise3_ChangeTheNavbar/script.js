// 1. Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

const div = document.querySelector("div");
div.setAttribute("id", "socialNetworkNavigation");

// 2. We are going to add a new <li> to the <ul>.
//     First, create a new <li> tag (use the createElement method).

const newIl = document.createElement("li");

//     Create a new text node with “Logout” as its specified text.

const newText = document.createTextNode("Logout");

//     Append the text node to the newly created list node (<li>).

newIl.appendChild(newText);

//     Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

document.querySelector("ul").appendChild(newIl);

// 3. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

const firstElementChild =
  document.querySelector("ul >li:first-child").textContent;
console.log(firstElementChild);
const lastElementChild =
  document.querySelector("ul >li:last-child").textContent;
console.log(lastElementChild);
