// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

function caseInCharacter(sentence) {
  console.log(sentence);
  sentence = sentence.toUpperCase();
  let sentenceArr = sentence.split(" ");
  let outPutSentense = "";
  for (let i = 0; i < sentenceArr.length; i++) {
    sentenceArr[i] = sentenceArr[i][0].toLowerCase() + sentenceArr[i].slice(1);
    outPutSentense = outPutSentense + sentenceArr[i] + " ";
  }
  console.log(outPutSentense);
}

caseInCharacter("The Quick Brown Fox");
