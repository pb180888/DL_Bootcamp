// Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:

// https://api.chucknorris.io/jokes/random?category={category}

// Check out the API Chuck Norris Documentation : https://api.chucknorris.io/

// Make sure to check the Response status and throw an error accordingly

const objectChuck = {
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "K3CsgGRsSruzNipiprjfpg",
  url: "https://api.chucknorris.io/jokes/K3CsgGRsSruzNipiprjfpg",
  value: `Recently a heckler told Chuck Norris "I'll bet you've seen Steel Magnolias". Chuck immediately replied "I'll bet you are gonna see the imprint of my fist in the middle of your face".`,
};

console.log("Starting...");

const objData = {
  method: "POST",
  url: "https://api.chucknorris.io/jokes/K3CsgGRsSruzNipiprjfpg",
};

const addArticle = () => {
  console.log("Working ...");
  fetch(`${objData.url}`)
    .then((response) => {
      console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error("Wrong artwork");
      }
    })
    .then((obj) => (divJoke.innerHTML = ("Chuck Norris jokes: ", obj.value)))
    .catch(console.error());
  const divJoke = document.createElement("div");
  document.body.appendChild(divJoke);
};
addArticle();
