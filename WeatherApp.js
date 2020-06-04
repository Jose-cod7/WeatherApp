get();

function get() {
    fetch(
            "https://api.weatherbit.io/v2.0/current?lat=41.388&lon=2.158&key=94732983488740c7ac18361880e08e1d"
        )
        .then((result) => {
            return result.json();
        })
        .then((result) => {
            console.log(result);
            var render = (template, node) => {
                node.innerHTML = template;
            };
            var template = "<h1>" + result.data[0].temp + "</h1>";
            render(template, document.querySelector(".temperature-value"));
            var template = "<h1>" + result.data[0].weather.description + "</h1>";
            render(template, document.querySelector(".temperature-description"));
        });
}