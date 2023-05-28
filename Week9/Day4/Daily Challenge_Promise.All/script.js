// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});
// expected output: Array [3, 42, "foo"]
const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

//   2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

const form = document.forms.cityForm;
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(form.elements);
  const city1lat = form.elements[0].value;
  const city1lag = form.elements[1].value;
  const city2lat = form.elements[2].value;
  const city2lag = form.elements[3].value;

  console.log(city1lat, city1lag, city2lat, city2lag);
  url1 = getApiUrl(city1lat, city1lag);
  url2 = getApiUrl(city2lat, city2lag);
  const promise1 = fetch(url1).then((res) => res.json());
  const promise2 = fetch(url2).then((res) => res.json());
  Promise.all([promise1, promise2])
    .then((res) => res)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
});

function getApiUrl(lat, lon) {
  return `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today`;
}
