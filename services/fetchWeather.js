// Wraps the service to keep structure consistent.

import getWeatherData from "./weatherApiService.js";

export async function fetchWeather(query, apiKey) {
  // Pass everything straight through to main service function
  return await getWeatherData(query, apiKey);
}