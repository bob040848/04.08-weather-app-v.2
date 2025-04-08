"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { WeatherDisplay } from "./WeatherDisplay";

const WeatherApp = () => {
  const [city, setCity] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchCities = async () => {
    try {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const cityCountryList = res.data.data.flatMap((country) =>
        country.cities.map((city) => ({
          city,
          country: country.country,
        }))
      );
      setCities(cityCountryList);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key: process.env.WEATHERAPI,
            q: cityName,
            days: 1,
          },
        }
      );
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const filtered = cities.filter((entry) =>
      `${entry.city}, ${entry.country}`
        .toLowerCase()
        .startsWith(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5));
  };

  const handleSuggestionClick = (suggestion) => {
    let newCity = city;
    let display = input;

    if (suggestion && suggestion.city) {
      newCity = suggestion.city;
      display = `${suggestion.city}, ${suggestion.country}`;
    } else {
      const cityFromInput = input.split(",")[0]?.trim();
      const matchedCity = cities.find(
        (entry) => entry.city.toLowerCase() === cityFromInput?.toLowerCase()
      );
      if (matchedCity) {
        newCity = matchedCity.city;
        display = `${matchedCity.city}, ${matchedCity.country}`;
      } else {
        display = "";
      }
    }

    setInput(display);
    setCity(newCity);
    setSuggestions([]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center relative">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white"></div>
        <div className="w-1/2 bg-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl p-4">
        <SearchBar
          input={input}
          onInputChange={handleInputChange}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
        <WeatherDisplay city={city} weather={weather} />
      </div>
    </main>
  );
};
export default WeatherApp;
