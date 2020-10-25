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
    city = (!inputMain.value) ? 'Kopalina' : inputMain.value
    urlLink = apiLink + city + apiKeyCode + units;

    axios.get(urlLink)
        .then(res => {

            const temper = res.data.main.temp;
            const actuallyStatus = Object.assign({}, ...res.data.weather);

            pOfWarning.textContent = '';
            inputMain.value = '';


            temperature.textContent = Math.floor(temper) + '°C';
            weather.textContent = actuallyStatus.main;
            nameOfCity.textContent = res.data.name;

            


            if(actuallyStatus.id >= 200 && actuallyStatus.id < 300){
                imgJpg.setAttribute('src','../thunderstorm.png');
            } else if (status.id >= 300 && actuallyStatus.id < 400) {
                imgJpg.setAttribute('src','../drizzle.png');
            } else if (status.id >= 500 && actuallyStatus.id < 600){
                imgJpg.setAttribute('src','../rain.png');
            } else if(status.id >= 600 && actuallyStatus.id < 700) {
                imgJpg.setAttribute('src','../ice.png');
            } else if (status.id >= 700 && actuallyStatus.id < 800) {
                imgJpg.setAttribute('src','../fog.png');
            }else if (status.id === 800){
                imgJpg.setAttribute('src','../sun.png');
            } else if (status.id >= 800 && actuallyStatus.id < 900) {
                imgJpg.setAttribute('src','../cloud.png');
            } else {
                imgJpg.setAttribute('src','../unknown.png');
            }
        })
        .catch(() => 
            pOfWarning.textContent = 'Undefined city');
            pOfWarning.textContent = '';
};


const enterAccept = (event) => {
    if(event.keyCode === 13){
        weatherSite();
    }
}


weatherSite();
mainButton.addEventListener("click", weatherSite);
inputMain.addEventListener("keyup", enterAccept);



////////////////////////////////////////////////////////////////