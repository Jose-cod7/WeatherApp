const apiKey = "&key=102f9eb3d1414e51822b2198e4429e79";
const URL = "https://api.weatherbit.io/v2.0/current"; // para comprobar que .catch funciona, borrar la ultima letra 't'.
let latitude;
let longitude;
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

console.log(cities);

function get(latitude, longitude) {
    fetch(URL + "?" + "&lat=" + latitude + "&lon=" + longitude + apiKey)
        .then((response) => response.json())
        .then((weatherInfo) => {
            render(weatherInfo.data[0]);
            console.log("INFO", weatherInfo);
        })
        .catch((error) => {
            console.error("Error", error);
            renderError(error);
        });
}

function render(weatherInfo) {
    console.log(weatherInfo);

    //***** DOM to create the container of each city*****

    const container = document.createElement("div");
    container.className = "container";
    container.id = weatherInfo.city_name;

    const title = document.createElement("div");
    title.className = "app-title";

    // assign values
    const pTitle = document.createElement("p");
    pTitle.id = "city";
    pTitle.innerHTML = weatherInfo.city_name;

    const notification = document.createElement("div");
    notification.className = "notification";

    const weatherContainer = document.createElement("div");
    weatherContainer.className = "weather-container";

    const weatherImg = document.createElement("div");
    weatherImg.className = "weather-image";

    // assign values

    const weatherImage = document.createElement("img");
    weatherImage.id = "temp-icon";
    weatherImage.src = "icons/unknown.png";
    weatherImage.src = "icons/" + weatherInfo.weather.icon + ".png";

    const tempValueDiv = document.createElement("div");
    tempValueDiv.className = "temperature-value";
    const pTempValue = document.createElement("p");
    pTempValue.id = "temp-value";
    pTempValue.innerHTML = weatherInfo.temp;

    const tempDescripDiv = document.createElement("div");
    tempDescripDiv.className = "temperature-description";
    const pTempDescription = document.createElement("p");
    pTempDescription.id = "temp-descrip";
    pTempDescription.innerHTML = weatherInfo.weather.description;

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

cities.forEach((city) => {
    get(city.latitude, city.longitude);
});