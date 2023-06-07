// 1. In a new file called date.js, create a function that returns the amount of time left from now until January 1st. Export this function.

function differenceTime() {
  const now = new Date();
  console.log(now);
  const firstJun = new Date(2024, 01, 01);
  console.log(firstJun);
  const diffInDays = Math.floor((firstJun - now) / (1000 * 60 * 60 * 24) - 31);
  console.log(diffInDays);
}

module.exports = {
  differenceTime,
};
// 2. In the file script.js display the result of the function created in date.js.
// (Example: the 1st January is in 10 days and 10:34:01 hours)
