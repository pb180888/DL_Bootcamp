// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// 1. Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// 2. At this point continuously prompt player 2 for a letter.
// 3. If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// 4. If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// 5. If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// 6. Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// 7. If player 1 wins, display a message that says CONGRATS YOU WIN.

function guessWord() {
  var word = "";
  do {
    word = prompt(
      "Enter your word. The word must have a minimum of 8 letters",
      ""
    );
  } while (Number(word) || word.length < 8);
  word = word.toUpperCase();
  console.log(word);
  let wordStar = "";
  for (let i = 0; i < word.length; i++) {
    wordStar = wordStar + "*";
  }
  console.log(wordStar);

  for (let i = 0; i < 10; i++) {
    let userLetter = "";
    do {
      userLetter = prompt(
        `Try to guess a word which consists of ${word.length} letters using only one letter per time`,
        ""
      );
    } while (userLetter.length > 1 || Number(userLetter));
    userLetter = userLetter.toUpperCase();
    for (let i = 0; i < word.length; i++) {
      if (userLetter === word[i]) {
        for (let y = i; y === wordStar[y]; ) {
          wordStar[y] = word[i];
        }
      }
    }
    console.log(wordStar);
  }
}
guessWord();
