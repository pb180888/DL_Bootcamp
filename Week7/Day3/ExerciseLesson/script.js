// Write a function called 'solution' that given a string S
// consisting on N letters 'a' and /or 'b'
// returns true where all occurrences of letter 'a'
// before all occurrences of letter 'b',
// and returns false otherwise

function solution(string) {
  for (let i = 0; i < string.length; i++)
    if (string[i] === "a") {
      number1 = i;
    } else if (string[i] === "b") {
      number2 = i;
    }
  result = number1 < number2 ? true : false;
  return result;
}
console.log(solution("aaabbbaaabbaabbb"));
