// Handles how the weather information is displayed on the web page.

// Create weather card
export function renderWeather(weatherObj) {
  const container = document.getElementById("weather-result");

  // Clear previous results
  container.innerHTML = "";

  if (!weatherObj) {
    container.textContent = "No weather data found.";
    return;
  }

  const weather = weatherObj.data[0];

  container.innerHTML = `
    <div class="weather-card">
      <h3>${weather.city_name}</h3>
      <p>Temperature: ${weather.temp}°C</p>
      <p>Description: ${weather.weather.description}</p>
      <p>Wind: ${weather.wind_spd} m/s</p>
    </div>
  `;
}