// The point of this challenge is to display a list of two books on your browser.

// 1. In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// 2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// 3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
let allBooks = [
  {
    title: "Atlas shrugged",
    author: "Ayn Rand",
    image: {
      URL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405868167i/662.jpg",
    },
    alreadyRead: true,
  },
  {
    title: "The elephant in the brain: hidden motives in everyday life",
    author: "Simler Kevin, Hanson Robin",
    image: {
      URL: "https://img4.labirint.ru/rc/b8f9b29c0ed211c17bcb8d96af78723e/363x561q80/books85/849078/cover.jpg?1647444365",
    },
    alreadyRead: true,
  },
];

// 4. Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let textElement;

const accessToDiv = document.querySelector(".listbook");
const newTab = document.createElement("table");
const tr1 = document.createElement("tr");
document.body.appendChild(tr1);

// first tr for tr1
const td1ForTr1 = document.createElement("td");
td1ForTr1.style.padding = "1%";
td1ForTr1.style.border = "1px solid black";
td1ForTr1.style.fontSize = "1.5em";
let textTd1ForTr1 = document.createTextNode(
  `${allBooks[0].title} wriiten by ${allBooks[0].author}`
);
td1ForTr1.appendChild(textTd1ForTr1);
tr1.appendChild(td1ForTr1);
if (allBooks[0].alreadyRead == true) {
  td1ForTr1.style.color = "red";
}
// second tr for tr1
const td2ForTr1 = document.createElement("td");
td2ForTr1.style.padding = "1%";
td2ForTr1.style.border = "1px solid black";
td2ForTr1.style.fontSize = "1.5em";
let textTd2ForTr1 = document.createTextNode(
  `${allBooks[1].title} written by ${allBooks[1].author}`
);
if (allBooks[1].alreadyRead == true) {
  td2ForTr1.style.color = "red";
}

td2ForTr1.appendChild(textTd2ForTr1);
tr1.appendChild(td2ForTr1);

const tr2 = document.createElement("tr");
document.body.appendChild(tr2);

// first tr for tr2
const td1ForTr2 = document.createElement("td");
td1ForTr2.style.border = "1px solid black";
let photo1 = document.createElement("img");
photo1.style.width = "100px";
photo1.style.margin = "0 2%";
photo1.src = `${allBooks[0].image.URL}`;
td1ForTr2.appendChild(photo1);
tr2.appendChild(td1ForTr2);

// second tr for tr2
const td2ForTr2 = document.createElement("td");
td2ForTr2.style.border = "1px solid black";
let photo2 = document.createElement("img");
photo2.style.width = "100px";
photo2.style.margin = "0 2%";
photo2.src = `${allBooks[1].image.URL}`;
td2ForTr2.appendChild(photo2);
tr2.appendChild(td2ForTr2);

newTab.appendChild(tr1);
newTab.appendChild(tr2);
document.body.appendChild(newTab);
