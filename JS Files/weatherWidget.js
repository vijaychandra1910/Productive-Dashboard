const weatherTemp = document.querySelector("#weather-temperature");
const weatherWind = document.querySelector("#weather-wind");
const weatherHumidity = document.querySelector("#weather-humidity");
const weatherRain = document.querySelector("#weather-rain");

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=22.7179&longitude=75.8333&daily=uv_index_max,sunrise,sunset&hourly=temperature_2m,precipitation,wind_speed_10m,rain,relative_humidity_2m,visibility,apparent_temperature,surface_pressure&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m&timezone=auto";

async function getWeatherData() {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    weatherTemp.innerHTML = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`;
    weatherHumidity.innerHTML = `Relative Humidity: ${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m}`;
    weatherWind.innerHTML = `Wind Speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`;
    weatherRain.innerHTML = `Rain: ${data.current.rain} ${data.current_units.rain}`;
  } catch (error) {
    console.error(error);
  }
}
getWeatherData();
