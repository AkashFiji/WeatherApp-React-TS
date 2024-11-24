import React from 'react';

interface WeatherCardProps {
  weatherData: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { weather, main, wind, sys, name } = weatherData;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="p-5 w-4/5 justify-between flex rounded-3xl shadow-2xl cursor-pointer transform ease-in-out bg-white/20 duration-500 backdrop-blur-sm md:w-3/5 lg:w-[35%] hover:scale-[105%]">
      <div className="flex flex-col">
        <div className="mb-6">
          <p className="font-bold text-5xl text-white">{main.temp}°C</p>
          <p className="font-semibold text-md text-white">Now</p>
        </div>
        <p className="font-semibold text-xl text-white">
          <span>{name}</span>, <span>{sys.country}</span>
        </p>
      </div>
      <div className="flex justify-end items-center">
        <img className="w-28 h-28" src={weatherIcon} alt="weather icon" />
      </div>
    </div>
  );
};

export default WeatherCard;
