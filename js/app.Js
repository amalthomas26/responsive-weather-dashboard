
// --- SELECT ELEMENTS ONCE ---
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherBlock = document.querySelector(".weather");
const errorBlock = document.querySelector(".error");


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // --- PROPER ERROR HANDLING ---
    if (response.status == 404) {
        errorBlock.style.display = "block";
        weatherBlock.style.display = "none";
        return; // Stop the function here
    }

    let data = await response.json();

    // Update DOM
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
    cityElement.innerHTML = data.name;
    humidityElement.innerHTML = data.main.humidity + "%";
    windElement.innerHTML = data.wind.speed + " km/hr";

    // Update weather icon
    const iconCode = data.weather[0].main;
    const iconMap = {
        "Clouds": "assets/images/clouds.png",
        "Clear": "assets/images/clear.png",
        "Rain": "assets/images/rain.png",
        "Drizzle": "assets/images/drizzle.png",
        "Mist": "assets/images/mist.png",
        "Snow": "assets/images/snow.png"
    };
    weatherIcon.src = iconMap[iconCode] || "assets/images/clear.png";


    // Show the weather block and hide error message
    weatherBlock.style.display = "block";
    errorBlock.style.display = "none";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});