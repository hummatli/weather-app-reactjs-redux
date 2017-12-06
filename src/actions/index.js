import axios from 'axios';

const API_KEY = '71c8663c6a508affe0440e912dd294d7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, code) {
  const url = `${ROOT_URL}&q=${city},${code}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
