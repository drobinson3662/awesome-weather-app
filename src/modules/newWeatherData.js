import { renderIcon } from "./renderIcon";
import { eraseContent } from "./clearContent";
export const renderWeatherData = function (location) {
  const detailDiv = document.querySelector("#details");
  const forecastDiv = document.querySelector("#seven-day-forecast");
  // Erase Page and Set Heading
  eraseContent(detailDiv);
  eraseContent(forecastDiv);

  setHeading(
    location.resolvedAddress,
    Math.round(location.currentConditions.temp),
    location.currentConditions.icon
  );

  // Get Items for Side Detail View
  const weatherDetails = [
    {
      label: "Feels Like",
      value: Math.round(location.currentConditions.feelslike),
      unit: "° F",
      class: "'detail'",
    },
    {
      label: "Todays High",
      value: Math.round(location.days[0].tempmax),
      unit: "° F",
      class: "'detail'",
    },
    {
      label: "Todays Low",
      value: Math.round(location.days[0].tempmin),
      unit: "° F",
      class: "detai'l",
    },
    {
      label: "Humidity",
      value: Math.round(location.currentConditions.humidity),
      unit: "%",
      class: "'detail'",
    },
    {
      label: "Chance of Rain",
      value: Math.round(location.currentConditions.precipprob),
      unit: "%",
      class: "'detail'",
    },
  ];

  // Get Details for Seven Day Forecast
  const sevenDayDetails = [];
  for (let i = 0; i < 7; i++) {
    sevenDayDetails.push({
      day: location.days[i].datetime,
      high: Math.round(location.days[i].tempmax),
      low: Math.round(location.days[i].tempmin),
      icon: location.days[i].icon,
    });
  }

  // Call Methods to populate content
  weatherDetails.forEach((item) =>
    renderDetails(item.label, item.value, item.unit, detailDiv)
  );

  sevenDayDetails.forEach((item) =>
    renderSevenDay(item.day, item.high, item.low, item.icon, forecastDiv)
  );
};

// Renders information into Detail View
const renderDetails = function (label, value, unit, parentDiv) {
  const newDiv = document.createElement("div");
  newDiv.textContent = `${label}: ${value}${unit}`;
  parentDiv.appendChild(newDiv);
};

// Renders information into Seven Day Forecast
const renderSevenDay = function (day, high, low, icon, parentDiv) {
  const dayDiv = document.createElement("div");

  const dayOfWeek = document.createElement("div");
  dayOfWeek.classList.add("forecast-day");
  dayOfWeek.textContent = getDayofWeek(day);
  dayDiv.appendChild(dayOfWeek);

  renderIcon(icon, dayDiv, "forecast-icon");

  const highDiv = document.createElement("div");
  highDiv.classList.add("forecast-high");
  highDiv.textContent = high;
  dayDiv.appendChild(highDiv);

  const lowDiv = document.createElement("div");
  lowDiv.classList.add("forecast-low");
  lowDiv.textContent = low;
  dayDiv.appendChild(lowDiv);

  parentDiv.appendChild(dayDiv);
};

// Takes in date code and returns the day of the week
const getDayofWeek = function (string) {
  let date = new Date(string);
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[date.getDay()];
};

// Sets Location Information, Current Temp, and Icon on heading
const setHeading = function (location, currentTemp, icon) {
  let heading = document.getElementById("heading");
  eraseContent(heading);
  renderIcon(icon, heading, "header-icon");

  let locationName = document.createElement("div");
  locationName.classList.add("location-name");
  locationName.textContent = location;
  heading.appendChild(locationName);

  let currentTempDiv = document.createElement("div");
  currentTempDiv.classList.add("current-temp-div");
  let currentTempLabel = document.createElement("div");
  currentTempLabel.classList.add("current-temp-label");
  currentTempLabel.textContent = "Current Temp:";
  currentTempDiv.appendChild(currentTempLabel);

  let currentTempDegrees = document.createElement("div");
  currentTempDegrees.textContent = `${currentTemp}° F`;
  currentTempDegrees.classList.add("current-temp-degrees");
  currentTempDiv.appendChild(currentTempDegrees);

  heading.appendChild(currentTempDiv);
};
