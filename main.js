import { fetchWeather } from "./services/fetchWeather.js";
import { renderWeather } from "./components/weatherComponent.js";

// Weatherbit API key

// Replace with your actual API key
const API_KEY = "YOUR_API_KEY_HERE"; 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = input.value.trim();
    if (!query) return;

    // Fetch weather using async/await
    const data = await fetchWeather(query, API_KEY);

    // Render result
    renderWeather(data);
  });
});