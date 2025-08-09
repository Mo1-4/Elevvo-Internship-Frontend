# Weather Dashboard

A responsive, real-time weather dashboard web application that integrates with the OpenWeatherMap API. Built with HTML, CSS, and JavaScript, featuring a clean, modern UI and comprehensive weather information.

## Features

### 🌤️ Current Weather Display
- Real-time temperature, weather conditions, and icons
- Detailed weather information (feels like, humidity, wind speed, visibility)
- Location-based weather data with country information
- Current date and time display

### 📅 3-Day Forecast
- Daily weather forecasts for the next 3 days
- Average temperature, humidity, and wind speed
- Weather condition icons and descriptions
- Responsive grid layout

### 🔍 Search Functionality
- Search for any city worldwide
- Real-time search with Enter key support
- Loading states during data fetching
- Error handling for invalid cities

### 📍 Geolocation Support
- Automatic weather detection for user's current location
- Location button for manual geolocation requests
- Fallback to manual search if location access is denied

### 💾 Recent Cities
- Automatically saves recently searched cities
- Quick access to previous searches
- Local storage persistence
- Click to quickly load weather data

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Clean, minimal interface with glassmorphism effects
- Smooth animations and hover effects
- Beautiful gradient backgrounds
- Font Awesome icons for enhanced visual appeal

## Setup Instructions

### 1. Get OpenWeatherMap API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Configure the Application
1. Open `script.js` in your code editor
2. Find the line: `this.apiKey = 'YOUR_API_KEY_HERE';`
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key
4. Save the file

### 3. Run the Application
1. Open `index.html` in your web browser
2. The application will automatically attempt to get your location
3. Use the search bar to find weather for any city
4. Click the location button to get weather for your current location

## File Structure

```
Weather API Dashboard/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and API integration
└── README.md           # This file
```

## API Integration

The application uses the OpenWeatherMap API with the following endpoints:

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

### API Parameters
- `q`: City name for search
- `lat/lon`: Coordinates for geolocation
- `appid`: Your API key
- `units`: Metric (Celsius, km/h)

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (not supported)

## Features in Detail

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interface

### Error Handling
- Network error detection
- Invalid city name handling
- Geolocation permission handling
- User-friendly error messages

### Performance Optimizations
- Efficient DOM manipulation
- Minimal API calls
- Local storage for caching
- Smooth animations

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast design

## Customization

### Changing the Theme
Modify the CSS variables in `styles.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding More Weather Data
Extend the API calls in `script.js` to include additional weather parameters like:
- UV index
- Air quality
- Sunrise/sunset times
- Pressure

### Modifying the Forecast Period
Change the forecast days by modifying the slice in `displayForecast()`:
```javascript
const next3Days = Object.keys(dailyForecasts).slice(0, 3); // Change 3 to desired days
```

## Troubleshooting

### Common Issues

1. **"City not found" error**
   - Check spelling of city name
   - Try using the full city name with country code (e.g., "London, UK")

2. **Location not working**
   - Ensure location permissions are enabled in your browser
   - Check if HTTPS is required (some browsers require secure connection)

3. **API errors**
   - Verify your API key is correct
   - Check if you've exceeded the free tier limits
   - Ensure the API key is active

4. **Styling issues**
   - Clear browser cache
   - Check if all CSS files are loading properly
   - Verify Font Awesome CDN is accessible

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Ensure your API key is valid and active
4. Test with different browsers to isolate issues

---

**Note**: This application requires an active internet connection to fetch weather data from the OpenWeatherMap API.
