const API_KEY = '4840b8714bd235f13ad4fc7da0d61773';

startWeatherApp();
const showWeatherbutton = document.querySelector('#weather-button');
showWeatherbutton.addEventListener('click', getCityWeather);

function startWeatherApp() {
    showLoader();
    navigator.geolocation.getCurrentPosition(getLocalWeather, getRandomWeather);
}

async function getLocalWeather({coords: {latitude, longitude}}) {
    const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    ).then((response) => response.json());
    removeLoader();
    showWeather(data);
}

async function getRandomWeather() {
    showLoader();
    const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${getRandomLatitude()}&lon=${getRandomLongitude()}&units=metric&appid=${API_KEY}`
    ).then((response) => response.json());
    if (!data.name) {
        getRandomWeather();
        return;
    }
    removeLoader();
    showWeather(data);
}

async function getCityWeather(e) {
    e.preventDefault();
    const error = document.querySelector('.error');
    error.textContent = '';
    const city = document.querySelector('input#city').value;
    if (city) {
        showLoader();
        try {
            const data = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            ).then((response) => response.json());
            removeLoader();
            showWeather(data);
        } catch {
            error.textContent =
                'Such a city does not exist. You got the weather from a random city.';
            getRandomWeather();
        }
    }
}

function showWeather({
    name,
    main: {temp, pressure, humidity},
    weather: [{id, description, icon} = 0],
    wind: {speed, deg},
    sys: {country},
}) {
    const weatherInfo = document.querySelector('.weather__wrapper');
    weatherInfo.innerHTML = `
    <div class="weather__city">
            <p>${name}</p>
            </div>
        <div class="weather__main-info">
            <div class="icon">
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="Icon">
            </div>
            <p class="temp">${Math.floor(temp)}</p>
        </div>
        <div class="weather__main-description">
            <p>${description}</p>
        </div>
        <div class="weather__other-info">
            <p>preassure: <span>${pressure} hPA</span></p>
            <p>humidity: <span>${humidity}%</span></p>
            <p>wind: <span>${speed} meter/sec</span> | <span>${deg} deg</span></p>
    </div>`;

    const weather = document.querySelector('.weather');
    const removableClass = weather.classList[weather.classList.length - 1];
    weather.classList.remove(removableClass);
    if (id >= 200 && id < 300) {
        document.body.style.backgroundColor = '#56446C';
        weather.classList.add('thunderstorm');
    }

    if (id >= 300 && id < 600) {
        document.body.style.backgroundColor = '#37595B';
        weather.classList.add('rain-drizzle');
    }

    if (id >= 600 && id < 700) {
        document.body.style.backgroundColor = '#DCEEF2';
        weather.classList.add('snow');
    }

    if (id >= 701 && id < 800) {
        document.body.style.backgroundColor = '#8F5556';
        weather.classList.add('atmosphere');
    }

    if (id === 800) {
        document.body.style.backgroundColor = '#A4E1EC';
        weather.classList.add('clear');
    }

    if (id >= 801 && id < 900) {
        document.body.style.backgroundColor = '#72A1BF';
        weather.classList.add('clouds');
    }
}

function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
}

function removeLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
}

function getRandomLatitude() {
    return Math.random() * 90 - Math.random() * 90;
}

function getRandomLongitude() {
    return Math.random() * 180 - Math.random() * 180;
}
