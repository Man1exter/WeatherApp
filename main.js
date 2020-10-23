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


            if(status.id >= 200 && status.id < 300){
                photo.setAttribute('src','../thunderstorm.png');
            } else if (status.id >= 300 && status.id < 400) {
                photo.setAttribute('src','../drizzle.png');
            } else if (status.id >= 500 && status.id < 600){
                photo.setAttribute('src','../rain.png');
            } else if(status.id >= 600 && status.id < 700) {
                photo.setAttribute('src','../ice.png');
            } else if (status.id >= 700 && status.id < 800) {
                photo.setAttribute('src','../fog.png');
            }else if (status.id === 800){
                photo.setAttribute('src','../sun.png');
            } else if (status.id >= 800 && status.id < 900) {
                photo.setAttribute('src','../cloud.png');
            } else {
                photo.setAttribute('src','../unknown.png');
            }
        })
};
weatherSite();