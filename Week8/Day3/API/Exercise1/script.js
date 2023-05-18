// Recreate the last example by using another URL :

// https://api.chucknorris.io/jokes/random?category={category}

// It retrieves a random chuck norris joke from a given category.

// Look at the API Chuck Norris Documentation : https://api.chucknorris.io/
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.chucknorris.io/jokes/random");
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(`Done ${xhr.response}`); // response is the server
  }
};
