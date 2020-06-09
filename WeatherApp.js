const apiKey = "&key=102f9eb3d1414e51822b2198e4429e79";
const URL = "https://api.weatherbit.io/v2.0/current";
let latitude = 41.388;
let longitude = 2.158;
console.log(apiKey);

const cities = [];
cities.push({
    name: "Barcelona",
    latitude: 41.388,
    longitude: 2.158,
});

get(latitude, longitude);

function get(latitude, longitude) {
    fetch(URL + "?" + "&lat=" + latitude + "&lon=" + longitude + apiKey)
        .then((response) => response.json())
        .then((weatherInfo) => {
            render(weatherInfo);
            console.log(weatherInfo);
        })
        .catch((error) => {
            console.error("Error", error);
        });
}

function render(weatherInfo) {
    let tempValue = document.querySelector("#temp-value");
    tempValue.innerHTML = weatherInfo.data[0].temp;

    let tempDescrip = document.querySelector("#temp-descrip");
    tempDescrip.innerHTML = weatherInfo.data[0].weather.description;

    let tempIcon = document.querySelector("#temp-icon");
    tempIcon.src = "icons/" + weatherInfo.data[0].weather.icon + ".png";

    let tempLocation = document.querySelector("#city");
    tempLocation.innerHTML = weatherInfo.data[0].city_name;
}

cities.forEach;