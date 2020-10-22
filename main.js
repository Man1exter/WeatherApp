const nameOfCity = document.querySelector(".cityname");
const inputMain = document.querySelector(".input");
const mainButton = document.querySelector(".click");
const pOfWarning = document.querySelector(".warning");
const imgJpg = document.querySelector(".img");
const infoWeather = document.querySelector(".weatherinfo");
const temperature = document.querySelector(".temperature");


const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKeyCode = '&APPID=e4a2c8533c532e62cdf04aa291360d74';
const units = '&units=metric';

let city;
let urlLink;

const weatherSite = () => {
    city = inputMain.value;
    urlLink = apiLink + city + apiKeyCode + units;
}
weatherSite();