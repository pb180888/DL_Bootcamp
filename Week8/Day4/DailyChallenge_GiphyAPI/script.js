// 1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// 2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
const input = document.forms.first.input;
const button = document.forms.first.fetch;
const container = document.querySelector("#container");
const buttonDelAll = document.querySelector("#delAll");

buttonDelAll.addEventListener("click", deleteAll);
function deleteAll(e) {
  e.preventDefault();
  let elemenetsCon = document.querySelectorAll("#container > div");
  for (let i = 0; i < elemenetsCon.length; i++) {
    console.log(elemenetsCon[i]);
    container.removeChild(elemenetsCon[i]);
  }
}
// 3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
button.addEventListener("click", function (e) {
  e.preventDefault();
  getGif(input.value);
});

function getGif(word) {
  const div = document.createElement("div");
  const imgForDiv = document.createElement("img");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  div.appendChild(imgForDiv);
  word = input.value.toLowerCase();
  const url = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${api_key}`;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", logRequest);
  xhr.open("GET", url);
  xhr.send();
  function logRequest() {
    const response = JSON.parse(xhr.response);
    console.log(response);
    newArr = response.data.map((item) => item.images.fixed_width.url);
    let rand = Math.floor(Math.random() * newArr.length);
    console.log(newArr[rand]);
    if (word === "sun") {
      imgForDiv.src = newArr[rand];
      div.appendChild(deleteBtn);
      container.appendChild(div);
      deleteBtn.addEventListener("click", function () {
        container.removeChild(div);
      });
    }
  }
}

// 4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// 5. Allow the user to delete a specific gif by clicking the DELETE button.
// 6. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
