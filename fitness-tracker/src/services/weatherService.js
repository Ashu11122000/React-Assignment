import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/**
 * Fetch current weather for a given city.
 * @param {string} city
 * @returns {Promise<Object>}
 */
export const getWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
        aqi: "no",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.error?.message || "Unable to fetch weather.",
        { cause: error }
      );
    }

    throw new Error("Network error. Please try again.", { cause: error });
  }
};