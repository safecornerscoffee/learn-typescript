import * as React from 'react';
import { Weather } from './weather';

const WeatherInfo: React.FC<{weather: Weather, parentChannel: (msg:string) => void }> = 
({weather, parentChannel }) => {
  const { city, humidity, pressure, temp, temp_max, temp_min } = weather;

  return (
    <>
    <div>
      <h2>City: {city}</h2>
      <h2>Temperature: {temp}</h2>
      <h2>Max temperature: {temp_max}</h2>
      <h2>Min temperature: {temp_min}</h2>
      <h2>Humidity: {humidity}</h2>
      <h2>Pressure: {pressure}</h2>
    </div>
    <div>
      <button onClick={() => parentChannel("Hello from child!")}>Say Hello to parent</button>
    </div>
    </>
  );
}

export default WeatherInfo;