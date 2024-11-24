import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('Suva');
  const [weatherData, setWeatherData] = useState<any>(null);

  // Fetch weather data whenever the city changes
  useEffect(() => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`;

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => alert(error.message));
  }, [city]);

  return (
    <div className="bg-[url('./images/bg_image.jpg')] bg-center bg-cover bg-no-repeat min-h-screen w-full flex flex-col gap-5 items-center justify-start p-10">
      <h1 className="text-white font-bold text-4xl">Weather App</h1>
      <img src="/images/116.png" alt="" className="w-28 h-28" />
      <SearchForm setCity={setCity} />

      {weatherData && (
        <>
          <WeatherCard weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
