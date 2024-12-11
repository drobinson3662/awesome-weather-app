import { renderWeatherData } from "./newWeatherData";

// Gets Weather Data from Server (Operates on Submit button)
export async function getWeather() {
  const location = document.getElementById("location").value;

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=596KWHSDUAVZG2XZFHAFG24WN`,
    { mode: "cors" }
  );
  const responseData = await response.json();
  renderWeatherData(responseData);
}

// Gets weather data for London (used as default)
export async function getWeatherByLocation(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=596KWHSDUAVZG2XZFHAFG24WN`,
    { mode: "cors" }
  );
  const responseData = await response.json();
  renderWeatherData(responseData);
}
