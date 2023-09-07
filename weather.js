const apiKey = '05a5a439eface87f5af27657a5965562'; // Replace with your API key from a weather service provider
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const icon = document.getElementById('icon');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;
            temp.textContent = data.main.temp.toFixed(1);
            condition.textContent = data.weather[0].description;
            icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.error(error);
            cityName.textContent = 'City not found';
            temp.textContent = '';
            condition.textContent = '';
            icon.src = '';
        });
}
