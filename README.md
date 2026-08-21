# Weather App

A simple weather dashboard that lets users search for a city and view the current temperature, location, and weather condition.

## Features

- Search for weather by city name
- Display current temperature in Celsius
- Show the current weather condition text
- Display the matching weather icon
- Show a validation message when the input is empty or invalid

## Tech Stack

- HTML
- CSS
- JavaScript
- WeatherAPI

## Project Structure

- `index.html` – App layout
- `styles.css` – Styling and layout
- `script.js` – Fetches weather data and updates the UI
- `config.js` – Stores your personal WeatherAPI key

## Setup

1. Create a file named `config.js` in the project root.
2. Add your personal WeatherAPI key like this:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

3. Make sure `config.js` is loaded before `script.js` in `index.html`:

```html
<script src="config.js"></script>
<script src="script.js"></script>
```

4. Open the project in a browser and search for a city.

## How to Run

1. Open the project folder in a browser.
2. Double-click `index.html` or serve it with a local web server.
3. Enter a city name in the input field and click the search button.

## API

This app uses the WeatherAPI service:

- Endpoint: `https://api.weatherapi.com/v1/forecast.json`
- Requires a valid API key stored in `config.js`

## Notes

- Do not commit your real API key to version control.
- Keep `config.js` local to your machine or add it to a `.gitignore` file if needed.
- This keeps sensitive credentials out of the project source.
