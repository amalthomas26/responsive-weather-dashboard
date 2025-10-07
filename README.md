# Responsive Weather App

A clean, modern, and fully responsive weather application built with vanilla JavaScript. It allows users to search for any city and get real-time weather data, including temperature, humidity, and wind speed.

---

## ## Features & Qualities

This project showcases a range of modern web development practices:

* **📱 Fully Responsive Design:** The interface adapts beautifully to any screen size, from small mobile phones to large desktops. This is achieved using a mobile-first approach with flexible units and media queries.

* **💧 Fluid Typography & Layout:** Text and elements scale smoothly with the screen size thanks to modern CSS features like the `clamp()` function and a robust Flexbox layout.

* **🌐 Real-Time Weather Data:** Fetches up-to-the-minute weather information from the [OpenWeatherMap API](https://openweathermap.org/api) using asynchronous JavaScript (Async/Await).

* **🔐 Secure API Key Handling:** The API key is kept private and secure. It is stored in a `config.js` file which is excluded from the repository via `.gitignore` to prevent public exposure.

* **🌦️ Dynamic Icons:** The main weather icon changes dynamically based on the current weather conditions (e.g., Clear, Clouds, Rain, Snow).

* **🧩 Well-Structured Code:** The project follows best practices for file organization, with separate folders for CSS, JavaScript, and assets, making the codebase clean and easy to maintain.

---

## ## Tech Stack

* **HTML5:** Structured with semantic tags for better accessibility.
* **CSS3:** Styled with modern features like Flexbox, Custom Properties (variables), and `clamp()`.
* **Vanilla JavaScript:** Powers the application's logic, API fetching, and dynamic content updates.

---

## ## Setup & Installation

To run this project locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR-USERNAME/weather-app.git](https://github.com/YOUR-USERNAME/weather-app.git)
    ```

2.  Navigate to the project directory:
    ```bash
    cd weather-app
    ```

3.  Create a `config.js` file inside the `js` folder.

4.  Add your personal OpenWeatherMap API key to `js/config.js`:
    ```javascript
    const apiKey = "YOUR_API_KEY_GOES_HERE";
    ```

5.  Open the `index.html` file in your browser.