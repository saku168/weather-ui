// This project is a front-end demo and deliberately uses sample data.
// It does not request your location or connect to a live weather service.
const sampleWeather = {
  city: "Paris",
  temperature: 22,
  condition: "Sunny",
  icon: "☀️",
  feelsLike: 24,
  windSpeed: 8
};

const weatherCard = document.querySelector(".weather");
if (weatherCard) {
  const city = weatherCard.querySelector("h1");
  const icon = weatherCard.querySelector(".sun");
  const temperature = weatherCard.querySelector(".temperature");
  const condition = weatherCard.querySelector("h2");
  const details = weatherCard.querySelector(".details");

  if (city) city.textContent = sampleWeather.city;
  if (icon) {
    icon.textContent = sampleWeather.icon;
    icon.setAttribute("role", "img");
    icon.setAttribute("aria-label", sampleWeather.condition);
  }
  if (temperature) temperature.textContent = `${sampleWeather.temperature}°`;
  if (condition) condition.textContent = sampleWeather.condition;
  if (details) {
    details.textContent = `Feels like ${sampleWeather.feelsLike}° · Wind ${sampleWeather.windSpeed} km/h`;
  }
}

console.info("Weather UI demo loaded with sample data.");