// 1. In a new file called date.js, create a function that accepts a birthdate as an argument (in the format of your choice), and then return the number of minutes the user lived in his life. Export this function.
// Hint: Hardcode the value of the argument, don’t ask a user for it.

function birthdate(day, month, year) {
  firstDate = new Date(`${month} ${day}, ${year} 12:00:00`);
  //   console.log(firstDate);
  now = new Date();
  //   console.log(now);
  const diffInDays = Math.floor((now - firstDate) / (1000 * 60 * 60 * 24));
  //   console.log(diffInDays);
  minutes = diffInDays * 24 * 60;
  sentence = `You lived ${minutes} minutes`;
  return sentence;
}
// birthdateExports = birthdate(18, 08, 1988);

module.exports = {
  birthdate,
};
// 2. In the file script.js display the result of the function created in date.js.

// 3. Bonus: Try to find a node module that allows to prompt the user for his birthdate.
