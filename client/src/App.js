import './App.css';
import Home from './components/Home.js';
import React, { useState, useEffect } from 'react';
import Axios from "axios"


const API_URL = 'https://icanhazdadjoke.com/slack'
const API_URL2 = 'https://api.weather.gov/gridpoints/OTX/141,45/forecast';

function App() {
  const [joke, setJoke] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {

    Axios.get(API_URL2).then(res => setWeather(res.data.properties.periods[0].detailedForecast))

    Axios.get(API_URL).then(res => setJoke(res.data.attachments[0].text))
  }, []

  )




  return (
    <div className="App">
      <Home joke={joke} weather={weather} />

    </div>
  );
}

export default App;
