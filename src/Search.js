import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from './slice/weatherSlice';

function Search() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeatherData(city));
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-l-md w-1/2"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-gray-800 text-white p-2 rounded-r-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
