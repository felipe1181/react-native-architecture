import {WeatherMain, WeatherMainApi} from '../reducers/weather/reducer/types';

export default function normalizeApiWeatherToWeatherEntity(
  weathers: WeatherMainApi,
): WeatherMain {
  return {
    city: weathers.city,
    data: weathers.list.map((weather, index) => ({
      id: `weather-${index}`,
      description: weather.weather[0].description,
      icon: weather.weather[0].icon,
      mainWeather: weather.main.temp,
      maxMainWeather: weather.main.temp_max,
      minMainWeather: weather.main.temp_min,
      time: weather.dt_txt,
    })),
  };
}
