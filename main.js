const nameOfCity = document.querySelector(".cityname");
const inputMain = document.querySelector(".input");
const mainButton = document.querySelector(".click");
const pOfWarning = document.querySelector(".warning");
const imgJpg = document.querySelector(".img");
const weather = document.querySelector(".weatherinfo");
const temperature = document.querySelector(".temperatureText");


const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKeyCode = '&appid=e4a2c8533c532e62cdf04aa291360d74';
const units = '&units=metric';

let city;
let urlLink;

const weatherSite = () => {
    city = input.value;
    urlLink = apiLink + city + apiKeyCode + units;

    axios.get(urlLink)
        .then(res => {

            const temper = res.data.main.temp;
            const actuallyStatus = Object.assign({}, ...res.data.weather);

            temperature.textContent = Math.floor(temper) + '°C';
            weather.textContent = actuallyStatus.main;
            nameOfCity.textContent = res.data.name;
        })
};
weatherSite();