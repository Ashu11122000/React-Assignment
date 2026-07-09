import { useState } from "react";
import { getWeather } from "../services/weatherService";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">🌤️</div>

        <div>
          <h2 className="text-2xl font-bold text-orange-600">
            Weather Check
          </h2>

          <p className="text-gray-500">
            Check the weather before your walk.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleSearch}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-6 text-orange-600 font-semibold">
          Loading weather...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center mt-6 text-red-600 font-semibold">
          {error}
        </p>
      )}

      {/* Weather Card */}
      {weather && (
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-orange-700">
                {weather.location.name}
              </h3>

              <p className="text-gray-600">
                {weather.location.region}, {weather.location.country}
              </p>

              <h2 className="text-5xl font-bold mt-4 text-orange-600">
                {weather.current.temp_c}°C
              </h2>

              <p className="text-lg mt-2">
                {weather.current.condition.text}
              </p>
            </div>

            {/* Weather Icon */}
            <div>
              <img
                src={`https:${weather.current.condition.icon}`}
                alt={weather.current.condition.text}
                className="w-28 h-28"
              />
            </div>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-600">
                Humidity
              </h4>

              <p className="text-2xl font-bold text-blue-600">
                {weather.current.humidity}%
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-600">
                Wind Speed
              </h4>

              <p className="text-2xl font-bold text-green-600">
                {weather.current.wind_kph} km/h
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-600">
                Feels Like
              </h4>

              <p className="text-2xl font-bold text-purple-600">
                {weather.current.feelslike_c}°C
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-gray-600">
                Last Updated
              </h4>

              <p className="text-lg font-semibold text-gray-700">
                {weather.current.last_updated}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;