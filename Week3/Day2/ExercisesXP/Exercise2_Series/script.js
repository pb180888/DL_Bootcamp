// Instructions
// Part I
//  Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// 1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

const myWatchedSeriesLength = 3;

// 2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

const myWatchedSeriesSentence = myWatchedSeries.toString();

// 3. Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log(
  `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
);

// Part II
// 1. Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries[myWatchedSeries.indexOf("the big bang theory")] = "friends";
console.log(myWatchedSeries);

// 2. Add, at the end of the array, the name of another series you watched.

myWatchedSeries.push("spider-man");
console.log(myWatchedSeries);

// 3. Add, at the beginning of the array, the name of your favorite series.

myWatchedSeries.unshift("batman");
console.log(myWatchedSeries);

// 4. Delete the series “black mirror”.

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

// 5. Console.log the third letter of the series “money heist”.

console.log(myWatchedSeries[1].substring(2, 3));

// 6 .Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);
