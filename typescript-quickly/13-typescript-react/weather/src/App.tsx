import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { Weather } from './weather';
import WeatherInfo from './weather-info';
const has = (value: any):value is boolean => !!value;

const App: React.FC = () => {
  const appId = '0961c7d4a45ac4c9aeaad58419175f0c';
  const units = 'imperial';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const suffix = `&units=${units}&appid=${appId}`

  const [weather, setWeather ] = useState<Weather | null>(null);
  
  const getWeather = async (city: string): Promise<void> => {
    const response = await fetch(baseUrl + city + suffix);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      const weatherReport: Weather = data.main;
      weatherReport.city = data.name;
      setWeather(weatherReport);
    } else {
      setWeather(null);
    }
  }

  const [ city, setCity ] = useState('London');
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  }

  useEffect(() => {
    getWeather(city);
  }, []);

  const handleSumit = (event: FormEvent) => {
    event.preventDefault();
    getWeather(city);
  };

  const [msgFromChild, setMsgFromChild] = useState('');
  const getMessageFromChild = (msg: string) => {setMsgFromChild(msg)};

  return (
    <>
      <form onSubmit={handleSumit}>
        <h2>City: {city}</h2>
        <input type="text" placeholder="Enter city"
          onChange={handleChange} />
        <button type="submit">Get Weather</button>
      </form>
      {msgFromChild}
      {has(weather) ? (
        <WeatherInfo weather={weather} parentChannel={getMessageFromChild} />
      ) : (
        <h2>No weather available</h2>
      )}
    </>
  );
}

export default App;
