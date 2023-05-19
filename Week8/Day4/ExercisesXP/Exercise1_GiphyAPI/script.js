const url =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
function logRequest() {
  const response = JSON.parse(xhr.response);
  console.log(response);
}
xhr.open("GET", url);
xhr.send();
