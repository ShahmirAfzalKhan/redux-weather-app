import React from 'react';
import Header from './Header';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

function App() {
  return (
    <div>
      <Header />
      <div className="bg-green-100 h-60 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-orange-600">Mousam</h1>
        <p className="text-xl mt-2">
          Weather forecasts, nowcasts, and history in a fast and elegant way
        </p>
      </div>
      <Search />
      <WeatherDisplay />
    </div>
  );
}

export default App;
