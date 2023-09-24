document.addEventListener("DOMContentLoaded", function() {
    const cityInput = document.getElementById("city");
    const searchButton = document.getElementById("search");
    const temperatureSpan = document.getElementById("temperature");
    const descriptionSpan = document.getElementById("description");
  
    const apiKey = "734cd766b83e5a318845037167e1e110";
  
    searchButton.addEventListener("click", function() {
        const cityName = cityInput.value;
        fetchWeather(cityName);
    });
  
    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
    
                const temperature = data.main.temp;
                const description = data.weather[0].description;
  
                temperatureSpan.textContent = temperature + "°C";
                descriptionSpan.textContent = description;
            })
            .catch(error => {
                console.error("Error al obtener datos climáticos:", error);
            });
    }
  });