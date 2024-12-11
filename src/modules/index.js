import { getWeather } from "./getWeather";
import { getWeatherByLocation } from "./getWeather";
import "../styles/styles.css";

// Loads Default
getWeatherByLocation("London, England");

// Submit button logic
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => {
  getWeather();
});
