// Part 1 : Quote Generator
// 1. Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// 2. In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…
// 3. Populate the array with a few quotes that you like.
const arrObjects = [
  {
    id: 0,
    author: `"Andrey Kurpatov"`,
    quote:
      "You don't control your behavior, you don't control your thoughts, but you are this behavior, you are these thoughts of yours.",
  },
  {
    id: 1,
    author: `"Ayn Rand"`,
    quote: "There's nothing more important in life than how you do your job.",
  },
  {
    id: 2,
    author: `"Yuval Noah Harari"`,
    quote: "Egoism is the highest form of altruism.",
  },
  {
    id: 3,
    author: `"George Orwell"`,
    quote:
      "If you are in the minority and even in the singular it does not mean that you are insane.",
  },
];

// 4. When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
arrMain = [];
function randomQuote() {
  // array with quotes of arrObjects
  arrQuote = [];
  arrObjects.forEach((item) => {
    arrQuote.push(item.quote + item.author);
  });
  //   generate random qoute
  function random() {
    let rand = Math.floor(Math.random() * arrQuote.length);
    return arrQuote[rand];
  }
  // create array with random quotes
  arrMain.push(random());
  // Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
  //   create function which make not repeat quotes in row
  function forArrMain(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i + 1, 1, random());
      }
    }
    for (let y = arr.length; y > 0; y--) {
      if (arr[y] === arr[y - 1]) {
        arr.splice(y - 1, 1, random());
      }
    }
    return arr;
  }
  forArrMain(arrMain);

  sentence = "";
  arrMain.forEach((item) => (sentence = sentence + item + " "));
  console.log(arrMain);
  console.log(sentence);
  document.querySelector(".placeQuote").innerHTML = sentence;
}

const buttonGenerateQoute = document.querySelector(".generateQuote");
buttonGenerateQoute.addEventListener("click", randomQuote);

// Part 2 : Add Buttons
// 1. In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// 2. In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.
