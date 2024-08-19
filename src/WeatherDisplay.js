import React from 'react';
import { useSelector } from 'react-redux';

function WeatherDisplay() {
  const { data, status, error } = useSelector((state) => state.weather);

  if (status === 'loading') {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center mt-4 text-red-600">{error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-lg">{data.main.temp}°C</p>
      <p className="text-gray-700">{data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
}

export default WeatherDisplay;
