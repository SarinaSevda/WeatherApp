function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = currentTemperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-field-id");
  let cityElement = document.querySelector("#current-city-id");
  let city = searchInputElement.value;
  let apiKey = "4569530f182bfa0dfo5t468f004ad4c8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
  cityElement.innerHTML = city;
}

let form = document.querySelector("form");

form.addEventListener("submit", search);

let now = new Date();

let dateTime = document.querySelector("#day-time");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

dateTime.innerHTML = `${day}, ${hours}:${minutes}`;
