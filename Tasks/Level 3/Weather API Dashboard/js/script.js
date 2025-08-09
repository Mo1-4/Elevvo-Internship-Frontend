class WeatherDashboard {
    constructor() {
        this.apiKey = '8b7b958097bfbadb9d90e6dd6760acdd';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
        this.recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];
        
        this.initializeElements();
        this.bindEvents();
        this.loadRecentCities();
        
        this.getUserLocation();
    }

    initializeElements() {
        // Search elements
        this.citySearch = document.getElementById('citySearch');
        this.searchBtn = document.getElementById('searchBtn');
        this.locationBtn = document.getElementById('locationBtn');
        
        // Loading and error elements
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.errorMessage = document.getElementById('errorMessage');
        this.errorText = document.getElementById('errorText');
        
        // Weather display elements
        this.currentWeather = document.getElementById('currentWeather');
        this.forecastSection = document.getElementById('forecastSection');
        this.recentCitiesContainer = document.getElementById('recentCitiesContainer');
        
        // Current weather elements
        this.currentCity = document.getElementById('currentCity');
        this.currentDate = document.getElementById('currentDate');
        this.currentTemp = document.getElementById('currentTemp');
        this.currentIcon = document.getElementById('currentIcon');
        this.currentDescription = document.getElementById('currentDescription');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.visibility = document.getElementById('visibility');
        
        // Forecast container
        this.forecastContainer = document.getElementById('forecastContainer');
    }

    bindEvents() {
        // Search functionality
        this.searchBtn.addEventListener('click', () => this.searchCity());
        this.citySearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchCity();
        });
        
        // Location button
        this.locationBtn.addEventListener('click', () => this.getUserLocation());
    }

    async searchCity() {
        const city = this.citySearch.value.trim();
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }
        
        this.showLoading();
        try {
            await this.fetchWeatherData(city);
            this.citySearch.value = '';
        } catch (error) {
            this.showError('City not found. Please try again.');
        }
    }

    async getUserLocation() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by your browser');
            return;
        }

        this.showLoading();
        
        try {
            const position = await this.getCurrentPosition();
            const { latitude, longitude } = position.coords;
            await this.fetchWeatherDataByCoords(latitude, longitude);
        } catch (error) {
            this.showError('Unable to get your location. Please search for a city manually.');
        }
    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 10000,
                enableHighAccuracy: true
            });
        });
    }

    async fetchWeatherData(city) {
        try {
            // Fetch current weather
            const currentWeatherUrl = `${this.baseUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
            const currentResponse = await fetch(currentWeatherUrl);
            
            if (!currentResponse.ok) {
                throw new Error('City not found');
            }
            
            const currentData = await currentResponse.json();
            
            // Fetch 3-day forecast
            const forecastUrl = `${this.baseUrl}/forecast?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();
            
            this.displayWeatherData(currentData, forecastData);
            this.addToRecentCities(currentData);
            
        } catch (error) {
            throw error;
        }
    }

    async fetchWeatherDataByCoords(lat, lon) {
        try {
            // Fetch current weather by coordinates
            const currentWeatherUrl = `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
            const currentResponse = await fetch(currentWeatherUrl);
            const currentData = await currentResponse.json();
            
            // Fetch 3-day forecast by coordinates
            const forecastUrl = `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();
            
            this.displayWeatherData(currentData, forecastData);
            this.addToRecentCities(currentData);
            
        } catch (error) {
            throw error;
        }
    }

    displayWeatherData(currentData, forecastData) {
        this.hideLoading();
        this.hideError();
        
        // Display current weather
        this.displayCurrentWeather(currentData);
        
        // Display forecast
        this.displayForecast(forecastData);
        
        // Show sections
        this.currentWeather.classList.remove('hidden');
        this.forecastSection.classList.remove('hidden');
    }

    displayCurrentWeather(data) {
        this.currentCity.textContent = `${data.name}, ${data.sys.country}`;
        this.currentDate.textContent = this.formatDate(new Date());
        this.currentTemp.textContent = Math.round(data.main.temp);
        this.currentIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.currentDescription.textContent = data.weather[0].description;
        this.feelsLike.textContent = Math.round(data.main.feels_like);
        this.humidity.textContent = data.main.humidity;
        this.windSpeed.textContent = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
        this.visibility.textContent = (data.visibility / 1000).toFixed(1); // Convert m to km
    }

    displayForecast(data) {
        this.forecastContainer.innerHTML = '';
        
        // Group forecast data by day and get daily averages
        const dailyForecasts = this.groupForecastByDay(data.list);
        
        // Display next 3 days
        const next3Days = Object.keys(dailyForecasts).slice(0, 3);
        
        next3Days.forEach(date => {
            const dayData = dailyForecasts[date];
            const forecastCard = this.createForecastCard(dayData, date);
            this.forecastContainer.appendChild(forecastCard);
        });
    }

    groupForecastByDay(forecastList) {
        const dailyForecasts = {};
        
        forecastList.forEach(item => {
            const date = new Date(item.dt * 1000).toDateString();
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = {
                    temps: [],
                    descriptions: [],
                    icons: [],
                    humidity: [],
                    windSpeed: []
                };
            }
            
            dailyForecasts[date].temps.push(item.main.temp);
            dailyForecasts[date].descriptions.push(item.weather[0].description);
            dailyForecasts[date].icons.push(item.weather[0].icon);
            dailyForecasts[date].humidity.push(item.main.humidity);
            dailyForecasts[date].windSpeed.push(item.wind.speed);
        });
        
        return dailyForecasts;
    }

    createForecastCard(dayData, date) {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        
        const avgTemp = Math.round(dayData.temps.reduce((a, b) => a + b, 0) / dayData.temps.length);
        const avgHumidity = Math.round(dayData.humidity.reduce((a, b) => a + b, 0) / dayData.humidity.length);
        const avgWindSpeed = Math.round((dayData.windSpeed.reduce((a, b) => a + b, 0) / dayData.windSpeed.length) * 3.6);
        const mostFrequentIcon = this.getMostFrequent(dayData.icons);
        const mostFrequentDescription = this.getMostFrequent(dayData.descriptions);
        
        card.innerHTML = `
            <div class="forecast-date">${this.formatDate(new Date(date))}</div>
            <img src="https://openweathermap.org/img/wn/${mostFrequentIcon}@2x.png" alt="Weather" class="forecast-icon">
            <div class="forecast-temp">${avgTemp}°C</div>
            <div class="forecast-description">${mostFrequentDescription}</div>
            <div class="forecast-details">
                <span>Humidity: ${avgHumidity}%</span>
                <span>Wind: ${avgWindSpeed} km/h</span>
            </div>
        `;
        
        return card;
    }

    getMostFrequent(arr) {
        const frequency = {};
        let maxFreq = 0;
        let mostFrequent = arr[0];
        
        arr.forEach(item => {
            frequency[item] = (frequency[item] || 0) + 1;
            if (frequency[item] > maxFreq) {
                maxFreq = frequency[item];
                mostFrequent = item;
            }
        });
        
        return mostFrequent;
    }

    addToRecentCities(weatherData) {
        const cityInfo = {
            name: weatherData.name,
            country: weatherData.sys.country,
            temp: Math.round(weatherData.main.temp),
            timestamp: Date.now()
        };
        
        // Remove if already exists
        this.recentCities = this.recentCities.filter(city => 
            city.name !== cityInfo.name || city.country !== cityInfo.country
        );
        
        // Add to beginning
        this.recentCities.unshift(cityInfo);
        
        // Keep only last 6 cities
        if (this.recentCities.length > 6) {
            this.recentCities = this.recentCities.slice(0, 6);
        }
        
        // Save to localStorage
        localStorage.setItem('recentCities', JSON.stringify(this.recentCities));
        
        this.loadRecentCities();
    }

    loadRecentCities() {
        this.recentCitiesContainer.innerHTML = '';
        
        if (this.recentCities.length === 0) {
            this.recentCitiesContainer.innerHTML = '<p style="color: white; text-align: center; grid-column: 1 / -1;">No recent cities. Search for a city to get started!</p>';
            return;
        }
        
        this.recentCities.forEach(city => {
            const cityCard = document.createElement('div');
            cityCard.className = 'recent-city-card';
            cityCard.innerHTML = `
                <div class="recent-city-name">${city.name}, ${city.country}</div>
                <div class="recent-city-temp">${city.temp}°C</div>
            `;
            
            cityCard.addEventListener('click', () => {
                this.citySearch.value = city.name;
                this.searchCity();
            });
            
            this.recentCitiesContainer.appendChild(cityCard);
        });
    }

    formatDate(date) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    }

    showLoading() {
        this.loadingSpinner.classList.remove('hidden');
        this.currentWeather.classList.add('hidden');
        this.forecastSection.classList.add('hidden');
        this.hideError();
    }

    hideLoading() {
        this.loadingSpinner.classList.add('hidden');
    }

    showError(message) {
        this.hideLoading();
        this.errorText.textContent = message;
        this.errorMessage.classList.remove('hidden');
    }

    hideError() {
        this.errorMessage.classList.add('hidden');
    }
}

// Load DashBoard
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new WeatherDashboard();
});
