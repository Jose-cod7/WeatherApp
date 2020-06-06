const apiKey = "&key=102f9eb3d1414e51822b2198e4429e79";
const URL = "https://api.weatherbit.io/v2.0/current";
console.log(apiKey);

get();

function get() {
    fetch(URL + "?" + "&lat=41.41&lon=2.19" + apiKey)
        .then((response) => response.json())
        .then((weatherInfo) => {
            render(weatherInfo);
            console.log(weatherInfo);
        });
}

function render(weatherInfo) {
    let tempValue = document.querySelector("#temp-value");
    tempValue.innerHTML = weatherInfo.data[0].temp;

    let tempDescrip = document.querySelector("#temp-descrip");
    tempDescrip.innerHTML = weatherInfo.data[0].weather.description;

    let tempIcon = document.querySelector(".temp-icon");
    //tempIcon.src = ;
}