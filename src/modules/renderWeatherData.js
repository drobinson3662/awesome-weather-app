// export const renderWeatherData = function (location) {
//   const detailDiv = document.querySelector("#details");
//   const currentTemp = location.currentConditions.temp;
//   const feelsLike = location.currentConditions.feelslike;
//   const humidity = location.currentConditions.humidity;
//   const icon = location.currentConditions.icon;
//   const percipChance = location.currentConditions.precipprob;
//   const todayHighTemp = location.days[0].feelslikemax;
//   const todayLowTemp = location.days[0].feelslikemin;

//   renderTemp(currentTemp, detailDiv);
//   rendderFeelsLike(feelsLike, detailDiv);
//   renderHumidity(humidity, detailDiv);
//   renderIcon(icon, detailDiv);
//   renderPrecip(percipChance, detailDiv);
//   renderHigh(todayHighTemp, detailDiv);
//   renderLow(todayLowTemp, detailDiv);
// };

// const renderTemp = (currentTemp, div) => {
//   const tempDiv = document.createElement("div");
//   tempDiv.textContent = `Current Temp: ${currentTemp}° F`;
//   div.appendChild(tempDiv);
// };

// const rendderFeelsLike = (value, div) => {
//   const feelsLikeDiv = document.createElement("div");
//   feelsLikeDiv.textContent = `Feels Like: ${value}° F`;
//   div.appendChild(feelsLikeDiv);
// };

// const renderHumidity = (value, div) => {
//   const humidityDiv = document.createElement("div");
//   humidityDiv.textContent = `Humidity: ${value}%`;
//   div.appendChild(humidityDiv);
// };

// const renderIcon = (value, div) => {
//   // This comes later
// };

// const renderPrecip = (value, div) => {
//   const precipDiv = document.createElement("div");
//   precipDiv.textContent = `Chance of Rain: ${value}%`;
//   div.appendChild(precipDiv);
// };

// const renderHigh = (value, div) => {
//   const highDiv = document.createElement("div");
//   highDiv.textContent = `High: ${value}° F`;
//   div.appendChild(highDiv);
// };

// const renderLow = (value, div) => {
//   const lowDiv = document.createElement("div");
//   lowDiv.textContent = `Low: ${value}° F`;
//   div.appendChild(lowDiv);
// };
