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
cities.push({
    name: "Madrid",
    latitude: 40.41,
    longitude: -3.7,
});
cities.push({
    name: "Sevilla",
    latitude: 37.38,
    longitude: -5.98,
});
cities.push({
    name: "Valencia",
    latitude: 39.47,
    longitude: -0.38,
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
            renderError(error);
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

    //***** DOM to create the container of each city*****

    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("div");
    title.className = "app-title";

    const pTitle = document.createElement("p");
    pTitle.id = "city";

    const notification = document.createElement("div");
    notification.className = "notification";

    const weatherContainer = document.createElement("div");
    weatherContainer.className = "weatherContainer";

    const weatherImg = document.createElement("div");
    weatherImg.className = "weather-image";

    const weatherImage = document.createElement("img");
    weatherImage.id = "temp-icon";
    weatherImage.src = "icons/unknown.png";

    const tempValueDiv = document.createElement("div");
    tempValueDiv.className = "temperature-value";

    const pTempValue = document.createElement("p");
    pTempValue.id = "temp-value";

    const tempDescripDiv = document.createElement("div");
    tempDescripDiv.className = "temperature-description";

    const pTempDescription = document.createElement("p");
    pTempDescription.id = "temp-descrip";

    const tempLocationDiv = document.createElement("div");
    tempLocationDiv.className = "location";

    const plocation = document.createElement("p");
    plocation.id = "temp-location";

    document.body.appendChild(container);
    container.appendChild(title);
    title.appendChild(pTitle);
    container.appendChild(notification);
    container.appendChild(weatherContainer);
    weatherContainer.appendChild(weatherImg);
    weatherImg.appendChild(weatherImage);
    weatherContainer.appendChild(tempValueDiv);
    tempValueDiv.appendChild(pTempValue);
    weatherContainer.appendChild(tempDescripDiv);
    tempDescripDiv.appendChild(pTempDescription);
    weatherContainer.appendChild(tempLocationDiv);
    tempLocationDiv.appendChild(plocation);
}

function renderError(error) {
    let tempValue = document.querySelector("#temp-value");
    tempValue.innerHTML = "No work...";
}

cities.forEach;