require("dotenv").config();

const CONFIG = {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY: process.env.WEATHER_APP_ID,
    PORT: process.env.PORT,
}
module.exports = CONFIG