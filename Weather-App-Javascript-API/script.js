// API key and URL for OpenWeatherMap
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting DOM elements

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const weatherIcon = document.querySelector("#weather-icon");

// Function to fetch weather data and update the UI

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);
  var data = await response.json();
  console.log(data);

// Check if the city is found
  if (data.cod === "404") {
    alert("City not found. Please try again.");
    return;
  }

// Update the UI with the fetched weather data

  document.querySelector("#city-name").innerHTML = data.name ;
  document.querySelector("#temperature").innerHTML =
    "Temperature: " + Math.round(data.main.temp) + "°C";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

// Set the weather icon based on the weather condition

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else {
    weatherIcon.src = "images/clear.png";
  }

}

// Event listener for the search button

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
