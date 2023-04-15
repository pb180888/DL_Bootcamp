// Follow these steps :

// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
var form = document.querySelector("#libform");
var input = document.querySelectorAll("#libform > input");

var noun = document.getElementById("noun");
var adjective = document.getElementById("adjective");
var person = document.getElementById("person");
var verb = document.getElementById("verb");
var place = document.getElementById("place");
var buttonSubmit = document.querySelector("#lib-button");

// 2. Make sure the values are not empty
function checkOnEmpty() {
  var sentence = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i].value.length > 0) {
      sentence = sentence + input[i].value + " ";
    } else {
      return false;
    }
  }
  console.log(sentence);
  return sentence;
  // let newArr = sentence.split(" ");
  // return newArr;
}

buttonSubmit.addEventListener("click", function (event) {
  if (checkOnEmpty());
  event.preventDefault();
});

// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.
// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

// Here is I create button for shuffle
const shuffleButton = document.createElement("button");
const textForButton = document.createTextNode("Shuffle");
shuffleButton.appendChild(textForButton);
form.appendChild(shuffleButton);
document.body.appendChild(form);

// This function that shuffles elements in an array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function checkOnEmptyAndShuffle() {
  var sentence = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i].value.length > 0) {
      sentence = sentence + input[i].value + " ";
    } else {
      return false;
    }
  }
  var newSentence = "";
  var arrWords = sentence.split(" ");
  arrWords.pop();
  shuffle(arrWords);
  for (let i = 0; i < arrWords.length; i++) {
    newSentence = newSentence + arrWords[i] + " ";
  }
  console.log(newSentence);
}

shuffleButton.addEventListener("click", function (event) {
  if (checkOnEmptyAndShuffle());
  event.preventDefault();
});
