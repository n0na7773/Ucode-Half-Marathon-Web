function getWeather( lat, lon, exclude ) {
    var key = "7b19e835e72860795348f57aab5980e8";
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${key}`)
    .then(function(resp) { return resp.json(); })
    .then(function(data) {
        console.log(data);
        drawWeather(data);
    })
}

getWeather("50.0", "36.25", "minutely"); // Kharkiv

function drawWeather(d) {
    for(let i = 0; i < 6; i++) {
        let celcius = Math.round(parseFloat(d.daily[i].temp.day)-273.15);
        let date = new Date(d.daily[i].dt * 1000).toUTCString();
        let month = date.split(" ")[1];
        let day = date.split(" ")[2];

        document.querySelector(".day" + (i + 1) + " .date").innerHTML = day + " " + month;

        if(celcius > 0) {
            document.querySelector(".day" + (i + 1) + " .temp").innerHTML = "+" + celcius + "°";
        }
        else {
            document.querySelector(".day" + (i + 1) + " .temp").innerHTML = celcius + "°";
        }

        if(d.daily[i].snow > 1) {
            document.querySelector(".day" + (i + 1) + " .image").setAttribute("src", "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-snow-512.png");
        } else {
            document.querySelector(".day" + (i + 1) + " .image").setAttribute("src", "https://cdn0.iconfinder.com/data/icons/weather-596/132/weather-39-512.png");
        }
    }
}