const CONFIG = require('./config');
const { paginate } = require('../utils/pagination');
const { GenerateResponse, GenerateErrorResponse } = require('../utils/response');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getWeatherDataForCity = async (cityName) => {
    try {
        console.log(CONFIG);
        let API_URL = `${CONFIG.API_BASE_URL}/weather?q=${cityName}&appid=${CONFIG.API_KEY}`
        console.log(API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();
        return GenerateResponse(data);
    } catch (error) {
        return GenerateErrorResponse("error: " + error);
    }
};
const getWeatherDataForCities = async (cityArr, size = 0, page = 0) => {
    try {
        if (size > 0 && page > 0)
            cityArr = paginate(cityArr, size, page);
        const response = await Promise.all(
            cityArr.map(getWeatherDataForCity)
        );
        return GenerateResponse(response);
    } catch (error) {
        return GenerateErrorResponse("error: " + error);
    }
}


const getForecastForNextXDays = async (lat, lon, days) => {
    try {
        let API_URL = `${CONFIG.API_BASE_URL}/forecast/?lat=${lat}&lon=${lon}&cnt=${days}&appid=${CONFIG.API_KEY}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        return GenerateResponse(data);
    } catch (error) {
        return GenerateErrorResponse("error: " + error);
    }
}

module.exports = { getWeatherDataForCity, getWeatherDataForCities, getForecastForNextXDays };