/* Part I - Weather App
1. Create an HTML, CSS and JS file.

2. Add a form in the HTML file to allow the user to type in a city. As soon as he clicks on the “Submit” button. You should retrieve the city, then retrieve the city information from the API and finally display the result in a nice card, like the example above.
    1. Use the Current Weather Data to get the information about a specific city.

    2. If the user enters a correct city, you should display in the card:
        the name of the city, and the name of the country where the city is located
        the weather (ie. “clear”, “sunny” ect…)
        the icon of the weather. Check out this part of the documentation
        the temperature (Temperature in Kelvin is used by default), the humidity

    3. Warn the user, if he didn’t enter a correct city

    4. Either way, as soon as the user submits his answer, reset the form input (ie. make it empty).

3. in the JS file, the information about each city needs to be saved, in order to display all the previous searches. How should you save the information ? Which data type should you use ? */

const form = document.forms.searchCity;
const weatherData = [];

document.querySelector(".search").addEventListener("click", function (e) {
  e.preventDefault();
  main();
});

function main() {
  city = form.city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b1cae93abfa254b91a372a5280ec005`;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", logRequest);
  xhr.open("GET", url);
  xhr.send();
  function logRequest() {
    const response = JSON.parse(xhr.response);
    console.log(response);
    const divWeather = document.createElement("div");
    divWeather.style.display = "flex";
    divWeather.style.flexDirection = "column";
    divWeather.style.justifyContent = "space-evenly";
    divWeather.style.backgroundColor = "white";
    divWeather.style.alignItems = "center";
    divWeather.style.width = "200px";
    divWeather.style.height = "300px";
    divWeather.style.border = "2px solid white";
    divWeather.style.borderRadius = "5px/5px";
    divWeather.style.margin = "5px";
    const divCityCountry = document.createElement("div");
    divCityCountry.style.color = "rgb(93,206,233)";
    divCityCountry.style.fontSize = "1.2em";
    divCityCountry.innerHTML = `${response.name}, ${response.sys.country}`;
    const divIconWeather = document.createElement("div");
    const img = document.createElement("img");
    divIconWeather.appendChild(img);
    img.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
    const divTemp = document.createElement("div");
    divTemp.style.fontSize = "3em";
    const tempCelsius = Math.round(response.main.temp - 273.15);
    const tempFahrenheit = Math.round((response.main.temp - 273.15) * 1.8 + 32);
    divTemp.innerHTML = `${tempCelsius}c`;
    const divHumidity = document.createElement("div");
    divHumidity.style.display = "flex";
    divHumidity.style.fontSize = "1.5em";
    const divHumidityNumber = document.createElement("div");
    divHumidityNumber.innerHTML = response.main.humidity;
    divHumidity.appendChild(divHumidityNumber);
    const divHumidityPic = document.createElement("div");
    const picHumidity = document.createElement("img");
    picHumidity.style.width = "20px";
    picHumidity.src = `./humidity.png`;
    divHumidityPic.appendChild(picHumidity);
    divHumidity.appendChild(divHumidityPic);

    const divClouds = document.createElement("div");
    divClouds.innerHTML = response.weather[0].description.toUpperCase();
    divWeather.appendChild(divCityCountry);
    divWeather.appendChild(divIconWeather);
    divWeather.appendChild(divTemp);
    divWeather.appendChild(divHumidity);
    divWeather.appendChild(divClouds);
    document.getElementById("weatherList").appendChild(divWeather);

    // data about every city weather
    const weatherObject = {};
    weatherObject.city = response.name;
    weatherObject.country = response.sys.country;
    weatherObject.temteratureCelsius = tempCelsius;
    weatherObject.temteratureFahrenheit = tempFahrenheit;
    weatherObject.humidity = response.main.humidity;
    weatherObject.weather = response.weather[0].description.toUpperCase();
    weatherData.push(weatherObject);
  }
  console.log("Data of weather", weatherData);
}
