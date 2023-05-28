const button = document.getElementById("button");
const table = document.getElementById("table");
button.addEventListener("mouseup", function (e) {
  e.preventDefault();
  fetchData();
});
const url = "https://www.swapi.tech/api/people?page=1&limit=82";

async function fetchData() {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
    const dataPerson = await data.results;
    const arrData = [];
    for (let i of dataPerson) {
      arrData.push(i.url);
    }

    console.log(arrData);
    //   searching a random person
    const rand = Math.floor(Math.random() * arrData.length);
    const randomPerson = arrData[rand];
    console.log(randomPerson);

    const promise = await fetch(randomPerson);
    const dataOfPerson = await promise.json();
    const dataProperties = await dataOfPerson.result.properties;
    const name = await dataProperties.name;
    const height = await dataProperties.height;
    const gender = await dataProperties.gender;
    const birth_year = await dataProperties.birth_year;
    const promiseHomeWorld = await fetch(dataProperties.homeworld);
    const dataOfHomeWorld = await promiseHomeWorld.json();
    const promisePlanet = await fetch(dataOfHomeWorld.result.properties.url);
    const infoplanet = await promisePlanet.json();
    const planet = await infoplanet.result.properties.name;
    // hideLoadingSpinner();
    console.log(dataProperties);
    console.log(name, height, gender, birth_year, planet);

    document.querySelector(".name").textContent = `Name: ${name}`;
    document.querySelector(".height").textContent = `Height: ${height}`;
    document.querySelector(".gender").textContent = `Gender: ${gender}`;
    document.querySelector(
      ".birth_year"
    ).textContent = `Birth Year: ${birth_year}`;

    document.querySelector(".planet").textContent = `Planet: ${planet}`;
  } catch (err) {
    const errDiv = document.createElement("div");
    errDiv.innerHTML = err;
    table.appendChild(errDiv);
  }
}

button.addEventListener("mousedown", function (e) {
  e.preventDefault();
  showLoadingSpinner();
});

function showLoadingSpinner() {
  const spinner = document.getElementById("spinner");
  console.log(spinner);
  spinner.classList.remove(".hidden");
  spinner.classList.add(".show");
}
// function hideLoadingSpinner() {
//   spinner.classList.add(".hidden");
//   spinner.classList.remove(".show");
// }
