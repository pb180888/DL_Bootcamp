// 1. Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

function palindromeOrNot(word) {
  if (word.length % 2 === 0) {
    alert(`It's no a palindrome`);
    return;
  } else {
    arrTrueFalse = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - i - 1]) {
        arrTrueFalse.push(false);
      } else {
        arrTrueFalse.push(true);
      }
    }
    if (arrTrueFalse.includes(false)) {
      console.log(`This is no a palindrome`);
    } else {
      console.log(`This is a polidrome`);
    }
  }
}

palindromeOrNot("qwewq");
