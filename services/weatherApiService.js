// Contains functions that talk to the Weatherbit API.

// API base URL
const BASE_URL = "https://api.weatherbit.io/v2.0/current";

// Named export for base URL
export const apiBaseUrl = BASE_URL;

// Default export function to get weather data
export default async function getWeatherData(query, apiKey) {
  try {
    // Build the URL with query and API key
    const url = `${BASE_URL}?city=${query}&key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Weather API request failed");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching weather:", err);
    // return null on error
    return null; 
  }
}