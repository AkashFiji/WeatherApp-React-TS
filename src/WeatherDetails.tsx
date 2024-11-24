import React from 'react';

interface WeatherDetailsProps {
  weatherData: any;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  const { main, wind, weather } = weatherData;

  return (
    <div className="flex w-full justify-between bg-[#0198afb6] p-3 backdrop-blur-2xl ease-in-out duration-500 rounded-xl md:w-3/5 lg:w-[35%]">
      <div className="flex flex-col justify-start">
        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="font-bold text-4xl text-white">{weather[0].main}</p>
        <p className="font-semibold text-white">{weather[0].description}</p>
      </div>
      <div className="w-1/2 flex-col space-y-2">
        <div className="flex w-full justify-around items-center bg-white/30 rounded-lg p-1 gap-6">
          <p className="font-bold text-2xl text-[#ff5a00] text-right">{main.temp}°C</p>
          <p className="text-sm text-white text-right">Temperature</p>
        </div>
        <div className="flex w-full justify-around items-center bg-white/30 rounded-lg p-1 gap-6">
          <p className="font-bold text-2xl text-[#ff5a00] text-right">{wind.speed} m/s</p>
          <p className="text-sm text-white text-right">Wind</p>
        </div>
        <div className="flex w-full justify-around items-center bg-white/30 rounded-lg p-1 gap-6">
          <p className="font-bold text-2xl text-[#ff5a00] text-right">{main.humidity} %</p>
          <p className="text-sm text-white text-right">Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
