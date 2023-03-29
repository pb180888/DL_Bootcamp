// Hint: Use Switch Case

// 1. Ask the user which language they speak.

let language = prompt("What language do you speak?");

// 2. Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

lowerCaseLang = language.toLowerCase();
console.log(lowerCaseLang);

// 3. Create a few conditions :
// 4 .If the user speaks French : display “Bonjour”
// 5. If the user speaks English : display “Hello”
// 6. If the user speaks Hebrew : display “Shalom”
// 7. If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

switch (lowerCaseLang) {
  case "french":
    alert("Bonjour");
    break;
  case "english":
    alert("Hello");
    break;
  case "hebrew":
    alert("Shalom");
    break;
  default:
    alert("01110011 01101111 01110010 01110010 01111001");
}
