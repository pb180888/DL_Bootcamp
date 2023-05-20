// 1. Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// 2. Create a program to fetch a gif.
// 3. Once the Giphy API has responded with data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

const url =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
console.log(url);
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open("GET", url);
xhr.send();
function logRequest() {
  const response = JSON.parse(xhr.response);
  console.log(response);
  newArr = response.data.map((item) => item.images.downsized_large.url);
  let rand = Math.floor(Math.random() * newArr.length);
  console.log(newArr[rand]);
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = newArr[rand];
  div.appendChild(img);
  document.getElementById("container").appendChild(div);
}
