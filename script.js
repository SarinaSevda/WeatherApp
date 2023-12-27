function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-field");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
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
