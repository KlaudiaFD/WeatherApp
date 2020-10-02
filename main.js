const input = document.querySelector('input');
const btn = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=efc00cf4941376dfb9458af8579e22e8';
const units = '&units=metric';
let $city;
let $url;

const getWeaher = () => {
    $city = 'London';
    $url = apiLink + $city + apiKey + units;

    axios.get($url)
        .then(res => {
            const temp = res.data.main.temp;
            const hum = res.data.main.humidity;
            const status = Object.assign({}, ...res.data.weather);

            cityName.textContent = res.data.name;
            weather.textContent = status.main
            temperature.textContent = Math.floor(temp) + '°C';
            humidity.textContent = hum + '%';


            // if (status.id >= 200 && status.id <300) {
            //     photo.setAttribute("http://openweathermap.org/img/wn/10d@2x.png");
            // }else if (status.id >= 300 && status.id <400){
            //     photo.setAttribute('src', '../Drizzle.png');
            // }else if(status.id >= 500 && status.id <600){
            //     photo.setAttribute('src', "10n.png");
            // }else if(status.id >= 600 && status.id <700){
            //     photo.setAttribute('src', '../Snow.png');
            // }else if(status.id >= 700 && status.id <800){
            //     photo.setAttribute('src', '../Atmosphere.png');
            // }else if(status.id === 800){
            //     photo.setAttribute('src', '../Clear.png');
            // }else if(status.id >= 800 && status.id <900){
            //     photo.setAttribute('src', '../Clouds.png');
            // }else{
            //     photo.setAttribute('src', '../unknow.png');
            // }
        })
}

getWeaher()

