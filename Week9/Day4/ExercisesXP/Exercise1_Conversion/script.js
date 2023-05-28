// Convert the below promise into async await:
fetch("https://www.swapi.tech/api/starships/9/")
  .then((response) => response.json())
  .then((objectStarWars) => console.log(objectStarWars.result));
////////////////////////
//////////////////////
////////////////////
const url = "https://www.swapi.tech/api/starships/9/";
const asyncFunction = async function (url) {
  const resp = await fetch(url);
  const data = await resp.json();
  const objectStarWars = await data.result;
  console.log(objectStarWars);
};
asyncFunction(url);
